# NEWS Project

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

## NextJS13 + Tailwind Note

1. Everything under `pages` folder are client component
2. To create a server component
3. Create an `app` folder in the root folder. So Everything under `app` folder are server component
4. Go to next.config.js and add this code right under `reactStrictMode: true,`

```
  experimental: {
    appDir: true
  }
```

5. To convert it to NextJS13 format, create page.jsx or page.tsx under app folder which will be the new home directory
6. Since index.jsx or index.tsx inside pages folder is also a home directory, remove it
7. **DO NOT** to use `<html>` in children page.tsx. It will cause hydration error! Use `<main>` or `<>` instead
8. Add import "../styles/globals.css"; inside the layout.jsx or layout.tsx inside app folder to import tailwind
9. To use click, handler or a hook or any interactive element that requires binding to an element you need to switch to a client component.
   To make a server component into a client component under app, add `'use client'` on top of the server code (aka any file in app folder).
10. To navigate, use next/link ex)

```js
<Link href={`/todos/${todo.id}`}>
```

11. API Fetch Techniques

- To force the server-side rendering method you put
  await fetch ( url, {cache:'no-cache'})
- To force the static-side generatation method you put
  await fetch ( url, {cache:'force-cache'})
- To have ISR whereby we can revalidate the pages after a certain given time

```js
await fetch ( url, {next: revalidate: 60})
```

60 represents seconds. can be any number. This method is good if you are fetching a data with many different id
All pages will be cached and stored for 60 seconds to load faster. After 60 seconds it will server side render with a new version and remove all cache. 10. General Other Tip:

12. If you want to find an element type using typescript, use `(e=> data)` and hover on e to find out.
13. Reserved components to use.
    loading.tsx - for loading
    not-found.tsx - not invalid page
    error.tsx - for displaying error
