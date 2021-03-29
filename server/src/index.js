// fastify
import { fastify } from "fastify";
import fastifyStatic from "fastify-static";
import fastifyCookie from "fastify-cookie";
import fastifyCORS from "fastify-cors";

// ESM Features
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify();

async function startApp() {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });

    app.register(fastifyCORS, {
      origin: (origin, cb) => {
        if (/localhost/.test(origin)) {
          //  Request from localhost will pass
          cb(null, true);
          return;
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"));
      },
    });

    app.get("/ping", {}, (request, reply) => {
      console.log("request:", request);
      reply.send({
        data: "Hello from the backend! ⚓",
      });
    });

    await app.listen(3001);
    console.log("🚀 Server listening from port 3001");
  } catch (error) {
    console.log(error);
  }
}

startApp();
