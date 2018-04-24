require('dotenv').config();

const axios = require('axios');
const DashButton = require('dash-button');

const button = new DashButton(process.env.DASH_BUTTON_MAC_ADDRESS);

console.log('----------');
console.log('STARTED');
console.log('----------');

button.addListener(async () => {
	try {
        const response = await axios.post(process.env.NEXMO_API_URL, {
            api_key: process.env.NEXMO_API_KEY,
            api_secret: process.env.NEXMO_API_SECRET,
            from: 'The RockPool',
            text: "There's someone at the door",
            to: process.env.PHONE_NUMBER,
        });

        console.log('MESSAGE SENT');
        console.info(response.data);
	} catch (error) {
		console.error(error);
	}
});
