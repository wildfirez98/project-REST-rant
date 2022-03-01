# Project REST-Rant #

REST-Rant is an app where users can review restaurants.

## February 22, 2022 ##
1.) Setup project initial steps with "Express Checklist"
        
- Create new folder
- Create index.js
- Run "npm init -y" to create package.json file with defaults
- Run "npm install express" so we can make our project an Express framework application
- Require express at the top of the index.js file
- Initialize the app variable
- Create a home page route:
     - Call app.get()
     - Set ‘/‘ as the path (first arg)
     - Write callback function with (req, res) as second arg
     - Call res.send("Hello World")

2.) Additional Steps:

- Setup .gitignore file
- Setup Github repo
- Add .env file 
- After creating the .env file you must install dotenv for the project by running "npm i dotenv"
- Add "require('dotenv').config()" to top of index.js
- Update server listen port to app.listen(process.env.PORT) so we pull PORT variable from .env file
- Create Wildcard route in index.js at bottom of the file so it doesn't override other endpoints
- Setup Controllers folder and file
- Import the router in index.js 
- Create first route in controller file pointed towards '/' directory

## February 23, 2022 ##

1.) Part 2:

- Stub remaining GET and POST routes

     | Method |       Path                   |                    Purpose                           |
     | ------ | ---------------------------- | ---------------------------------------------------- |
     | GET    |     /                        |	Home page                                         |
     | GET    |     /places                  |	Places index page                                 |
     | POST   |     /places                  |	Create new place                                  |
     | GET    |     /places/new              |	Form page for creating a new place                |
     | GET    |     /places/:id              |	Details about a particular place                  |
     | PUT    |     /places/:id              |	Update a particular place                         |
     | GET    |     /places/:id/edit         |	Form page for editing an existing place           |
     | DELETE |     /places/:id              |	Delete a particular place                         |
     | POST   |     /places/:id/rant         |	Create a rant (comment) about a particular place  |
     | DELETE |     /places/:id/rant/:rantId |    Delete a rant (comment) about a particular place  |
     | GET    |               *              |    404 page (matches any route not defined above)    |  

- Planning mock restaurant data
    - Drawing wireframes - INCOMPLETE
    - Choose color scheme for project - INCOMPLETE
    - Making first view - COMPLETE                

## February 24, 2022 ##

1.) Continued on Part 2:
- Completed building stub routes table in README.md - creating tables was challenging due to formatting/spacing issues but figured it out.
- Plan my data. Restaraunts shall consist of (blank table for now):

     |    Name    |      City    |     State    |    Cuisines    |               Picture              |
     | ---------- | ------------ | ------------ | -------------- | ---------------------------------- |
     |            |              |              |                |                                    |

2.) Making default view:
- Run "npm i react express-react-views" this will install both 'react' and 'express-react-views'
- Create 'views' folder in project
- Create 'default.jsx' in 'views' folder

3.) Creating a home page:
- Create 'home.jsx' in 'views' folder
- Update 'res.send' to 'res.render('home') in index.js

4.) Make a 404 page
- Create 'error404.jsx' inside 'views' folder
- Update 'res.send' to 'res.render('error404') in 'index.js'

5.) Make Places index page
- Create new folder called 'places' in 'views'
- Create a view called 'index.jsx' 
- Update 'places.js' to point to 'index.jsx'

6.) Pass mock data into 'places.js' 

## February 26th, 2022 ##

1.) Adding style with CSS
- Use Bootstrap framework
- Add CDN link to 'default.jsx'
- Create 'public' folder and create 'style.css' for own personal styling
- Add CSS link to 'default.jsx'
- Add 'images' folder to 'public' folder

## February 27th, 2022 ##

1.) Adding Form view 
- Want user to be able and click a button or link for 'Add a New Place' that will be access via a GET route to the path /places/new
- Create 'new.jsx' in 'places' folder (this is where all the Form data will be held)
- Create '/places/new' route in '/controllers/places.js'
- Add body parser to 'index.js'
- Create folder 'models' and add file called 'places.js' to hold places array that was in 'controller/places.js'
- Test adding a place - COMPLETED 

## February 28th, 2022 ##

1.) Add Navbar and CSS styling - COMPLETED

2.) Connect the Show route - COMPLETED

3.) Fill out the 'show.jsx' file - 50% Complete

4.) Implement Method Override - COMPLETED
- Install method-override package
     - npm install method-override

5.) Make Edit and Delete Buttons - NOT COMPLETE - REVIEW VIDEO @ 7:54 for ERROR HELP

6.) Implement Delete Route - NOT COMPLETE