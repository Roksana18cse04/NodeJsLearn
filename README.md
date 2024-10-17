# Learn Node JS

# Why Node .js

  - Easy to learn
  - it uses asynchronous programming different than PHP ASP
  - it can helps us to create open read write delete close file the server
  - use for collecting data 
  - use for creating API
  - node js can add delete modify data in your database





## 3 Type Module 
   - Local Module (Create Own )
   - Global Module (Built-in in node Js)
   - Third Party Module (Install from npm or yarn)
      - external file module/ package.json
      - make sure initialize
      - install package
      - 




## FS Module / built in module
- File System Module
   ## Used to interact with the file system module (FS module)
     **There are Asynchonous Function**
     - writefile()
     - appenedFile()
     - readfile()
     - rename()
     - unlink()
     - Exists()

     **Synchronous Function**
     - writeFileSync()
     - appenedFileSync()
     - readFileSync()
     - renameSync()
     - unlinkSync()
     - existsSync()


# Node.js Network 
- **http module**:
- **http.createServer()**: Creates a new HTTP server.


   request some common method are

       get()
       post()
       delete()
       put()
       head()

## HTTP status Code 
    InformationResponse(100-199)
    SuccessResponse(200-299)
    RedirectionResponse(300-399)
    ClientError(400-499)
    ServerError(500-599)

 

# Express.js  
   **Express.js** is a minimal and flexible Node.js web application framework that provides a robust set

   - first routing
   - middleware
   - request and response objects
   - view engine
   - static files
   - error handling
   - body parsing
   - session management
   
      ***routing  Hosting*** 

# ExpressNodeJsLearn
=====================

server side skilled four important topic
=============================================
### 1. Routing
Routing is the process of mapping URLs to specific server-side code. In Express, routing is handled using
the `app.use()` method.
### 2. Response
Response is the data sent back to the client. In Express, response is handled using the `res    
.send()` method.


    

### 3. Request
Request is the data sent from the client to the server. In Express, request is handled using the
`req` object.

***request method***

    get(), post(), put(),delete()

GET Method :
1. create simple get request , 
2. simple get request with URL Parameter, 
3. Catch request header simple get method
4. simple get request with query parameter

POST Method:
1. Request
2. Request with URL Parameter
3. Request Header
4. Request JSON Body
5. Request Multiple form Data
6. Request File Uploads

 
PUT Method:
Delete Method : 
### 4. Middleware
Middleware is a function that runs between the request and response. In Express, middleware is
handled using the `app.use()` method.
### 5. DataBase Operation
DataBase Operation is the process of interacting with a database. In Express, database operation is
handled using the `mongoose` package.


 

