# Mental Health Support Chatbot

This is a simple mental health support chatbot built with Node.js and Dialogflow. The chatbot is designed to provide basic support and information for mental health queries.

## Features
- Handles various mental health-related queries.
- Integrates with Dialogflow for natural language understanding.
- Provides a basic web interface for interaction.

## Technologies Used
- Node.js
- Express.js
- Dialogflow
- HTML, CSS, JavaScript

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Dialogflow account and agent created

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/mental-health-chatbot.git
    cd mental-health-chatbot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Add your Dialogflow credentials:
    - Save your Dialogflow service account key as `credentials.json` in the `config/` directory.

4. Update `dialogflow.js` with your Dialogflow project ID.

5. Start the server:
    ```sh
    node server.js
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage
- Interact with the chatbot through the web interface to get responses for mental health-related queries.

## License
This project is licensed under the MIT License.
