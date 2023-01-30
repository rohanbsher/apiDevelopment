"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// create a require auth middleware
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403); //forbidden
    res.send('Not permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
//option use of types here is not necessary
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "pass") {
        // Mark the person as logged in
        req.session = { loggedIn: true };
        // Redirect them to the root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
    // if(email){
    // 	res.send(email.toUpperCase());
    // } else {
    // 	res.send('You must provide an email');
    // }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
			<div>
				<div>You are logged in</div>
				<a href="/logout">Logout</a>
			</div>
		`);
    }
    else {
        res.send(`
			<div>
				<div>You are not logged in</div>
				<a href="/login">Login</a>
			</div>
		`);
    }
});
router.get('/logout', (req, res) => {
    // reset the property to undefined to logout
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in user');
});
