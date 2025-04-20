import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Replace these with your actual key and assistant
const apiKey = "53f8e90a-b412-43f3-b70a-7b13ad16f600";
const assistantId = "fb6627cf-9b63-482c-825a-7deffb29e18a";

app.get("/", (req, res) => {
  res.send("🟢 Vapi Bridge is running!");
});

app.get("/start-vapi", (req, res) => {
  return res.json({
    message: "Bridge working",
    assistant: assistantId,
    apiKey: apiKey,
    status: "🧠 Ready to use",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Vapi Bridge running at http://localhost:${PORT}`);
});
