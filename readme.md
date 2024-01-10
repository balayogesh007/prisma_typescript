//initialize the package.json
npm init -y

//install prisma with typescript, ts-node for typescript
npm i --save-dev prisma typescript ts-node @types/node nodemon

//initialize the tsconfig file for typescript
npx tsc --init

//create schema
npx prisma init

//Database Connection
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql

//Generate migrate and run the migration against the database
npx prisma migrate dev --name <file_name>

//https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgresql
npm install @prisma/client

//Update the DB with the updated schema
prisma migrate dev or prisma db push