import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simple check route
app.get("/", (req, res) => {
  res.send("🟢 Vapi Bridge is running!");
});

// POST endpoint that returns assistant + key (for testing)
app.post("/start-vapi", (req, res) => {
  const { assistantId, apiKey } = req.body;

  if (!assistantId || !apiKey) {
    return res.status(400).json({ error: "Missing assistantId or apiKey" });
  }

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
