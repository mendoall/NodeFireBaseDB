import express from 'express';
import { listacitas, agregar, modificar, eliminar } from '../controllers/citas.mjs'

const router = express.Router();

router.get('/', async (req, res) => {
    await listacitas(req, res);
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