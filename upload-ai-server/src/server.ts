import { fastify } from "fastify";
import { getAllPromptSRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAiCompletionRoutes } from "./routes/generate-ai-completion";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPromptSRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log("server running");
});
