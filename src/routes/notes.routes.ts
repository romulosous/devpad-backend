import { Router } from "express";

import { NotesRepository } from "../repositories/NotesRepository";

const notesRoutes = Router();

const notesRepository = new NotesRepository();

notesRoutes.post("/", (request, response) => {
  const { title, content } = request.body;

  notesRepository.create({ title, content });

  return response.status(201).send();
});

export { notesRoutes };
