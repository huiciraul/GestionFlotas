// src/app.ts
import express from 'express';
import camioneroRoutes from './routes/camioneroRoutes';
import connectDB from './services/db'; // Sin llaves porque es una exportación por defecto

const app = express();

connectDB(); // Conectarse a la base de datos

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/camioneros', camioneroRoutes); // Rutas para manejar camioneros

export default app;
