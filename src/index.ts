import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.set('port', '3000');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = Router();

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('server on port', app.get('port'));
});

const hello = router.get('/', (req, res) => {
  res.send('<h1>Hello, Welcome to The API</h1>');
});

app.use(hello);

export default app;