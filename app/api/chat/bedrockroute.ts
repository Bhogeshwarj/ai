import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
});

export async function POST(req) {
  try {
    // Extract the `messages` from the body of the request
    const message = await req.json();
    // const messagesString = JSON.stringify(requestBody.messages);

    // Prepare payload for the model
    const payload = {
      inputText: message,
      textGenerationConfig: {
        maxTokenCount: 100,
        stopSequences: [],
        temperature: 0,
        topP: 1,
      },
    };

    // Invoke the model
    const command = new InvokeModelCommand({
      contentType: 'application/json',
      body: JSON.stringify(payload),
      modelId: 'amazon.titan-text-lite-v1',
    });
    const apiResponse = await bedrockClient.send(command);
    const decodedResponseBody = new TextDecoder().decode(apiResponse.body);
    const responseBody = JSON.parse(decodedResponseBody);

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    console.error('An error occurred:', error);
    // Return an error response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while processing the request' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
