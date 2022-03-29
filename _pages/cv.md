---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* MEng in Electrical and Electronic Engineering, Bristol University, 1st Class Honours 78%, 2014-2018
* Ph.D in Computer Vision, Imperial College London, 2018-2023 (expected)

Work experience
======
* Summer 2017: Software Developer
  * **Waymont Consulting**
  * Developed software to automate the testing of various in-house equipment. The design integrated phase noise, noise figure, band-width, crosstalk, and other algorithms into the test suite. The software was written in C++ on a mongoose server with a web GUI as the user interface. The software offered a hundredfold increase in efficiency over manual testing and is de- signed to be flexible and scaleable for new test types and equipment interfaces. VHDL implementation of a 64 bit parallel CRC block. The design was pipelined to calculate a running CRC for the incoming packets over 10GB ethernet.

* Summer 2016: Research Internship
  * **Toshiba Research Europe**
  * Characterise and linearise a channel between two USRP devices using the GNURadio signal processing environment. This involved modifying and designing out of tree blocks in C++. Investigating the feasibility of using the RC-5 Infrared (IR) remote control standard (as used for TVs and other consumer applications) for short-range, low-cost and low-data rate Internet of Things (IoT) applications.

* Summer 2015: Research Internship
  * **Toshiba Research Europe**
  * Develop a GUI in MATLAB to control a motor driven positioner in harmony with a Vector Network Analyser, enabling the measurement of antenna patterns inside an anechoic chamber. Rewriting and modifying existing VB.NET code in MATLAB to allow the synchronisations of two X-Y positioners for characterising propagation channels. Documenting the commands of procedures for communication with an off-the-shell Software Defined Radio for use in wireless networks.
  
Skills
======
* Programming: C++, Python, CUDA, C#, VHDL, MATLAB, ...
* Frameworks: Tensorflow, PyTorch, CuDNN, OpenCV, Vivado HLS, Qt, Django
* Web Dev: Html, css, JavaScript, PHP, SQL, ...
* Misc: Academic research, teaching, and LaTeX typesetting.

Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul> -->
  
Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams
 -->

Graduate teaching assistant for the following final year courses:
* Deep Learning
* Machine Learning
* Computer Vision and Pattern Recognition

Awards and Achievements
======
* **Highly Commendable Award in the ARM 24 Hour Hackathon** : Developed a wearable electronic glove to identify the alphabetic letters in sign language gestures. The glove could then convert the series of gestures into speech using the built in speakers.

