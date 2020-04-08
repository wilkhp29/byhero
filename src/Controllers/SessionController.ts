import { Response, Request } from 'express';
import Ong from '../Model/Ong';
class SessionController {
  public async create(req: Request, res: Response): Promise<any> {
    const { id } = req.body;

    const ong = await Ong.GetById(id);

    return ong ? res.json(ong) : res.status(400).json({ erro: 'Não foi encontrado ong com este ID' });
  }
}



export default new SessionController();