# 💼 Yaxyobek's Portfolio

This project is built with **React**, **Vite**, and **TailwindCSS** to deliver a fast and responsive web application with a streamlined development experience. It includes **Firebase integration** for authentication, database, and hosting, as well as **multi-language support** for better accessibility.

![Project Preview](https://yaxyobekk.uz/preview.jpg)

---

### 🚀 **Live Demo**

🔗 [View Live](https://yaxyobekk.uz/en)

## 📌 Features

- **Vite**: A fast development build tool with Hot Module Replacement (HMR).
- **React**: A JavaScript library for building dynamic user interfaces.
- **TailwindCSS**: A utility-first CSS framework that provides pre-configured styling for rapid UI development.
- **Firebase Integration**: Authentication, Firestore database, and hosting services.
- **Multi-language Support**: Allows users to switch between different languages dynamically.
- **Hot Module Replacement (HMR)**: Enables instant updates without full page reload during development.
- **ESLint**: Configured for linting JavaScript/JSX files for code quality.

## 🔥 Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or Yarn (optional)

### 📥 Installation

1️⃣ Clone the repository:

```bash
git clone https://github.com/yaxyobekuz/portfolio.git
cd portfolio
```

2️⃣ Install dependencies:

```bash
npm install
# or
yarn install
```

### Development Server

To start the development server with HMR:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production

To create a production build of your app:

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

### Linting

To lint your files:

```bash
npm run lint
# or
yarn lint
```

## 🔑 Firebase Configuration

Ensure you have a `.env` file in the root directory with the following Firebase credentials:

```sh
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id
```

## 📂 Project Structure

```bash
├── public/              # Public assets (favicon, etc.)
├── src/                 # Source files
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── layouts/         # Layout components
│   ├── i18n/            # Language translation files
│   ├── firebase/        # Firebase configuration and services
│   ├── index.css        # Tailwind CSS configuration and global styles
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point for the app
│   └── ...              # Others...
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
├── index.html           # Main HTML file
└── package.json         # Project metadata and dependencies
```

## 💨 Customizing TailwindCSS

TailwindCSS is already configured, but you can modify the `tailwind.config.js` file to extend or customize the theme, such as adding new colors, fonts, or spacing values.

Example:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#39965F",
        // ... More colors
      },
    },
  },
};
```

## 🏃 Scripts

- **`dev`**: Starts the development server with HMR.
- **`build`**: Builds the application for production.
- **`preview`**: Previews the production build.
- **`lint`**: Lints your code with ESLint.

## 🛠 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern front-end build tool for blazing-fast development.
- **TailwindCSS**: Utility-first CSS for styling and layout.
- **Firebase**: Backend services including authentication, database, and hosting.
- **PostCSS**: CSS tool for transforming styles with plugins like TailwindCSS.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## 🔍 Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)

---

## 📞 **Contact**

If you have any questions or feedback, feel free to reach out:  
📧 Email: [info@yaxyobekk.uz](mailto:info@yaxyobekk.uz)  
🔗 Website: [yaxyobekk.uz](https://yaxyobekk.uz/en)
