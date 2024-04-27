import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
 

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
  .filter(message => message.role === 'user' || message.role === 'assistant')
  .map(message => ({
    role: message.role === 'user' ? 'user' : 'model',
    parts: [{ text: message.content }],
  })),
});

// Get the API key from the query parameter
//  const {searchParams} = new URL(req.url);
//  const apiKey = searchParams.get('key');

//  // Validate the API key
//  if (!apiKey) {
  //    return res.status(401).json({ message: 'Invalid API key' });
  //  }
  export async function POST(req: Request,res:Response) {
    try {
      const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
      // const apiKey = process.env.GOOGLE_API_KEY;
      const { messages } = await req.json();
      
      console.log("Received messages:", messages);
      //  const genAI = new GoogleGenerativeAI(apiKey);

    const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-1.5-pro-latest' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

    console.log("Generated Gemini stream:", geminiStream);

    // Convert the response into a friendly text-stream
    const stream = GoogleGenerativeAIStream(geminiStream);

    console.log("Converted stream:", stream);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Internal server error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
