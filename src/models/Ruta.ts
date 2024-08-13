import { Schema, model, Document } from 'mongoose'; 

interface IRuta extends Document {
  descripcion: string;
  distancia: number;
}

const rutaSchema = new Schema<IRuta>({
  descripcion: { type: String, required: true },
  distancia: { type: Number, required: true },
});

export const Ruta = model<IRuta>('Ruta', rutaSchema);
