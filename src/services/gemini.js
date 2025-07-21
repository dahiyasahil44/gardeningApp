import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const getPlantInfo = async (plantQuery) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Tell me about the plant "${plantQuery}". Include:
    - Scientific name (if known)
    - Care instructions (sunlight, watering, soil)
    - Growth rate and ideal conditions
    - Any interesting facts`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error('Gemini API Error:', err.message);
    return 'Failed to fetch plant info.';
  }
};
