## Brief summary of decisions made
1. Some design elements in the application may differ slightly from the Figma mockups due to adjustments for responsive behavior.
2. The application is built with Nuxt, to allow for seamless integration of login authentication features.
3. If there is an error with the https://host.tagmarshal.golf/api/login endpoint, an error message is displayed; however, users can still access the homepage if the existing Nuxt authentication is successful.
4. Pinia is used for efficient state management throughout the application.


## Prerequisites

<b>Node.js:</b> Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

<b>Git</b>  Install Git to manage code versioning. [Download Git here](https://git-scm.com/)

## Getting Started

#### 1. Clone and navigate to the repository 

```bash
git clone git@github.com:has1234513/online-vegetable-store.git
```
#### 2. Configure Environment Variables

```bash
cp .env.example .env
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

```

Locally preview production build:

```bash
# npm
npm run preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
