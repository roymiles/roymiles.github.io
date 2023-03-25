---
title: "Cascaded channel pruning using hierarchical self-distillation"
collection: publications
permalink: /publication/2020-08-16-cascaded-channel-pruning-using-hierarchical-self-distillation
excerpt: 'In this paper, we propose an approach for filter-level pruning with hierarchical knowledge distillation based on the teacher, teaching-assistant, and student framework. Our
method makes use of teaching assistants at intermediate pruning levels that share the
same architecture and weights as the target student. We propose to prune each model
independently using the gradient information from its corresponding teacher. By considering the relative sizes of each student-teacher pair, this formulation provides a natural
trade-off between the capacity gap for knowledge distillation and the bias of the filter
saliency updates. Our results show improvements in the attainable accuracy and model
compression across the CIFAR10 and ImageNet classification tasks using the VGG16
and ResNet50 architectures.'
date: 2020-08-16
venue: 'Proceedings of BMVA British Machine Vision Conference (BMVC’20)'
paperurl: 'https://www.bmvc2020-conference.com/assets/papers/0525.pdf'
citation: 'Miles, R., & Mikolajczyk, K. (2020). Cascaded channel pruning using hierarchical self-distillation. BMVC.'
figure: '/images/cascaded_pruning_self_distillation.svg'
---