import { Schema, model, Document } from 'mongoose';

interface IBoleta extends Document {
  fecha: Date;
  hora: string;
  precioTotal: number;
  litrosTotales: number;
  tanqueLleno: boolean;
  kilometrajeActual: number;
  camionId: Schema.Types.ObjectId;
  rutaId: Schema.Types.ObjectId;
}

const boletaSchema = new Schema<IBoleta>({
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  precioTotal: { type: Number, required: true },
  litrosTotales: { type: Number, required: true },
  tanqueLleno: { type: Boolean, required: true },
  kilometrajeActual: { type: Number, required: true },
  camionId: { type: Schema.Types.ObjectId, ref: 'Camion', required: true },
  rutaId: { type: Schema.Types.ObjectId, ref: 'Ruta', required: true },
});

export const Boleta = model<IBoleta>('Boleta', boletaSchema);
