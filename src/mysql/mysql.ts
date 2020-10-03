import mysql = require('mysql');

export default class MySQL {


  private static _instance: MySQL;

  conn: mysql.Connection;
  connected: boolean = false;


  constructor() {
    console.log('clase inicializada');
    this.conn = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    this.connectDB();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  static execQuery( query: string, callback: Function) {
    this.instance.conn.query(query, (err, res: Object[], fields: any) => {

      if(err) {
        console.log('error en query '+ err);
        return callback(err);
      }

      if(res.length === 0) {
        callback('sin resultados');
      } else {
        callback(null, res);
      }

    });
  }

  private connectDB() {
    this.conn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }

      this.connected = true;
      console.log('Base de datos inicializada');
    });
  }



}