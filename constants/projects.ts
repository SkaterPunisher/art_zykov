export const projects = [
  // {
  //   title: 'Sberbank',
  //   description:
  //     'This project is an internal enterprise platform for Sber, centered around a complex admin panel. The admin interface is used to manage users, system settings, and business logic. A significant part of the project is dedicated to working with multiple microphone devices, including their configuration, switching, and state management. The application is built to handle high-load scenarios and integrates with internal corporate services.',
  //   stack: 'React, TypeScript, Vite, Zustand, Tanstack Query',
  //   img: '/images/sber.webp',
  //   button: 'On Request',
  //   href: 'https://t.me/skaterpunisher',
  // },
  {
    title: 'Enterprise Micro-Frontend Platform',
    summary:
      'Large-scale micro-frontend product. I lead 6 engineers, own the architecture and an AI-assisted workflow (custom MCP server, Spec-Driven Development).',
    description:
      'A large-scale micro-frontend product for an enterprise client, developed at Bellintegrator. I lead 6 frontend engineers across 4 departments, designed the micro-frontend architecture and API contracts with backend teams. Built a custom MCP server that turns design layouts into production-ready UI code and introduced Spec-Driven Development with AI agents. Results: +25% frontend performance, test coverage raised to 60%, −30% time-to-market for new modules.',
    stack:
      'React 19, TypeScript, Webpack, Vite, Micro-Frontends, Jest, React Testing Library, Styled Components, GitLab CI, MCP, AI Agents',
    button: 'Under NDA',
    href: 'https://t.me/skaterpunisher',
  },
  {
    title: 'Class-Chat',
    summary:
      'SaaS for schools and tutors: admin panel, Telegram and MAX bots, LLM module. Built end-to-end — from database to CI/CD.',
    description:
      'SaaS for schools and tutors: a web admin panel plus Telegram and MAX messenger bots. Teachers manage groups, schedules with exceptions, attendance, homework and delayed broadcasts with file attachments. Multi-tenant model with 4 roles (JWT, RBAC guards), rate limiting and real-time notifications via Socket.IO. A provider-agnostic LLM module (YandexGPT) with system prompts managed from the admin panel without redeploys. Monorepo with shared types, deployed with Docker Compose and GitHub Actions to a VPS.',
    stack:
      'NestJS, React 19, TypeScript, PostgreSQL, TypeORM, Redis, Socket.IO, Telegraf, Vite, TanStack Query, Zustand, Mantine, Docker, nginx, GitHub Actions, YandexGPT',
    img: '/images/class-сhat.webp',
    button: 'Live site',
    href: 'https://class-chat.ru',
  },
  {
    title: 'Empoint',
    summary:
      'Platform for finding psychological support specialists with role-based accounts and video meetings. Led the team, chose the stack and architecture.',
    description:
      'This web application enables clients to find specialists for psychological support. It features role-based personal accounts for clients, specialists, administrators, and moderators. The platform also supports video meetings powered by Agora.io. Multilingual options and both dark and light themes are available to enhance user experience.',
    stack:
      'Next.js v.14, NextAuth (auth.js), JWT, TypeScript, i18next, Redux-Toolkit, RTK-Query, Axios, React Spectrum, Framer motion, SCSS, zod, react-hook-form',
    img: '/images/empoint.webp',
    button: 'Live site',
    href: 'https://empoint.ru',
  },
  {
    title: 'English-Zykova',
    summary:
      'Website for an online English school with Sanity CMS, level tests and lead forms delivered to Telegram. Built and deployed end-to-end.',
    description:
      'Website for an online English language school. Built on Next.js App Router with SSR/SSG and SEO. Content is managed in Sanity CMS (11 schemas: courses, tests, teachers, blog, prices) with an embedded Sanity Studio. Includes interactive level tests, a course cart and lead forms delivered to Telegram via a Next.js API route. Dockerized behind nginx with SSL and auto-deployed via GitHub Actions.',
    stack:
      'Next.js (App Router), TypeScript, Sanity, i18next, Zustand, React Aria, Framer Motion, Tailwind, SCSS, Docker, nginx, GitHub Actions',
    img: '/images/english-zykova.webp',
    button: 'Live site',
    href: 'https://english-zykova.ru/en',
  },
  {
    title: 'Producation',
    summary:
      'Mini-course marketplace for instructors and learners with five user roles and admin user impersonation.',
    description:
      'This project is designed for instructors and learners. Instructors can create mini-courses and offer them for sale. Anyone can register and purchase any available courses. There are five types of roles: learner, instructor, moderator, administrator, and technical director. One of the interesting features is the "user impersonation" functionality, where an administrator can log in as either a learner or an instructor to understand and view the system from their perspective.',
    stack:
      'Next.js v.13, React v.18, JWT, TypeScript, i18next, Redux-Toolkit, RTK-Query, MUI, Framer motion, SCSS, zod, react-hook-form',
    img: '/images/producation.webp',
    button: 'Live site',
    href: 'https://producation.ru',
  },
  {
    title: 'KIT Global',
    summary:
      'Global catalog of business services with multi-currency support, analytics dashboards and billing.',
    description:
      'This project is a global catalog of business solutions, supporting multilingual capabilities and various currencies. It allows users worldwide to connect with service providers for marketing, content creation, and advertising services. The platform features role-based access, intuitive dashboards with analytics, financial reports, and billing tables, making it a versatile tool for business management on an international scale.',
    stack:
      'React v.18, Vite, JWT, TypeScript, i18next, MobX, Axios, SCSS, yup, react-hook-form',
    img: '/images/kit-global.webp',
    button: 'Live site',
    href: 'https://platform.kit.global',
  },
  {
    title: 'Kokoc Group',
    summary:
      'Catalog of business services for the Russian market with OAuth, document workflows and financial dashboards.',
    description:
      'This project is a comprehensive catalog of business solutions tailored for the Russian market. It offers a platform where users can find service providers for marketing, content creation, advertising setup, and more. The project features OAuth-based authentication and incorporates specific document management workflows. Additionally, the platform includes dashboards with detailed analytics, financial tables, and billing information, ensuring efficient business management.',
    stack:
      'React v.18, Vite, OAuth + JWT, TypeScript, i18next, MobX, Axios, SCSS, yup, react-hook-form',
    img: '/images/kokoc.webp',
    button: 'Live site',
    href: 'https://platform.kokocgroup.ru',
  },
  {
    title: 'Medalist',
    summary:
      'HR app for employee motivation: awards, draws and an internal store. Built the frontend from scratch.',
    description:
      'An application for HR departments within companies designed to motivate employees. HR personnel can create awards and nominations, conduct draws, and distribute awards. The app also includes an internal store where prizes can be purchased with points from awards. Additionally, there is an admin panel for creating awards, departments, and companies.',
    stack:
      'Next.js v.13, Keycloak, TypeScript, Redux-Toolkit, RTK-Query, Framer motion, SCSS, Tailwind, MUI, chart.js, Jest',
    img: '/images/medalist.webp',
    button: 'Code',
    href: 'https://github.com/nifontpro/medalist-front/tree/develop_Artem',
  },
  {
    title: 'Medicine',
    summary:
      'Personal accounts for nurses and doctors in Moscow clinics: test scheduling, large data tables, complex forms and charts.',
    description:
      'An application designed for clinics in Moscow. It features personal accounts for nurses and doctors. The platform allows for the scheduling of tests and facilitates the handling of large data sets in tables. It also supports complex forms and charts.',
    stack:
      'TypeScript, React, Redux-Toolkit, Redux-Thunk, Axios, Rest-API, Styled Components, AntDesign',
    img: '/images/medicine.webp',
    button: 'On Request',
    href: 'https://t.me/skaterpunisher',
  },
];
