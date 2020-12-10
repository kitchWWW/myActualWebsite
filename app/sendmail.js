var nodemailer = require('nodemailer');


fs = require('fs');
fs.readFile('password.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  password = data.replace(/\r?\n|\r/g, " ");
	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'brianellissound@gmail.com',
	    pass: password
	  }
	});

	var mailOptions = {
	  from: 'brianellissound@gmail.com',
	  to: 'brian.e2014@gmail.com',
	  subject: 'Sending Email using Node.js',
	  text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
});

