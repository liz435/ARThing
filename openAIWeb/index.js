import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);