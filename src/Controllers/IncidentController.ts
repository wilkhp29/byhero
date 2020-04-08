import { Response, Request } from 'express';
import Incidents from '../Model/Incidents';
class incidentController {
  public async index(req: Request, res: Response): Promise<any> {
    const { page = 1 } = req.query;

    const count = await Incidents.count();

    const incident = await Incidents.Pagenation(page);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incident);
  }

  public async create(req: Request, res: Response): Promise<any> {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const data: Incidents = { title, description, value, ong_id }
    const [id] = await Incidents.Save(data);

    return res.json({
      id
    })

  }

  async delete(req: Request, res: Response): Promise<any> {
    const id = parseInt(req.params.id);
    const ong_id = req.headers.authorization;

    const incident = await Incidents.GetById(id);
    if (!incident) {
      return res.status(401).json({ error: 'não encontrado' });
    }
    if (incident.ong_id !== ong_id)
      return res.status(401).json({ error: 'Operation not permitted' })

    await Incidents.Delete(id);

    return res.status(204).send();
  }

}



export default new incidentController();