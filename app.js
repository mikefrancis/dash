import http from 'https';
import DashButton from 'dash-button';

const SLACK_HOSTNAME = 'https://hooks.slack.com';

const button = new DashButton(process.env.DASH_BUTTON_MAC_ADDRESS);

button.addListener(() => {
	const request = http.request({
	    hostname: SLACK_HOSTNAME,
	    path: process.env.SLACK_HOOK_URL,
	    method: 'POST',
		headers: { 'Content-Type': 'application/json' }
    });

    request.write({
        channel: process.env.SLACK_CHANNEL,
        username: process.env.SLACK_USERNAME || 'Dash Button',
        text: process.env.SLACK_TEXT,
        icon_emoji: process.env.SLACK_EMOJI || ':radio_button:'
    });

    request.end();
});
