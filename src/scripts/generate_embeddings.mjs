import { MongoClient } from "mongodb";
import { OpenAIEmbeddings } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const client = new MongoClient(process.env.MONGODB_ATLAS_URI || "");
const dbName = "portfolio";
const collectionName = "content";

async function generateEmbeddings() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = await collection.find({ embedding: { $exists: false } }).toArray();
    console.log(`Found ${documents.length} documents without embeddings`);

    const embeddings = new OpenAIEmbeddings();

    for (const doc of documents) {
      console.log(`Generating embedding for document: ${doc._id}`);
      const embedding = await embeddings.embedQuery(doc.text);

      await collection.updateOne(
        { _id: doc._id },
        { $set: { embedding: embedding } }
      );
      console.log(`Updated document: ${doc._id} with embedding`);
    }

    console.log("Finished generating embeddings");
  } catch (error) {
    console.error("Error generating embeddings:", error);
  } 
}

generateEmbeddings();