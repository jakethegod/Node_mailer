var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: 'e.bagrov2017',
        pass: '1234567899'
    }
});

var mailOptions = {
    from: 'e.bagrov2017@yandex.ru',
    to: 'egorbagrow@gmail.com',
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log('Ошибка отправки: ' + error);
    }
    else {
        console.log('Письмо успешно отправлено: ' + info.response);
    }
});