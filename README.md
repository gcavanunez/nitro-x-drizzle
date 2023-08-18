# Nitro x Drizzle

This lil demo is meant to be paired with postgres, to swap out the db checkout [the drizzle docs](https://orm.drizzle.team/docs/installation-and-db-connection)

### Steps

```bash

git clone

npm install

# setup the connection string
cp .env.example .env

# introspect the db and create the schema
npm run db:pull

# copy schema to src and start writing some endpoints!🥂🎉

```

---

Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
