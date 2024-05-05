# Fast Pizza

Fast Pizza is a React application that provides a user-friendly interface for ordering pizzas online. Users can browse the menu, add items to their cart, specify their location, and place orders. The app also includes features for tracking order status and managing order details.

## Screenshots

| Main Menu  | Cart Items |
| ------------- | ------------- |
|  ![Screenshot 2024-05-05 112738](https://github.com/Vahidpro/fast-pizza/assets/43805831/a765721c-d913-4465-9926-d9f1f941696d) |  ![Screenshot 2024-05-05 112758](https://github.com/Vahidpro/fast-pizza/assets/43805831/e5e06324-209d-468b-afb1-abae96180d39)|

| User information  | Order Details |
| ------------- | ------------- |
|  ![Screenshot 2024-05-05 112819](https://github.com/Vahidpro/fast-pizza/assets/43805831/f43a4fa3-be8b-4cd8-b147-d00b3e1c06a7)| ![Screenshot 2024-05-05 112913](https://github.com/Vahidpro/fast-pizza/assets/43805831/eb9beee0-17a3-4cf6-aea7-1ddcd79f4394)|

## Technologies Used

### Frontend
- React (v18.2.0)
- React Redux (v9.1.1)
- React Router DOM (v6.22.3)
- Redux Toolkit (v2.2.3)

### Development Dependencies
- Vite
- Tailwind CSS
- ESLint
- Prettier

### APIs
- BigDataCloud Reverse Geocoding API (for getting user address from coordinates)
- Custom API (for menu, order management, and other server-side operations)

## Features

### Menu Browsing
- Users can view the available pizza menu and its details.

### Cart Management
- Users can add items to their cart and adjust quantities.
- The cart displays the total price based on the selected items.

### User Information
- Users can provide their name and contact details during the ordering process.

### Location Tracking
- The app can retrieve the user's location (latitude and longitude) and display the corresponding address using the BigDataCloud Reverse Geocoding API.

### Order Placement
- Users can review their order details, including items, quantities, and total cost, before placing the order.

### Order Status Tracking
- Users can track the status of their orders, such as "Preparing," "Out for Delivery," or "Delivered."

### Order Management
- The app interacts with a custom API to fetch menu data, create new orders, and update order statuses.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Development

1. Start the development server with `npm run dev`.
2. The app will be available at `http://localhost:5173`.

## Building for Production

To build the app for production, run `npm run build`. This will create an optimized build in the `dist` directory.

## Linting and Formatting

- Run `npm run lint` to lint the codebase using ESLint.
- Use Prettier for code formatting, either through an IDE extension or by running `npx prettier --write .` in the project directory.

## License

This code is part of a course curriculum and is intended for educational purposes only.
