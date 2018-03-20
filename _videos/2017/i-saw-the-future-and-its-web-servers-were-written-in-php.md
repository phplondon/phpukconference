---
title: "I saw the future, and its web servers were written in PHP"
speaker:  David Zuelke
video-id: VjJBR8YAxoE
length: "1:04:02"
---
PHP's stateless execution model is still based on the mechanics of CGI: request in, response out. This simplicity also means overhead on each request from frameworks starting up; applications also cannot interact with the request body during transmission, e.g. for streaming the body or handling upgrades to Websockets. That's why all other web languages now offer production ready web servers implemented purely in each language: Jetty, Puma, Gunicorn and friends use a modern process model and standardized middleware protocols. PHP 7 finally brought some necessary engine changes like catchable fatal errors, so there now is no longer a need for Apache or Nginx: event based HTTP components from projects like ReactPHP or Icicle, brought together by a server like Aerys or PHP-PM, start a framework once, and handle requests in a loop. The result is a massive gain in performance especially with frameworks like Symfony, and the potential for new features that previously were not possible with an external web server in front of an application. Let's explore the current state of affairs, the solutions other programming languages found, and the bright new future that's ahead for PHP, which, as always, will require sacrifices to be made. 
