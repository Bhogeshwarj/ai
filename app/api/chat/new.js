export const invokeModel = async (
    prompt,
    modelId = "amazon.titan-text-express-v1",
  ) => {
    // Create a new Bedrock Runtime client instance.
    const client = new BedrockRuntimeClient({ region: "us-east-1" });
  
    // Prepare the payload for the model.
    const payload = {
      inputText: prompt,
      textGenerationConfig: {
        maxTokenCount: 4096,
        stopSequences: [],
        temperature: 0,
        topP: 1,
      },
    };
  
    // Invoke the model with the payload and wait for the response.
    const command = new InvokeModelCommand({
      contentType: "application/json",
      body: JSON.stringify(payload),
      modelId,
    });
    const apiResponse = await client.send(command);
  
    // Decode and return the response.
    const decodedResponseBody = new TextDecoder().decode(apiResponse.body);
    /** @type {ResponseBody} */
    const responseBody = JSON.parse(decodedResponseBody);
    return responseBody.results[0].outputText;
  };