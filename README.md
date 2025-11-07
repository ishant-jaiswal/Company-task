# Company Task - React Application

This is a React-based web application built with TypeScript and Vite, designed for a company to showcase their services and information. The project includes components for user login, hero sections, about pages, team details, and various services such as Film Production, Branding, and Art Curation.

## Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts.
- **Component-Based Architecture**: Modular React components for easy maintenance and scalability.
- **TypeScript Support**: Full TypeScript integration for type safety.
- **Fast Development**: Powered by Vite for quick builds and hot module replacement (HMR).
- **ESLint Configuration**: Configured for code quality and consistency.

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ishant-jaiswal/Company-task.git
   cd Company-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Build for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── AboutTeams.jsx
│   ├── AboutUs.jsx
│   ├── HeroSection.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NavBar.jsx
│   └── services/
│       ├── ArtCuration.jsx
│       ├── Branding.jsx
│       ├── FilmProduction.jsx
│       └── Service.jsx
├── assets/
│   └── (various images)
├── App.tsx
├── main.tsx
└── index.css
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint to check for code issues
- `npm run preview`: Previews the production build locally

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
