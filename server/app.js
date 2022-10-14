import express from "express"
//import handlers
import {
    deleteUserCallback,
    getUserCallback,
    postUserCallback,
    getAllUsersCallback
} from "./index.js"

const app = express()
const PORT = 4400;
app.use(express.json())

/// Actions
app.get('/anime-plataform/users', (_req, res) => getAllUsersCallback(_req, res))
app.get('/anime-plataform/users/:id', (_req, res) => getUserCallback(_req, res))
app.post('/anime-plataform/users', (_req, res) => postUserCallback(_req, res))
app.delete('/anime-plataform/users/:id', (_req, res) => deleteUserCallback(_req, res))
app.listen(PORT, () => {
    console.log(`Server listen on PORT=${PORT}`);
});
