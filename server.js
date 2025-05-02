const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(cors());

const users = []; // Lista de usuarios en memoria

// 📌 Endpoint GET: Obtener usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

// 📌 Endpoint POST: Agregar un usuario
app.post('/api/users', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newUser = { id: users.length + 1, name, email, age };
    users.push(newUser);

    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server is live at localhost:${PORT}`);
});
