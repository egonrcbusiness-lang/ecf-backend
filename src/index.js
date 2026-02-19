const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// ─── Rota de Health Check ───
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// ─── Rota de Validação (placeholder) ───
app.post('/api/validate', (req, res) => {
  res.json({
    sections: [],
    issues: []
  });
});

// ─── Rota de Geração (placeholder) ───
app.post('/api/generate', (req, res) => {
  res.json({
    id: 'placeholder',
    status: 'pending',
    message: 'Rota de geração ainda não implementada'
  });
});

// ─── Listar execuções (placeholder) ───
app.get('/api/runs', (req, res) => {
  res.json([]);
});

// ─── Detalhes de uma execução (placeholder) ───
app.get('/api/runs/:id', (req, res) => {
  res.json({
    id: req.params.id,
    status: 'not_found',
    message: 'Execução não encontrada'
  });
});

// ─── Iniciar servidor ───
app.listen(PORT, '0.0.0.0', () => {
  console.log(`ECF Backend rodando na porta ${PORT}`);
});
