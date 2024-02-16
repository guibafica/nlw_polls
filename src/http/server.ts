import fastify from "fastify";

import { createPoll } from "./routes/create-polls";

const app = fastify();

app.get("/", () => {
  return "Hello world!";
});

app.register(createPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("🚀HTTP server listening on port 3333!🚀");
});
