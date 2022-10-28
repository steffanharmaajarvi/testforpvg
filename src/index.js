import express from 'express';
import staffRoutes from './routes/staff.js';
const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/staff', staffRoutes)