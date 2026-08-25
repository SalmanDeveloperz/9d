# Problem: What's actually required to make a Task Manager API what URLs actually make sense??

For CRUD Operatiosn the route or URL would look like this

POST: /api/tasks

GET: /api/tasks  // could be used simple or with the specific field or id as shown in below

GET: /api/tasks:id

PATCH: /api/tasks:id

PUT:  /api/tasks:id

DELETE: /api/tasks:id  



Now let's decide the Request Body, the data model:

It must inlcude the:

> id 

> Title (Required)

> Description (optional)

> Complete, Pending (by Default)

> Added time

> Updated time



