import express from "express";
import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { bugsService } from "../services/BugsService";
import { notesService } from "../services/NotesService";

export class BugsController extends BaseController {
    constructor() {
        super("api/bugs");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getBug)
            // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
            .use(auth0Provider.getAuthorizedUserInfo)
            .post("", this.create)
            .put("/:id", this.edit)
            .get("/:id/notes", this.getNotesByBugId)
            .delete("/:id", this.delete);;
    }

    async getAll(req, res, next) {
        try {
            let data = await bugsService.getAll();
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async getBug(req, res, next) {
        try {
            let data = await bugsService.getBug(req.params.id);
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async getNotesByBugId(req, res, next) {
        try {
            let data = await notesService.getNotesByBugId(req.params.id, req.userInfo.email)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let data = await bugsService.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email
            let data = await bugsService.edit(req.params.id, req.userInfo.email, req.body)
            return res.send(data)
        } catch (error) { next(error) }
    }

    async delete(req, res, next) {
        try {
            req.body.creatorEmail = req.userInfo.email
            await bugsService.delete(req.params.id, req.userInfo.email)
            return res.send("Successfully deleted")
        } catch (error) {
            next(error)
        }
    }
}