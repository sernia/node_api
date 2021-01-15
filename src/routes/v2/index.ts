import express from 'express';
import { get_data } from "../../lib/sqlconnect";

const router = express.Router();
// GETリクエスト
router.get('/test', (req: express.Request, res: express.Response) => {
  try {
    get_data("SELECT * FROM notice", function(text:string){
      res.status(200).json(text);
    });
   } catch (error) {
     res.status(400).json({ message: error.message });
  }
});

//conn.close();

// POSTリクエスト
router.post('/', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({ message: "登録しました" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//conn.close();

export default router;