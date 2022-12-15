# NEWS Project

## My note

- Everything under `pages` folder are client component
- To create a server component

1. Create an `app` folder in the root folder
2. Go to next.config.js and add this code right under `reactStrictMode: true,`

```
  experimental: {
    appDir: true
  }
```

3. To convert it to NextJS13 format, create page.jsx or page.tsx under app folder which will be the new home directory
4. Since index.jsx or index.tsx inside pages folder is also a home directory, remove it
5. Add import "../styles/globals.css"; inside the layout.jsx or layout.tsx inside app folder to import tailwind

(Note: This website does not have the paid API key. Some components are limited)

Demo URL: https://spyproject.netlify.app/

## Main Stack - M.E.R.N

### Frontend

- React as framework
- Dynamic Data
- Typescript
- GraphQL
- React Router for navigation
- Tailwind/MUI for Design and CSS

### Generate Full Working Website

- Create `.env.local` file inside client
- Fill in the followings
- VITE_RAPID_API_KEY = https://rapidapi.com/tipsters/api/shazam-core/ <-- Go to this link and Sign Up, then you should see X-RapidAPI-Key inside Code Snippets. Copy it without the ""
- VITE_UNSPLASH_ACCESS_KEY = https://unsplash.com/@developer/ <-- Go to this link Sign Up, then create a project and they will give you API Key. Copy it without the ""

ex)

- VITE_RAPID_API_KEY = KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA
