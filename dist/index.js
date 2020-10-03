"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const routes_1 = __importDefault(require("./router/routes"));
const server = server_1.default.init(Number(process.env.PORT));
server.app.use(routes_1.default);
server.start(() => {
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});
