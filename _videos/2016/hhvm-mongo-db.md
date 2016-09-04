---
title: "HHVM and MongoDB — the perfect combination"
speaker: Derick Rethans
video-id: J412nlAHsIs
length: "46:48"
---
In this talk we will discuss using HHVM and MongoDB together. In the last months I have written an HHVM extension for MongoDB, that mimics the API of a similar PHP extension. On top of each extension we have a layer in PHP that provides the more user friendly aspects of the driver. The PHP part of the driver gets accelerated to nearly the same speed as the extension written in C++, while being vastly easier to update and maintain.

We will dive in to the architecture of the whole setup, HHVM's JIT and extension APIs as well as some comparisons between running your app on PHP+MongoDB and HHVM+MongoDB.