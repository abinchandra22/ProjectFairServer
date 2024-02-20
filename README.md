_________server using express js_______

1 create a folder
2 create package .json npm init -y
3 install external packages to create serve  npm i express cors dotenv
4 create .env to hold envirnomental veriable
5 create .gitignore file
6 create index.js file
7 create express server in index.js
    - import dotenv file and call config method : to load content of .env file into process.env
    - import express to a variable
    - import cores to a variable
    - create express server : call express()
    - use cors in express server : 
    - create a port to host server
    - server must listen the port for clint requist 
    - to resolve clint request (http get,post,put,delete) because of rest api
          - server.httpmethode(path,request handler function (req,res)=>{})
    - create a controller folder in server app 
          -create js file for user management
              - define logic for each request handle

    Creating route
  ------------------
  1 create a route folder in server app
    - create a router.js file inside the folder
    - iport express  
    -to set up routes for express use router class           

8 to run server app : use command , node index.js and also update it has start command in package.json script         