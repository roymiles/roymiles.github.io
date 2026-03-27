const copyButton = document.querySelector("[data-copy-target]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const target = document.getElementById(copyButton.dataset.copyTarget);

    if (!target) {
      return;
    }

    const originalLabel = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      copyButton.textContent = "Copied";
    } catch (error) {
      copyButton.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 1600);
  });
}

const sectionLinks = Array.from(document.querySelectorAll("[data-section-link]"));
const sectionTargets = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (sectionLinks.length && sectionTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      sectionLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visibleEntry.target.id}`;
        link.classList.toggle("is-active", isActive);
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.45, 0.7],
    }
  );

  sectionTargets.forEach((section) => observer.observe(section));
}
