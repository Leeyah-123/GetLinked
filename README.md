# Get Linked Pre-Hackathon Coding Challenge Repository

Welcome to my coding challenge repository! This README will provide you with all the information you need to understand and navigate my project for the coding challenge.

## Table of Contents

- [Coding Challenge Repository](#coding-challenge-repository)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)

---

## Project Overview

This is a submission for the GetLinked Coding Challenge authored by [Junaid Aaliyah]('https://github.com/Leeyah-123') & [Olamide Simon]('https://github.com/OlamideSimon') using `React + Vite + Tailwind` and also integrates data from the provided Backend REST API to deliver a user-friendly, accessible and visually appealing web application.

## Features

- **Design Implementation**: We have implemented the design elements from the [provided Figma draft](https://www.figma.com/file/5WXTnOu1Yy7vjCDCGKSnib/Getlinked?type=design&node-id=3-9&mode=design&t=hNNBgARNvalItDWS-0), ensuring that the layout, color schemes, and typography closely match the design.

- **API Integration**: The project consumes the provided [Backend API](https://documenter.getpostman.com/view/13489492/2s9YC5zYA5) using `axios`

- **Creativity**: We have added features such as page and component animations to improve user experience.

## Technologies Used

The following technologies were used to build this project:

- **Frontend**:

  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [tailwindcss](https://tailwindcss.com/)

## Getting Started

### Prerequisites

Before you can run this project, you'll need to have the following software/tools installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone [https://github.com/Leeyah-123/GetLinked]
   ```

2. Navigate to the project directory:

   ```bash
   cd [getLinked]
   ```

3. Install the project dependencies:

   ```bash
   pnpm install
   ```

## Usage

To run the project locally, follow these steps:

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open your web browser and access the project at [http://localhost:5173](http://localhost:5173).

## Project Structure

Here is an overview of the project's directory structure:

```plaintext
GetLinked/
│
├── public/
│   └── ...
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   |
│   ├── components
│   │   └── ...
│   ├── hooks
│   │   └── ...
│   ├── routes
│   │   └── contact.tsx
│   │   └── home.tsx
│   │   └── register.tsx
│   ├── sections
│   │   └── Criteria.tsx
│   │   └── Faqs.tsx
│   │   └── Hero.tsx
│   │   └── Overview.tsx
│   │   └── Partners.tsx
│   │   └── Privacy.tsx
│   │   └── Rewards.tsx
│   │   └── RulesAndGuide.tsx
│   │   └── Timeline.tsx
│   ├── utils
│   │   └── ...
│   └── ...
│
├── README.md
├── index.html
└── ...
```
