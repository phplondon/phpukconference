---
title: PSR-7 HTTP messages in the wild
speaker: Hannes Van De Vreken
video-id: gOVALgpqHzM
length: "51:42"
---
PSR-7 describes common interfaces for representing HTTP messages. HTTP messages are the foundation of web development. Web browsers and HTTP clients such as cURL create HTTP request messages that are sent to a web server, which provides an HTTP response message. Server-side code receives an HTTP request message, and returns an HTTP response message.

This talk will explain the interfaces defined by PSR-7, how they define the future of interoperability between frameworks and tools. After that there will be a showcase of several implementations and tools such as zend's diactoros package, Guzzle v6, php-http and other packages that show the real power of shared interfaces for HTTP objects. As most projects are ongoing, this talk will also show how PSR-7 and these other tools can already be used today in existing projects.