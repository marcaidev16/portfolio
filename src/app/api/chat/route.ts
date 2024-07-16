import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MongoClient } from "mongodb";
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { Message } from "ai";

const client = new MongoClient(process.env.MONGODB_ATLAS_URI || "");
const namespace = "portfolio.content";
const [dbName, collectionName] = namespace.split(".");
const collection = client.db(dbName).collection(collectionName);

const vectorStore = new MongoDBAtlasVectorSearch(new OpenAIEmbeddings(), {
  collection,
  indexName: "vector_index",
  textKey: "text",
  embeddingKey: "embedding",
});

export async function POST(req: Request) {
  try {
    console.log("Received request");
    await client.connect();
    console.log("Connected to MongoDB");

    const body = await req.json();
    console.log("Parsed body:", body);
    const messages: Message[] = body.messages;

    const lastMessage = messages[messages.length - 1];

    console.log("Performing similarity search");
    const relevantDocs = await vectorStore.similaritySearch(lastMessage.content, 2);
    console.log("Similarity search results:", relevantDocs);

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
    });

    const prompt = PromptTemplate.fromTemplate(`
      Eres el representante de Marc, el dueño de esta página web. Responde a las preguntas de los usuarios según el siguiente contexto:

      Contexto: {context}

      Pregunta del usuario: {question}
      Respuesta de Marc: `);

    const chain = RunnableSequence.from([
      {
        context: (input) => input.context,
        question: (input) => input.question,
      },
      prompt,
      chatModel,
    ]);

    console.log("Generating response");
    const response = await chain.invoke({
      question: lastMessage.content,
      context: relevantDocs.map(doc => doc.pageContent).join("\n"),
    });

    console.log("Response generated successfully");
    
    return Response.json({ response: response.content });
  } catch (err: unknown) {
    console.error("Error details:", err);
    
    let errorMessage = "Internal server error";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "string") {
      errorMessage = err;
    }
    
    return Response.json({ error: errorMessage }, { status: 500 });
  } finally {
    await client.close();
  }
}