import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

  const query = `SELECT * FROM heroes`;

  MySQL.execQuery(query, (err: any, heroes: Object[]) => {
    if(err) {
      res.status(400).json({
        status: false,
        error: err
      });
    } else {
      res.json({
        status: true,
        heroes: heroes
      });
    }
  });

});


router.get('/heroes/:id', (req: Request, res: Response) => {

  const id = MySQL.instance.conn.escape(req.params.id);
  const query = `SELECT * FROM heroes WHERE id=${id}`;

  MySQL.execQuery(query, (err: any, heroe: Object[]) => {
    if(err) {
      res.status(400).json({
        status: false,
        error: err
      });
    } else {
      res.json({
        status: true,
        heroe: heroe
      });
    }
  });
});


export default router;