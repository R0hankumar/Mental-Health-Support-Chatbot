const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient();
const projectId = 'your-dialogflow-project-id';
const sessionId = 'quickstart-session-id';
const languageCode = 'en';

async function sendMessage(message) {
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: languageCode,
            },
        },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return {
        text: result.fulfillmentText,
    };
}

module.exports = {
    sendMessage,
};
