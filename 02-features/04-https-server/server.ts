import {
  serve,
  Server,
  ServerRequest,
} from "https://deno.land/std@0.59.0/http/server.ts";

const s: Server = serve({ port: 8000 });
console.log("TCL:: Started at http://localhost:8000");

for await (const req: ServerRequest of s) {
  if (req.url === "/") {
    req.respond({ body: "Hello world" });
  } else if (req.url === "/about") {
    req.respond({ body: "about me" });
  }
}
