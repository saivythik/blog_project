# Django Blog API

This is a simple blog API built with Django and Django REST Framework.

## Setup

1. Clone the repository
2. Create a virtual environment and activate it
3. Install dependencies: `pip install -r requirements.txt`
4. Run migrations: `python manage.py migrate`
5. Create a superuser: `python manage.py createsuperuser`
6. Run the server: `python manage.py runserver`

## API Endpoints

- GET /api/posts/ - List all posts
- POST /api/posts/ - Create a new post (authentication required)
- GET /api/posts/<id>/ - Retrieve a specific post
- PUT /api/posts/<id>/ - Update a specific post (authentication required)
- DELETE /api/posts/<id>/ - Delete a specific post (authentication required)
- GET /api/posts/<id>/comments/ - List all comments for a specific post
- POST /api/posts/<id>/comments/ - Create a new comment for a specific post (authentication required)
- POST /api/posts/<id>/like/ - Like or unlike a post (authentication required)

## Authentication

To authenticate, send a POST request to `/api-token-auth/` with your username and password. Use the returned token in the Authorization header of your requests:

## Running Tests

Run `python manage.py test` to execute the test suite.


## Frontend Setup (Vite + React)

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser

The frontend includes:
- A list of all posts with pagination
- Individual post view with comments
- Like functionality for posts
- Comment submission for authenticated users
- Basic login functionality

This frontend is built with Vite for faster development and better performance.