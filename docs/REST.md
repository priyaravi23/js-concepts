# REST and API Design

 - Essential Reading [Details](https://restfulapi.net/)
 - URL Design (backend - nodejs)
    - Model using collections (e.g. `reviews`)
    - Get all reviews `/reviews` (use the `GET` verb)
        - Paginate the results by sending a `next` url along with the response.
        - Also use path params `start` and `end` to denote the next set of data.
        - `{reviews: [0 till 249], next: "/reviews?start=250&end=500"}`
    - Get a single review `/reviews/:id` (use the `GET` verb, e.g. `GET /reviews/157ba904-6955-48e2-864f-6b951addf8c1`)
    - Create a new review `/reviews/create` (use the `POST` verb)
    - Delete a review `/reviews/:id/delete` (use the `DELETE` verb)
    - Edit a new review `/reviews/:id/edit` (use the `PUT` verb)

 - Routing in React
   - View all reviews `/reviews`
   - View a single review `/reviews/:id`
