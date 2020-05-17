import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import {
    getPerson,
    detailPerson,
    addPerson,
    updatePerson,
    deletePerson
} from '../controller/PersonController.ts'
const router = new Router()

router.get('/person', getPerson)
router.get('/person/:id', detailPerson)
router.post('/person', addPerson)
router.put('/person/:id', updatePerson)
router.delete('/person/:id', deletePerson)

export default router

/** 
 * Diamsyah M Dida
 * latihan membuat restful api
 * dengan deno
*/