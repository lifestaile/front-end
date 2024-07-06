import { createClient } from "@supabase/supabase-js";

import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";

const client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  const embeddings = new OpenAIEmbeddings();
  const store = new SupabaseVectorStore(embeddings, {
    client,
    tableName: "documents",
  });

  const result = await store.similaritySearch(query, 6);
  const documents = result.map(({ metadata }) => metadata);

  return Response.json({
    status: true,
    message: "enties fetched successfully",
    data: documents,
  });
}
