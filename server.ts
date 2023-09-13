// const server = Bun.serve({
//   port: 7000,
//   fetch(req) {
//     return new Response("Bun!");
//   },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);


/* using third party packages */ 
import figlet from "figlet";

const server = Bun.serve({
  fetch() {
    const body = figlet.textSync("Bun is fasttttttttt !");
    return new Response(body);
  },
  port: 7000,
});