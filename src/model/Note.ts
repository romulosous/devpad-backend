import { v4 as uuid4 } from "uuid";

class Note {
  id?: string;
  title: string;
  content: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid4();
    }
  }
}

export { Note };
