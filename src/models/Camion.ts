import { Schema, model, Document } from 'mongoose';

interface ICamion extends Document {
  matricula: string;
  modelo: string;
  marca: string;
  anio: number;
  camioneroId: Schema.Types.ObjectId;
}

const camionSchema = new Schema<ICamion>({
  matricula: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  anio: { type: Number, required: true },
  camioneroId: { type: Schema.Types.ObjectId, ref: 'Camionero', required: true },
});

export const Camion = model<ICamion>('Camion', camionSchema);
