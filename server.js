const express = require('express');
const nodemailer =require('nodemailer')
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
	//res.setHeader('Content-type','text/html')
	//res.send('<p>Hello</p>')
	res.sendFile(__dirname + '/public/contactform.html' )


})

//post route for form
app.post('/', (req, res) => {
	console.log(req.body)

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env._USER_NAME //PLEASE USE ENVS
			pass: process.env._PASSWORD
		}
	})

	const mailOptions = {
		from: req.body.email,
		to: 'c.dafinone@gmail.com',
		subject: `Message from ${req.body.email}: ${req.body.subject}`,
		text: req.body.message
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if(error){
			console.log(error)
			res.send('error')
		}else{
			console.log('Email Sent')
			res.send('sucess')
		}
	});

})


app.listen(PORT, ()=>{
	console.log(`Server running on port ${PORT}`)

})

