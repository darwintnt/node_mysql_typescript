"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.execQuery(query, (err, heroes) => {
        if (err) {
            res.status(400).json({
                status: false,
                error: err
            });
        }
        else {
            res.json({
                status: true,
                heroes: heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = mysql_1.default.instance.conn.escape(req.params.id);
    const query = `SELECT * FROM heroes WHERE id=${id}`;
    mysql_1.default.execQuery(query, (err, heroe) => {
        if (err) {
            res.status(400).json({
                status: false,
                error: err
            });
        }
        else {
            res.json({
                status: true,
                heroe: heroe
            });
        }
    });
});
exports.default = router;
