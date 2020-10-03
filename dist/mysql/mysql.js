"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.connected = false;
        console.log('clase inicializada');
        this.conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static execQuery(query, callback) {
        this.instance.conn.query(query, (err, res, fields) => {
            if (err) {
                console.log('error en query ' + err);
                return callback(err);
            }
            if (res.length === 0) {
                callback('sin resultados');
            }
            else {
                callback(null, res);
            }
        });
    }
    connectDB() {
        this.conn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('Base de datos inicializada');
        });
    }
}
exports.default = MySQL;
