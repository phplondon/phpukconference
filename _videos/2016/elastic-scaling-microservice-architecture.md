---
title: "Elastic scaling in a (micro)service oriented architecture"
speaker: Bastian Hofmann
video-id: YBDscJhz2S0
length: "1:02:25"
---
Splitting an application up into multiple independent services can be a good way to keep it scaling and ensure stability and developer productivity in larger, growing teams. But just splitting the codebase, creating APIs and deploying the code on some servers is not enough, somehow your services need to know where and how other services are accessible. Classical approaches like hardcoding everything in every service or having a central load-balancer can quickly lead to problems in terms of scalability and maintainability. In this talk I'll show how we at ResearchGate tackled this challenge. With the help of tools like Consul and haproxy we created a setup that allows us to quickly boot and shutdown services. This ensures that all servers are utilized optimally and load spikes can be reacted upon quickly and automatically.