# Web Entradas San Teleco

## Astro

This project uses [Astro](https://astro.build/) for frontend static generation and API endpoints to implement backend logic

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |
| `npx drizzle-kit push`    | Update/Generate db schema                        |
| `rm reservas.db`          | Removes local DB file                            |

## Styling

- [TailwindCSS](https://tailwindcss.com/)
- [HyperUI](https://www.hyperui.dev/)

## Database

- [LibSQL](https://github.com/tursodatabase/libsql) ([Turso Cloud](https://turso.tech/) or LibSQL Embbedded database)
- [DrizzleORM](https://orm.drizzle.team/) (Database safe operations with abstraction)
- [Zod](https://zod.dev/) (Database squema validation)

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

## How to be able to submit forms

1. Generate custom secret: openssl rand -base64 32
2. Add secret to .env HMAC_KEY=<secret>