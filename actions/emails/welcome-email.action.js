const sgMail = require('@sendgrid/mail')
const sendGridAPIKey = process.env.GRID_API_TOKEN
sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, nama) => {
    sgMail.send({
        to: email,
        from: 'hendriyono97@gmail.com',
        subject: 'terimakasih telah mendaftar diaplikasi kami!',
        text: `Selamat datang di aplikasi ini, ${nama}. Biarkan kami tau seberapa senang kamu dengan aplikasi ini. Tolong balas email kami!`
    })
}

module.exports = {
    sendWelcomeEmail
}