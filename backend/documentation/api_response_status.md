POST /api/tasks

Input:
Title, Description, status (completed, pending)

Success:
201 Created, 200 Okay, 202 Accepted

Failure:
400 Bad Request, 401 Unauthorized, 403 Forbidden, 422 Unprocessable Entity, or 500 Internal Server Error status code

GET /api/tasks

Input:
the complete tasks. Retreieve the existing data
	
Success:
200 Ok

Failure:
400 Bad requests, 401, 403 for unauthorized

GET /api/tasks/:id

Input:
the id of the task to get that specific 

Success:
200 Ok

Failure:
400 Bad requests, 401, 403 for unauthorized

PATCH /api/tasks/:id

Input:
input the id for the specific task for which partially required

Success:
200 Ok

Failure:
400 Bad Rwequests, 401, 403 Unauthorized

DELETE /api/tasks/:id

Input:
give the specific id to Delete that specific

Success:
200 Ok

Failure:
400 Bad Rwequests, 401, 403 Unauthorized
