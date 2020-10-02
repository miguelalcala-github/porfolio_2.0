---
head:
    title: REST API
    technologies: 
        - HTML
        - CSS
        - JavaScript
        - Node.js
        - Express.js
        - SQL ORM Sequelize
    repository: https://github.com/MikeLiam/rest_api
images:
    - https://res.cloudinary.com/da3z5stec/image/upload/v1601645136/portflio-nuxt/rest_api_landscape_01_rtzyja.png
    - https://res.cloudinary.com/da3z5stec/image/upload/v1601645136/portflio-nuxt/rest_api_landscape_02_qa2zbt.png
    - https://res.cloudinary.com/da3z5stec/image/upload/v1601645136/portflio-nuxt/rest_api_landscape_03_uub5ay.png
    - https://res.cloudinary.com/da3z5stec/image/upload/v1601645136/portflio-nuxt/rest_api_landscape_04_vvmehi.png
---
REST API using Express provide a way for users to administer, _creating an account and _log-in, a school database containing information about courses: users can interact with the database by retrieving a list of courses, as well as _adding, _updating and _deleting courses in the database.  
<br/>
Created with node.js, express and SQL ORM Sequelize using middleware for error handlling, authentication and field validations, routes and SQLite database:  
<br/>
- GET _/api/courses_ Non authenticated route to get a list of all courses with respective user owner.  
<br/>
- GET _/api/courses/1_ Non authenticated route to get a course with specific id.  
<br/>
- POST _/api/user_ Non authenticated route to post/create new user. Returning location header to root.   
<br/>
- GET _/api/users_ Authenticated route to get user info (no password)   
<br/>
- POST _/api/courses_ Authenticated route to post/create new course. Returning location header with course uri.   
<br/>
- PUT _/api/courses/:id Authenticated route to put/update a course with specific id   
<br/>
- DELETE _/api/courses/:id Authenticated route to delete a course with a specific id   
<br/>
Every route has its error response where a problem ocurres because empty fields (or invalid format email), non existing course, authentication problem with wrong user/password/don't own course to modify or not found route.