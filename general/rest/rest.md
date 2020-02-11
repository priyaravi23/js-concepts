Ref: https://restfulapi.net/rest-architectural-constraints/
Exhaustive: http://restcookbook.com/

Resource / Representation
DB (user) / (json / xml / text)

 - Cacheable
 - Uniform Interface
  - Uri format
    - GET `/entities` (to get all entities)
    - GET `/entities/:id` (to get a particular entity)
    - POST `/entities` (to get create an entity)
    - PUT `/entities/:id` (to update an entity)
    - DELETE `/entities/:id` (to delete an entity)
    - Incorrect usage GET /entities?type=json
    - Query params are for filtering and sorting
      - /entities?nameStartsWith=Priya
      - /entities?orderByName=desc
  - Headers
   - Mention the representation of the data required "accept: application/json"
   - Caching (Expires)
  - HTTP Verbs
  - HTTP Status Codes (https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)


 CORS:
   - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

 Caching:
 - Browser Cache
   - Expires header - max-age
   - Etag (204 from the server)
 - Proxy Cache
  - Via (used to identify if there is proxy)
 - Server Cache
  - memcache, redis ..