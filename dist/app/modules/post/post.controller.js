"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const post_service_1 = require("./post.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const insertPostIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_service_1.PostsService.insertPostIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Post created successfully",
        data: result,
    });
});
const getPostFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_service_1.PostsService.getPostFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Post fetched successfully",
        data: result,
    });
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield post_service_1.PostsService.getPostById(Number(id));
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Single post fetched successfully",
        data: result,
    });
});
exports.PostsController = {
    insertPostIntoDB,
    getPostFromDB,
    getPostById,
};
