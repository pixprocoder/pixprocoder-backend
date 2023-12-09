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
exports.PostsService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertPostIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.post.create({
        data: payload,
    });
    return result;
});
const getPostFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.post.findMany({});
    return result;
});
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.post.findUnique({
        where: {
            id,
        },
    });
    return result;
});
exports.PostsService = {
    insertPostIntoDB,
    getPostFromDB,
    getPostById,
};
