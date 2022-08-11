const sgMail = require('@sendgrid/mail')

//Sending Emails using Send Grids
const sendGridEmail = async (req, res) => {
   try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: process.env.RECEIVER_EMAIL, 
        from: process.env.SENDER_EMAIL,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        res.status(200).json(msg)
    })
    .catch((error) => {
        res.status(404).json({ error: `${error} associated with Send Grid email`})
    })

    

   } catch (error) {
       res.status(404).json({ error: `${error} associated with Send Grid email`})
   }
}

module.exports = sendGridEmail