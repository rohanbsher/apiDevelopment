import express, { Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
// This will parse a form
app.use(bodyParser.urlencoded({ extended: true }));
// adds session and options object that will have key property with 
// value of array of strings 
app.use(cookieSession({ keys: ['session']}));
app.use(router);

app.listen(3000, () => {
	console.log('Listening on port');
});

