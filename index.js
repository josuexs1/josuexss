const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/generar', async (req, res) => {
    const { dispositivo } = req.body;
    const KEY = process.env.GEMINI_KEY; // Leeremos esto desde el panel de Render
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEY}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `Dime la sensibilidad para ${dispositivo} en Free Fire` }] }] })
    });
    
    const data = await response.json();
    res.json(data);
});

app.listen(process.env.PORT || 3000);