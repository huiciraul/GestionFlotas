import { Schema, model, Document } from 'mongoose';

interface IGasto extends Document {
  descripcion: string;
  monto: number;
  fecha: Date;
  camionId: Schema.Types.ObjectId;
}

const gastoSchema = new Schema<IGasto>({
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, required: true },
  camionId: { type: Schema.Types.ObjectId, ref: 'Camion', required: true },
});

export const Gasto = model<IGasto>('Gasto', gastoSchema);
