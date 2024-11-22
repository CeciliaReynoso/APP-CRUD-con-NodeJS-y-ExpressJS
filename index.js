const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.listen(5000, () => console.log("¡Servidor encendido!"));
app.use(cors());
app.use(express.json());

// Devuelve un JSON con las canciones registradas en el repertorio
app.get("/canciones", (req, res) => {
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    res.json(canciones);
});

// Recibe los datos correspondientes a una canción y la agrega al repertorio
app.post("/canciones", (req, res) => {
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    canciones.push(cancion);
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.send("¡Canción agregada con éxito!");
});

// Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local
app.put("/canciones/:id", (req, res) => {
    const { id } = req.params;
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    const index = canciones.findIndex(c => c.id == id);
    canciones[index] = cancion;
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.send("¡Canción modificada con éxito!");
});

// Recibe por queryString el id de una canción y la elimina del repertorio
app.delete("/canciones/:id", (req, res) => {
    const { id } = req.params;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    const index = canciones.findIndex(c => c.id == id);
    canciones.splice(index, 1);
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.send("¡Canción eliminada con éxito!");
});
// Devuelve una página web como respuesta a una consulta GET
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
