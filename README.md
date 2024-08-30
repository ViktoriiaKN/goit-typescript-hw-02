goit-react-hw-04 is a React application for searching images, created with Vite and refactored with TypeScript. The app allows users to search for images via the Unsplash API, view them in a gallery, and see larger versions in a modal window.

Project Overview
This project demonstrates the fundamentals of working with React and TypeScript, including type-checking for components, state, and event handlers. Key features include:

Image Search: Users can search for images by keyword using a search form in the header.
Image Gallery: Images are displayed in a gallery view as cards.
Modal Window: Clicking on an image opens a modal window showing a larger version of the image.
Loading Indicator: Shows an indicator while images are being loaded.
Error Message: Displays error messages for HTTP request failures.
Load More Button: Allows users to load additional images.
Tech Stack
React - for building the user interface.
TypeScript - for static typing and enhanced code quality.
Vite - for fast project build and development.
Axios - for making HTTP requests.
React Modal - for implementing the modal window.
React Hot Toast - for displaying notifications.
CSS Modules - for component-level styling.
Project Structure
src/components/: Contains all React components. Each component has its own folder with JSX and CSS module files.
src/api/: Contains functions for interacting with the Unsplash API.
src/hooks/: Contains custom hooks.
src/types/: Contains TypeScript interfaces and types.
