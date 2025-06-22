import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(201).json({
    message: "User created successfully",
    id: user.id,
  });
});

app.listen(3001);
