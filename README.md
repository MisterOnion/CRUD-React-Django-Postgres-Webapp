# Note
This is made for users that are starting out with building simple CRUD web applications with local host.

## Techstack
React
Python
Postgres

Python Libaries: 
- django (web framework for development logic tasks)
- psycopg2-binary libraries (Postgres DB adapter)
- django-cors-header (Cross-Origin Resource Sharing)
- djangorestframework (REST API framework on top of django)

For better naming convention, create a backend folder in your React project.
In this folder, initialize a django project and a django application 

'''\
django-admin startproject services (create Django project command)\
cd services\
python manage.py startapp announcements (have Django execute the logics in the folder command)\
'''

Using Postgres, we create a table (this is not complete information, look up Postgres tutorial on YouTube)

<img width="748" height="244" alt="image" src="https://github.com/user-attachments/assets/a8632e7d-c4e6-42ae-a892-12b6d913ebdb" />
<img width="481" height="156" alt="image" src="https://github.com/user-attachments/assets/095a8066-9d6c-455f-bbcb-0cd9f56d7dd0" />

<i><u>Backend API Calls JS</u></i>\
To handle backend calls, we need a vanilla JavaScript file (CRUD.js) that parses these data to the database.\
It contains the base URL for the database’s hosting location. \
This is where most of CRUD operations are defined.\
These functions are then imported into the .JSX file for React to handle the logic\

<i><u>Database credentials and installed apps</u></i>\
Note: \
Projects and applications are separate in the Django ecosystem. A project may have many applications.\ 
Project applications must be included in the “INSTALLED_APPS” definition.\
When a Django project is initiated in the React project backend folder, your project name will have a settings.py file that contains the details of the DB in use for the React web app.\
The example below is the DB details defined in the file:
<img width="633" height="187" alt="image" src="https://github.com/user-attachments/assets/b227b037-f8c7-4d53-b938-dc61124d607d" />

You would also need to define the applications used to help React and Postgres talk to each other. Like the example below:\
<img width="628" height="227" alt="image" src="https://github.com/user-attachments/assets/29f0e9b0-84e5-48f1-acd7-d17162cbd5e5" />

Aside from that, you would need to allow Cross Origin Resource Sharing between them by defining the localhost URL origin to send or receive requests. Like the example below:\
<img width="628" height="303" alt="image" src="https://github.com/user-attachments/assets/64315600-085c-4ebf-9d06-b7f90542b55e" />

<i><u>Models.py to parse data to the DB table</u></i>\
In your application folder, the models.py defines the structure and behavior of the data it gets from the React frontend to the Postgres database.\
Each model maps to a single database table, it is a definitive source of data information for that particular application in the Django project.
<img width="626" height="265" alt="image" src="https://github.com/user-attachments/assets/248dc8b6-72f7-453b-9fb3-c3f642293d63" />
This is the endpoint where we test the DB connection using shell by initiating with the command below:\
“python manage.py shell”\
And type in a temporary code:\
<img width="626" height="190" alt="image" src="https://github.com/user-attachments/assets/213e3dec-ba26-47d1-9442-c5b2f237cf53" />

<i><u>PI Views for receiving data from Postgres DB</u></i>\
To parse the data from the database to React, we will use django’s REST API for it.\
We will first create serializer.py to convert the fetched data into a JSON format for faster data transmission through the API for React to receive and display the data.
<img width="625" height="186" alt="image" src="https://github.com/user-attachments/assets/206d93d5-dfb6-4f86-b30a-2c50b39fc1d0" />

We will use this serializer class in the views.py for each data object that passes through.\
<img width="627" height="169" alt="image" src="https://github.com/user-attachments/assets/b61a6118-600d-47b3-96fd-6f8626bff992" />

Once these are setup, we can run the server.\
Any errors can be examined in the console.log and VScode terminals.\
The base URL must include “/” so it is ready to locate the files in the URL.\
It is also a good practice to include try catch statements or error handling code for debugging\
Else, the database may have errors such as error 415, error 400, and error 500.\

<i><u>Test Django and Postgres connection</u></i>\
When folder terminal running “python manage.py shell”\
If the READ and CREATE functions are operational, it will look something like this below
<img width="708" height="325" alt="image" src="https://github.com/user-attachments/assets/cc51e581-6700-4420-b042-a7da89928ad0" />

<i><u>Local hosting the project</u></i>\
Start the Postgres DB
1.	Open pgAdmin4 to start up the database

Start the Django application
1.	Go to the backend folder, where manage.py file is located.
2.	Start a new terminal.
3.	Type “python manage.py runserver” to start the Django application.

Start the React web application
1.	Go to the “main.jsx” file
2.	Start a new terminal and type in “npm run dev” to local host the web app.

“Ctrl + c” to kill any processes in the terminal



## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)


Backend API Calls JS 
To handle backend calls, we need a vanilla JavaScript file (CRUD.js) that parses these data to the database.
It contains the base URL for the database’s hosting location. 
This is where most of CRUD operations are defined.
These functions are then imported into the .JSX file for React to handle the logic

Database credentials and installed apps
Note: 
Projects and applications are separate in the Django ecosystem. A project may have many applications. 
Project applications must be included in the “INSTALLED_APPS” definition.
When a Django project is initiated in the React project backend folder, your project name will have a settings.py file that contains the details of the DB in use for the React web app.
The example below is the DB details defined in the file:



## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
