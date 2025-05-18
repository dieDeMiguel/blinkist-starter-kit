# Blinkist Starter Kit

A collection of UI components and templates for building Blinkist-like interfaces using shadcn/ui and Next.js.

## Features

- Complete Blinkist-themed UI components
- Ready-to-use page templates (Home, Dashboard)
- Pricing Card component
- Interactive Dashboard with sidebar and header
- Fully responsive design

## Getting Started

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/blinkist-starter-kit.git
cd blinkist-starter-kit
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Using the Registry

This project includes a shadcn registry that allows you to easily install components into your own project.

To build the registry:

```bash
npm run registry:build
# or
pnpm registry:build
```

This will generate the registry files in the `registry` directory.

## Components

Here are some of the key components included:

- **Theme**: Base Blinkist styling and colors
- **Button**: Primary and secondary buttons
- **Card**: Content cards with various styles
- **Dashboard Layout**: Complete dashboard with sidebar and header
- **Pricing Card**: A beautiful pricing card component
- **Sidebar**: Navigation sidebar with active states

## Environment Variables

Create a `.env.local` file in the root of your project with:

```
NEXT_PUBLIC_BASE_URL=your-deployment-url
```

Replace `your-deployment-url` with the URL where your app is deployed. This is used for the "Open in v0" buttons.

## License

MIT License 