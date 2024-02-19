<h1 align="center">Expert Polls</h1>

# About the project

Expert Polls is a Backend application for creating surveys, with the differentiating factor of utilizing web sockets for real-time communication.

# Extra technologies used

## Libs

- Fastify;
- Prisma;
- Zod.

# How to run the project

## Frontend web

Prerequisites: npm / yarn

```bash
# clone repository
git clone https://github.com/guibafica/nlw_polls

# enter the frontend web project folder
cd nlw_polls

# install dependencies
npm install

# run docker
docker compose up -d

# run migrations
npx prisma migrate dev

# run the project
npm run dev
```

# Author

Made with 💜 by Guilherme Bafica 👋

[![LinkedIn Badge](https://img.shields.io/badge/-GuilhermeBafica-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guilhermebafica/)](https://www.linkedin.com/in/guilhermebafica/)
