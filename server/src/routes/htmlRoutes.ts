import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
router.get('*', (_req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname, '../../../index/client/index.html'))
    } catch (error) {
        console.log(error);        
        res.status(500).json(error)
    }
})

export default router;
