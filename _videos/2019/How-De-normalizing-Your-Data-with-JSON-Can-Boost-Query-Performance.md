---
title: "How De-normalizing Your Data with JSON Can Boost Query Performance"
speaker: David Stokes
video-id: Y7Z1vwbG7rY
length: "29:15"
---
Database joins can be expensive and you can reduce dives into the indexes/data by using JSON columns. By loading data kept in smaller 'stub' tables into main tables it is possible to minimize joins for simple data like address, phone numbers, and the like in schemaless JSON documents. Yes, third normal form or better has advantages at many levels but it is a design that is costly for many-to-many relations! It is very easy to refactor data is is often stagnant or infrequently updated to take advantage of hybrid SQL/NoSQL databases to greatly increase overall query performance plus increase code readability. This approach can completely change your ideas on data architecture and provide easy mutability for future changes.