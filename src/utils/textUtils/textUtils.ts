import axios from "axios";

const GOOGLE_TRANSLATE_API_KEY = "YOUR_GOOGLE_TRANSLATE_API_KEY";

export const translateText = async (text: string, targetLang: string): Promise<string> => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_TRANSLATE_API_KEY}`,
      {
        q: text,
        target: targetLang,
        format: "text"
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation API error:", error);
    return text;
  }
};

export const summarizeText = (text: string): string => {
  const sentences = text.split(". ");
  return sentences.slice(0, 2).join(". ") + ".";
};
