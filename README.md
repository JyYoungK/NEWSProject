# NEWS Project

(Note: This website does not have the paid API key. Some components are limited)

Demo URL: https://news-project-junyoung.vercel.app/

### Frontend

- React/NextJS13 as framework
- Dynamic Data
- Typescript
- GraphQL
- React Router for navigation
- Tailwind/MUI for Design and CSS

### Generate Working Website on your localhost

- Create `.env.local` file inside client
- Fill in the followings
- MEDIASTACK_API_KEY = https://mediastack.com/quickstart <-- Go to this link and Sign Up, then you should get API Access Key in Step 1. Copy it without the ""
- STEPZEN_API_KEY = https://stepzen.com/getting-started?details=rest <-- Go to this link and Sign Up, then you should see Enter your Admin Key when prompted. Copy it without the ""
- NEXT_PUBLIC_WEATHER_API_KEY = https://openweathermap.org/api <-- Go to this link and Sign Up, then you should see your Key when prompted. Copy it without the ""

### Deploying to Vercel

- Create a vercel account and download vercel. I did `npm i -g vercel`
- Then open terminal and type `vercel login` to log in.
- In terminal type `vercel` to create a project.
- Go to vercel website and set up env variables. For this project, it needs 3. (MEDIASTACK_API_KEY, STEPZEN_API_KEY, NEXT_PUBLIC_WEATHER_API_KEY)
- Type `vercel env pull` . It should generate .env file
- Type `npm run build` in terminal.
- Finally Type `vercel` again.

### To update

- Type `vercel` in terminal or make a commit to github

### Check if APIKey is working correctly

- Open powershell and type `stepzen start`
- It will ask how you want to continue. Choose `Log in via stepzen.com`
- Use your Stepzen Admin Key and it will give you GraphiQL link that looks like `http://localhost:5001/api/...`

ex)

- MEDIASTACK_API_KEY = 1738f884cc43a0a35f70613a84353236

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
7. **DO NOT** to use `<html>` in children page.tsx or layout.tsx. It will cause hydration error!!! Use `<main>` or `<>` instead
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
14. Static vs Dynamic information

- Dynamic Information means every time a request comes in you should fetch fresh value.
- Static Information by default has a caching mechanism. We can use the next config to revalidate property. Simply said using an example, all users will get the same data for x amount
  of time because it will be stored in cache. After x amount of time, cache will be updated with new value. Code explanation is seen under fetchNews line 42

15. Use line-clamp to make long setences shorter. Truncate is for one line. Install npm from here and add plugins as well. https://tailwindcss.com/blog/multi-line-truncation-with-tailwindcss-line-clamp

16. It is possible to make parent class client but it's child class server as long as the child class receives server components as a prop.
    For example look at `Providers.tsx` and `layout.tsx`

17. Toggle Theme, I used `npm i next-themes`. Check out `Providers.tsx` for use. Must add `darkMode: "class",` inside `tailwind.config.js`

18. Using NextJS, you must ADD the prefix `NEXT_PUBLIC_` to all of your environment variables.

# Final Note

There has been many challenges developing and deploying NextJS13. Many hydration error to look out for, avoid using <p> tag as much as possible. I had to use React version 18.2 with NextJS13 to avoid certain crashes. Lastly, using `import { useRouter } from "next/navigation";` caused switching from server to client component to fail when deployed. Overall, it was a tough journey but it allowed me to look up many documents and helped me learn to 'learn on my own' which I think it helped me to grow into a better programmer.
