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
* Ph.D in Computer Vision, Imperial College London, 2018-2023

Work experience
======
* **Huawei Noah’s Ark Lab UK** Research Scientist: 06/23 - present
  * Foundational research on knowledge distillation for vision-language models.
  * Working with multi-modality models and LLMs.

* **Samsung Research UK** Machine Learning Research Scientist Intern: 06/22 - 12/22
  * Introduced a novel method for semi-supervised video object segmentation on mobile devices, using a
unification of representation distillation and contrastive learning.
  * Achieved competitive performance despite running up to ×5 faster, and with ×32 fewer parameters.
  * This work has been accepted for presentation at CVPR 2023.

* **Waymont Consulting** Software Engineer Intern: 06/17 - 09/17
  * Developed a responsive web GUI with a C++ backend to automate tests for signal processing equipment.
  * Replaced previously manual testing system and increased efficiency by hundredfold.

* **Toshiba Research Europe** Research Engineer Intern: 06/16 - 09/16
  * Designed out-of-tree blocks in C++ using the GNURadio signal processing environment to characterise
  and linearise a communication channel between two USRP devices.
  * Conducted research on utilising the RC-5 Infrared (IR) remote control standard for short-range, low-cost, and low-data rate IoT applications

* **Toshiba Research Europe** Research Engineer Intern: 06/15 - 09/15
  * Developed a MATLAB GUI to operate a motor-driven positioner in conjunction with a Vector Network Analyzer for measuring antenna patterns within an anechoic chamber.
  * Modified existing VB.NET code to synchronize two X-Y positioners for analyzing propagation channels.
  
Skills
======
* Programming: C++, Python, CUDA, C#, VHDL, MATLAB
* Frameworks: PyTorch, Tensorflow, CuDNN, OpenCV, Vivado HLS, Qt, Django
* Web Dev: HTML, CSS, JavaScript, Python, SQL

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

