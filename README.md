# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## February 22, 2022
Setup project initial steps with "Express Checklist"
    -Create new folder
    -Create index.js
    -Run "npm init -y" to create package.json file with defaults
    -Run "npm install express" so we can make our project an Express framework application
    -Require express at the top of the index.js file
    -Initialize the app variable
    -Create a home page route:
        a. Call app.get()
        b. Set ‘/‘ as the path (first arg)
        c. Write callback function with (req, res) as second arg
        d. Call res.send("Hello World")
    -Call app.listen(3000) to keep server open

Additional Steps:
    -Setup .gitignore file
    -Setup Github repo
    -Add .env file 
        -After creating the .env file you must install dotenv for the project by running "npm i dotenv"
        -Add "require('dotenv').config()" to top of index.js
        -Update server listen port to app.listen(process.env.PORT) so we pull PORT variable from .env file
    -Create Wildcard route in index.js at bottom of the file so it doesn't override other endpoints
    -Setup Controllers folder and file
        -Import the router in index.js 
        -Create first route in controller file pointed towards '/' directory
    -Test routes with POSTMAN