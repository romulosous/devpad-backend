import { Note } from "../model/Note";

interface ICreateNoteDTO {
  title: string;
  content: string;
}

class NotesRepository {
  private notes: Note[];

  constructor() {
    this.notes = [];
  }

  create({ title, content }: ICreateNoteDTO): void {
    const note = new Note();

    Object.assign(note, {
      title,
      content,
      created_at: new Date(),
    });

    this.notes.push(note);
  }

  list(): Note[] {
    return this.notes;
  }

  findByTitle(title: string): Note {
    const note = this.notes.find((note) => note.title === title);
    return note;
  }
}

export { NotesRepository };
