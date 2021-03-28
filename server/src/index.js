import { fastify } from "fastify";
import fastifyStatic from "fastify-static";

// node packages
import path from "path";
import { fileURLToPath } from "url";

// ESM specific
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify();

async function startServer() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });

    app.get("/", {}, (request, reply) => {
      reply.send({
        data: "Hello from the server ⚓",
      });
    });

    await app.listen(3001);
    console.log("🚀 Server listening at port: 3001");
  } catch (error) {
    console.error(error);
  }
}

startServer();
