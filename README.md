# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npx drizzle-kit push`    | Update/Generate db schema                        |
| `rm reservas.db`          | Removes DB                                       |

## Styling

- [TailwindCSS](https://tailwindcss.com/)
- [HyperUI](https://www.hyperui.dev/)

## How to use with local database

1. Go to drizzle.config.ts
2. Change dialect from 'turso' to 'sqlite'
3. Delete 'authToken' / Change 'authToken' for 'token'
4. Use in .env DB_FILE_NAME=file:reservas.db

Now you should use `npx drizzle-kit push` to create the initial database schema

## How to use with Turso cloud database

By default the project uses turso for the database but you need to do some steps to configure it:

1. Add to .env DB_FILE_NAME=<turso_url>
2. Add to .env DB_TOKEN=<turso_token>

Now you should use `npx drizzle-kit push` to create the initial database schema

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
