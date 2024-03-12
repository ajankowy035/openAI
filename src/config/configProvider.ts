require('dotenv').config();

interface IConfig {
  port: number;
  openAiKey: string;
}

export const ConfigProvider: IConfig = (() => {
  const port = Number(process.env.PORT);
  const openAiKey = process.env.OPEN_AI_KEY;
  if (!openAiKey) {
    throw new Error('Api Key for Open AI is required!');
  }

  return { port: Number.isNaN(port) ? 3000 : port, openAiKey };
})();
