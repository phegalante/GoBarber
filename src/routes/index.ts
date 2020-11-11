import { Router } from 'express';
import usersRouter from './users.routes';
import appointmentsRouter from './appointments.routes';
import sessionsRouter from './sessions.routes';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/appointments', ensureAuthenticated, appointmentsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
