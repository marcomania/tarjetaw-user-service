const twilio = require('twilio');
const { v4: uuidv4 } = require('uuid');
const client = new twilio(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

const createSms = (numero) => {
    try {
        console.log('Entro a twilio');
        const id = uuidv4().substring(0, 5);
        return client.messages.create({
            body: `El codigo generado par su acceso es:${id}`,
            to: `+51${numero}`,
            from: '+14793156369',
        });
    } catch (e) {
        console.log(e);
    }
};
module.exports = {
    createSms,
};