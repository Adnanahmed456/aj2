import express from 'express'
const app = express();

app.use('/media', express.static('upload'));

app.listen(3000, () => console.log('Server running'));
