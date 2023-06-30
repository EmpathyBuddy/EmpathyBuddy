


User --> CR
Request --> CRUD
Post --> CR

___

some bonus ideas:
- functionality to choose date/time for requests
- display status (ex. request solved or pending)
- upgrade to buddy (users need to pass a step to able to support other users)
  - in User model, add a boolean "isBuddy" (default: false)
  - in the route to provide support:
    - isBuddy === false --> redirect to page to become body
    - isBuddy === true --> accept request
- responsive (mobile first)
  - a. plain css
  - b. bootstrap (ex. className="btn btn-primary", className="col-6")
  - c. comnent library (ex. Ant Design) (ex. <Button /> <Row />)
- U+D only for owner
- U+D posts

