import { Response, Request } from 'express';
import crypto from 'crypto';
import Ong from '../Model/Ong';
class OngController {
  public async index(req: Request, res: Response): Promise<any> {
    const ongs = await Ong.GetAll()

    return res.json(ongs);
  }

  public async create(req: Request, res: Response): Promise<any> {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');
    const data: Ong = {
      id, name, email, whatsapp, city, uf
    };

    await Ong.Save(data);

    return res.json({
      id
    });
  }

}



export default new OngController();