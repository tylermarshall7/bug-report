import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class NotesService {

  async getNotesByBugId(id, userEmail) {
    let data = await dbContext.Notes.find({ bugId: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }

  async getById(id) {
    let value = await dbContext.Notes.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(rawData) {
    let data = await dbContext.Notes.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Notes.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Notes.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
  }

}


export const notesService = new NotesService()