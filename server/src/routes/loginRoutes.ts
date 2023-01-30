import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { request } from 'http';

// essentially lets us override the body property to allow for type checking
interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined }
}

// create a require auth middleware
function requireAuth(req: Request, res:Response, next: NextFunction): void{
	if(req.session && req.session.loggedIn)	{
		next();
		return;
	}

	res.status(403) //forbidden
	res.send('Not permitted');
}

const router = Router();

//option use of types here is not necessary
router.get('/login', (req: Request, res: Response) => {
	res.send(`
		<form method="POST">
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});


router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email && password && email === "hi@hi.com" && password === "pass") {
		// Mark the person as logged in
		req.session = { loggedIn: true };
		// Redirect them to the root route
		res.redirect('/');
	} else {
		res.send('Invalid email or password');
	}

	// if(email){
	// 	res.send(email.toUpperCase());
	// } else {
	// 	res.send('You must provide an email');
	// }
});

router.get('/', (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn){
		res.send(`
			<div>
				<div>You are logged in</div>
				<a href="/logout">Logout</a>
			</div>
		`)
	} else {
		res.send(`
			<div>
				<div>You are not logged in</div>
				<a href="/login">Login</a>
			</div>
		`)
	}
})

router.get('/logout', (req: Request, res: Response) => {
	// reset the property to undefined to logout
	req.session = undefined;
	res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route, logged in user');
} )


//exporting using curly brackets becuase the router was already created
export { router };
