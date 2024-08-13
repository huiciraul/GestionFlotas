import { Schema, model, Document } from 'mongoose';

interface ICamionero extends Document {
  nombre: string;
  licencia: string;
  telefono: string;
  email: string;
}

const camioneroSchema = new Schema<ICamionero>({
  nombre: { type: String, required: true },
  licencia: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
});

export const Camionero = model<ICamionero>('Camionero', camioneroSchema);
