# BruinBook
This repository contains the code for our CS 35L project: BruinBook. BruinBook aims to provide a social
media site similar to FaceBook for UCLA students. Both the frontend and backend code can be found in
the respective folders. In this README, we will cover how to run the project locally.

## Getting Started
You’ll need:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) 

### Running the Project
Type the following lines in your command line:
```sh
$ git clone https://github.com/dylanzhangg/bruinbook.git
$ cd bruinbook-frontend
$ npm install
$ cd ../bruinbook-backend
$ npm install
```
This will install the necessary dependencies in order to run our project. After that you will need
to create a file named `.env` file in the `bruinbook-backend` folder. The purpose of this file
is to store some of the credentials of the database access (not posted on GitHub for privacy reasons).

After filling the `.env` file with a `PORT`, `DB_URL`, `SESSION_SECRET`, and `CLOUDINARY_URL`, you will be able
to run the server on port 3000 by using the command `npm start` in the `bruinbook-backend` folder. Perform the same
command in the `bruinbook-frontend` folder to start the frontend development server. You may run into an
error that looks like the following:
<img align=center height=200 src=port.png>

This warning occurs because the development server is trying to run on the same port as the backend server. To
solve this problem, just type `y`, and the development server will run on port 3001 instead. Our code runs
the backend server on port 3000 and the frontend server on port 3001. If you would like to use different ports,
please update the places where ports are used in the code.

If everything worked properly, you should be able to direct your browser to [http://localhost:3001/](http://localhost:3001/) 
and see the homepage of our site. 
