
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

orm 操作
1. Set the DATABASE_URL in the `.env` file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run `prisma db pull` to turn your database schema into a Prisma schema.
3. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.
