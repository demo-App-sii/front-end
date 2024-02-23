# Demo App Front end 

This is an Angular 16 application for user authentication with registration and login interfaces. The application utilizes standalone components and is integrated with PrimeNG components for UI enhancement.

## Prerequisites

Before running the application, ensure you have the following dependencies installed:

- Angular CLI: 16.0.0-next.0
- Node: 18.18.0
- Package Manager: npm 9.8.1
- JSON Server (for running the mock backend): [Installation Guide](https://github.com/typicode/json-server#install)

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Running the Application

To run the application locally, follow these steps:

1. Start the Angular development server:

    ```bash
    ng serve
    ```

2. Start the JSON Server to simulate the backend:

    ```bash
    json-server --watch db.json
    ```

3. Open your browser and navigate to `http://localhost:4200` to access the application.

## Features

- **Registration:** Users can register by providing their full name, email, password, and confirming the password.
- **Login:** Registered users can log in using their email and password.
- **Authentication Guard:** The application includes a guard to restrict access to certain routes for logged-in users only.

## Future Enhancements

- Integration with a backend API using Spring Boot.
- Additional features such as password recovery, user profile management, etc.


