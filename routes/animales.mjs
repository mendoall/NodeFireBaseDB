import express from 'express';
import { listaAnimales, agregar, modificar, eliminar } from '../controllers/animales.mjs'

const router = express.Router();

router.get('/', async (req, res) => {
    await listaAnimales(req, res);
});

router.post('/agregar', async (req, res) => {
    await agregar(req, res);
});

router.put('/modificar', async (req, res) => {
    await modificar(req, res);
});

router.delete('/eliminar/:id', async (req, res) => {
    await eliminar(req, res);
});

export default router;