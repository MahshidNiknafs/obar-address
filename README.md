# Ubaar-Address

## Overview

Ubaar-Address is a task-based React project. It consists of two main pages:

1. **Create Address Page** – Users can enter information to create a new address.
2. **Addresses List Page** – Users can view all saved addresses.

## Features

- Create a new address by filling out a form.
- Select a location on a map using Leaflet.
- Submit and navigate to a success page.
- View all stored addresses from an API.
- Responsive design for different screen sizes.

## Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ubaar-address.git
   ```
2. Navigate into the project directory:
   ```sh
   cd ubaar-address
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Tech Stack

- **React** – For building the user interface.
- **Vite** – For fast development and bundling.
- **React Router** – For client-side routing.
- **Leaflet** – For interactive maps.
- **React Hook Form** – For managing forms efficiently.
- **Axios** – For API requests.
- **CSS** – For styling.
- **JavaScript (ES6+)** – Core language.

## Usage

1. When you start the app, you will see the **Create Address** form.
2. Fill in the required fields and submit the form.
3. If valid, you will navigate to the **Location Picker Page** where you can select a location on the map.
4. After selecting a location, submit the form again to add the address data.
5. If successful, you will be redirected to the **Success Page** with a confirmation message.
6. In the **Header**, there is a link to **Addresses** where you can view all stored addresses from the API.

## Additional Notes

- The app is fully responsive and works on different screen sizes.
- The project is structured using reusable components.
- No future improvements or additional features are planned at the moment.
