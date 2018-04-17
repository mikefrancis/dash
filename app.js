require('dotenv').config();

const DashButton = require('dash-button');

const button = new DashButton(process.env.DASH_BUTTON_MAC_ADDRESS);

console.log('----------');
console.log('STARTED');
console.log('----------');

button.addListener(() => {
	console.log('PRESSED MEEEEE');
});
