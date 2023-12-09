"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
router.get("/", post_controller_1.PostsController.getPostFromDB);
router.get("/:id", post_controller_1.PostsController.getPostById);
router.post("/create-post", post_controller_1.PostsController.insertPostIntoDB);
exports.PostsRoutes = router;
