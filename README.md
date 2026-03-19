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

'''
django-admin startproject services (create Django project command)
cd services
python manage.py startapp announcements (have Django execute the logics in the folder command) 
'''

Using Postgres, we create a table (this is not complete information, look up Postgres tutorial on YouTube)

<img width="748" height="244" alt="image" src="https://github.com/user-attachments/assets/a8632e7d-c4e6-42ae-a892-12b6d913ebdb" />
<img width="481" height="156" alt="image" src="https://github.com/user-attachments/assets/095a8066-9d6c-455f-bbcb-0cd9f56d7dd0" />


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
