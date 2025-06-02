// index.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/tokens', async (req, res) => {
  try {
    const response = await fetch('https://pump.fun/api/projects?sort=launch_date');
    const data = await response.json();
    const tokens = data.slice(0, 20); // Pega os 20 tokens mais recentes
    res.json(tokens);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tokens' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend rodando na porta ${port}`);
});
