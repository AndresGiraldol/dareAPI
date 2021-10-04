import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import LoginRoutes from './api/login/login.routes';
import PoliciesRoutes from './api/policies/policies.routes';
import ClientsRoutes from './api/clients/clients.routes';

class App {
  private app: express.Application;

  private loginRoutes: LoginRoutes;

  private policiesRoutes: PoliciesRoutes;

  private clientsRoutes: ClientsRoutes;

  constructor() {
    this.app = express();
    this.loginRoutes = new LoginRoutes();
    this.policiesRoutes = new PoliciesRoutes();
    this.clientsRoutes = new ClientsRoutes();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set('port', process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.get('/', (req, res) => {
      res.send(`THE API is at http://localhost:${this.app.get('port')}`);
    });

    this.app.use('/login', this.loginRoutes.getRoutes());

    this.app.use('/policies', this.policiesRoutes.getRoutes());

    this.app.use('/clients', this.clientsRoutes.getRoutes());
  }

  public listen(): void {
    this.app.listen(this.app.get('port'));
    // eslint-disable-next-line no-console
    console.log('Server on port', this.app.get('port'));
  }
}

export default App;
