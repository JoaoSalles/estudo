import express from 'express';

const router = express.Router();

router.get('/', async function(req, res)
{
    const response = { body: 'hello node2' };
    const jsonContent = JSON.stringify(response);
    res.end(jsonContent)
})

export default router;