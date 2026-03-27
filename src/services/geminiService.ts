import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are a helpful FAQ assistant. Your goal is to answer user questions accurately and concisely.
If you don't know the answer, politely say so and suggest they contact support.
Keep your responses friendly and professional.
Use markdown for formatting when appropriate (e.g., lists, bold text).
`;

export async function getChatResponse(message: string, history: { role: string; parts: { text: string }[] }[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
}
