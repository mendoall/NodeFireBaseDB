import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseTools/firebaseInit.mjs'

const db = getFirestore(firebaseApp);

export const listacitas = async (req, res) => {
    try {
        const citasCol = collection(db, 'citas');
        const citasSnapshot = await getDocs(citasCol);
        const citasList = citasSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                data: doc.data()
            }
        });
        res.json(citasList);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const agregar = async (req, res) => {
    try {
        const citasCol = collection(db, 'citas');
        await addDoc(citasCol, req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const modificar = async (req, res) => {
    try {
        const docRef = doc(db, 'citas', req.body.id);
        await updateDoc(docRef, req.body.data);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = doc(db, 'citas', id);
        await deleteDoc(docRef);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export default {
    listacitas,
    agregar,
    modificar,
    eliminar
};