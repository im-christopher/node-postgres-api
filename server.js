const express = require('express');
const cors = require('cors'); // Para permitir conexiones desde tu página web
const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(cors());

const users = []; // Lista de usuarios en memoria

// 📌 Endpoint GET: Obtener todos los usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

// 📌 Endpoint POST: Agregar un usuario
app.post('/api/users', (req, res) => {
    const { name, email, age } = req.body;

    // Validar que los datos no estén vacíos
    if (!name || !email || !age) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Generar ID automáticamente
    const newUser = { id: users.length + 1, name, email, age };
    users.push(newUser);

    res.status(201).json(newUser);
});

// Definir el endpoint /api
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is live at localhost:${PORT}`);
});

