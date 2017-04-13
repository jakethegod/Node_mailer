const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: 'e.bagrov2017',
        pass: '1234567899'
    }
});

import{mailOptions} from 'server'

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log('Ошибка отправки: ' + error);
    }
    else {
        console.log('Письмо успешно отправлено: ' + info.response);
    }
});