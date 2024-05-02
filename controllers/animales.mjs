import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import firebaseApp from '../firebaseTools/firebaseInit.mjs'

const db = getFirestore(firebaseApp);

export const listaAnimales = async (req, res) => {
    try {
        const animalesCol = collection(db, 'animales');
        const animalesSnapshot = await getDocs(animalesCol);
        const animalesList = animalesSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                data: doc.data()
            }
        });
        console.log('retrieve');
        res.json(animalesList);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const agregar = async (req, res) => {
    try {
        const animalesCol = collection(db, 'animales');
        await addDoc(animalesCol, req.body);
        res.json({result:"ok"});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const modificar = async (req, res) => {
    try {
        const docRef = doc(db, 'animales', req.body.id);
        await updateDoc(docRef, req.body.data);
        res.json({result:"ok"});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = doc(db, 'animales', id);
        await deleteDoc(docRef);
        res.json({result:"ok"});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export default {
    listaAnimales,
    agregar,
    modificar,
    eliminar
};