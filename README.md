# Cienhoras - An Event Album App
Log in with your Google account to create a post for an event you attended; these posts can be edited or deleted. You will need to include an image, a title, and anything memorable about the event. You will be able to see all user events or a specific user's events.

**Live Demo:** [cienhoras.onrender.com][cienhoras-url]
- in order to fully use app, please reach out to be added as a test user

![website home page][cienhoras-home-img-url]

## How It's Made: 
### Tech used:
- HTML
- CSS
- JS
- Bootstrap
- Node.js
- Cloudinary
- connect-mongo
- cross-env (dev)
- dotenv
- EJS
- Express.js
    - express-session
    - method-override
    - morgan (dev)
- MongoDB
- Mongoose
- multer
- nodemon (dev)
- Passport.js
    - passport-google-oauth20

In order to start the project, accounts for Cloudinary, FontAwesome, Google Cloud Console, and MongoDB were setup. 

The backend of the project was created first using Node.js as the runtime and Express.js as the server framework. Part of the front end - using the templating language: EJS - was implemented as well in order to display the content the server would be providing. 

During development, cross-env was used to allow for a development and production environment, nodemon was used to refresh the server when changes to the app were made, and morgan was used to display the requests to the server. 

An MVC file structure was utilized to set up the appropriate Models, Views, Routes, and Controllers for each page and request within each page. 

Lastly, Bootstrap was used as the CSS framework.

## Installation
0. node and accounts
    - ensure node is installed; if installed, the command below will return a version number (e.g., v18.2.0)
    ```sh
    node -v
    ```
    - ensure you have accounts set up for Cloudinary, FontAwesome, Google Cloud Console, and MongoDB
1. clone the repo
    ```sh
    git clone https://github.com/ROEL12037/cienhoras.git
    ```
2. cd into cienhoras directory
3. create .env file in config folder
4. add the following key value pairs to the .env file 
    - PORT = *enter a port number*
    - URI = *mongodb uri*
    - GOOGLE_CLIENT_ID = *google client id*
    - GOOGLE_CLIENT_SECRET = *google client secret*
    - CLOUD_NAME = *cloudinary name*
    - CLOUD_KEY = *cloudinary key*
    - CLOUD_SECRET = *cloudinary secret*
5. install NPM packages
    ```sh
    npm install
    ```
6. start server
    ```sh
    node server.js
    ```
7. open web browser and navigate to: http://localhost:*port number entered in .env file*/ (e.g., http://localhost:8000/)

## Future Optimizations
- Allow for private and public posts
    - Only show public posts in Feed
- Better format of posts with tall images
- Ability to like posts
- Ability to add comments

## Lessons Learned:
- Since Cloudinary allows images to be overwritten, there is no need to resave a URL in the database.

[cienhoras-url]: https://cienhoras.onrender.com/
[cienhoras-home-img-url]: https://res.cloudinary.com/di2ps252x/image/upload/c_scale,q_100,w_600/v1674669563/cienhoras-home_xwbshe.png