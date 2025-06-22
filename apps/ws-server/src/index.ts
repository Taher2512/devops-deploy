import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (socket) => {
  const res = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  socket.send("You are connected to the WebSocket server!");
});
