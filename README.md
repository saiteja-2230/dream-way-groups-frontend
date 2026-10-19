# Dream Way Groups — Corporate Website

A responsive corporate website for **Dream Way Groups**, showcasing its business offerings, real estate and interiors services, and package information.

##  Live Website

**Website:** https://dreamwaycorp.com/

##  Technologies Used

- **Frontend:** React.js
- **Build Tool:** Vite
- **Language:** JavaScript (ES Modules)
- **Styling:** CSS3
- **UI Framework:** Bootstrap 5
- **Icons:** Bootstrap Icons
- **HTTP Client:** Axios
- **Routing:** React Router DOM
- **Backend Integration:** Laravel REST API

##  Key Features

- Responsive corporate website layout
- Business and service presentation
- Real estate and interiors sections
- Package listing and package details pages
- Dynamic package data fetched from a Laravel backend
- About and contact pages
- Events and investment information pages
- Reusable React components
- Responsive styling for desktop and mobile devices

##  Run Locally

### Prerequisites

- Node.js
- npm
- Access to the Laravel API for dynamic package data

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saiteja-2230/dream-way-groups-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dream-way-groups-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a local `.env` file and configure the Laravel API base URL:

   ```env
   VITE_API_URL=your_laravel_api_base_url
   ```

   Replace the placeholder with the appropriate API base URL. Do not commit your actual `.env` file or private credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal.

## 📦 Production Build

Generate the production build:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

##  Developer

**Sai Teja Dodla**

- GitHub: https://github.com/saiteja-2230

##  Project Information

This repository contains the frontend source code for the Dream Way Groups corporate website. Dynamic package information is retrieved from a Laravel backend through API integration.

**Live Website:** https://dreamwaycorp.com/
