const nodemailer = require('nodemailer')

 //Using Ethereal.email and Nodemailer
const sendEmail = async (req, res) => {
   
    try {
    let testAccount = await nodemailer.createTestAccount()

    let generatedUser = testAccount.user
    let generatedPass = testAccount.pass
   

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: generatedUser,
            pass: generatedPass
        }
    });


    let info = await transporter.sendMail({
        from: '"D-Coder" <dcoder@gmail.com>',
        to: 'bar@example.com',
        subject: 'Hello, I am the best developer in the world',
        html:'<h2>Sending Emails with Node.js</h2>'
    })

    res.status(200).json(info)
    } catch (error) {
        res.status(404).json({ error: `${error} associated with Ethereal`})
    }
}




module.exports = sendEmail