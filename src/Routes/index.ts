import { Router } from 'express';
import sessionController from '../Controllers/SessionController';
import ongController from '../Controllers/OngController';
import profileController from '../Controllers/ProfileController';
import incidentController from '../Controllers/IncidentController';

const routes = Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incident', incidentController.index);
routes.post('/incident', incidentController.create);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.get('/', (req, res) => {
  return res.json({ send: 'ok' });
})

export default routes;