var http = require('https');
var DashButton = require('dash-button');

var button = new DashButton(process.env.DASH_BUTTON_MAC_ADDRESS);

var subscription = button.addListener(function () {
	var request = http.request({
        hostname: 'https://hooks.slack.com',
        path: process.env.SLACK_HOOK_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    request.write({
        channel: process.env.SLACK_CHANNEL,
        username: process.env.SLACK_USERNAME,
        text: process.env.SLACK_TEXT,
        icon_emoji: process.env.SLACK_EMOJI
    });

    request.end();
});
