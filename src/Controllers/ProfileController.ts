import { Response, Request } from 'express';
import Incidents from '../Model/Incidents';
class ProfileController {
  public async index(req: Request, res: Response): Promise<any> {
    const ong_id = req.headers.authorization;

    const incidents = await Incidents.GetAll(ong_id);

    return res.json(incidents);
  }
}



export default new ProfileController();