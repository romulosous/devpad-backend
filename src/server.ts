import express from "express";

import { notesRoutes } from "./routes/notes.routes";

const app = express();

app.use(express.json());
app.use("/notes", notesRoutes);

app.listen(3333, () => console.log("Server is Running!"));
