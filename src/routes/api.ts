import {Router} from 'express';
import * as FrasesControler from '../controllers/FraseController';

const router = Router();

//Rotas de teste
router.get('/ping', FrasesControler.ping);
router.get('/random', FrasesControler.random);
router.get('/nome/:nome', FrasesControler.nome);


//Rotas de Frases
router.post('/frases', FrasesControler.createFrase);
router.get('/frases', FrasesControler.listFrases);
router.get('/frases/aleatoria', FrasesControler.randomFrase);
router.get('/frases/:id', FrasesControler.getFrases);
router.put('/frases/:id', FrasesControler.updateFrase);
router.delete('/frases/:id', FrasesControler.deleteFrase);



export default router;