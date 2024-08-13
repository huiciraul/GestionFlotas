// src/controllers/camioneroController.ts
import { Request, Response } from 'express';
import { Camionero } from '../models/Camionero';

export const getAllCamioneros = async (req: Request, res: Response) => {
  try {
    const camioneros = await Camionero.find();
    res.status(200).json(camioneros);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching camioneros', error });
  }
};

export const createCamionero = async (req: Request, res: Response) => {
  try {
    const newCamionero = new Camionero(req.body);
    const savedCamionero = await newCamionero.save();
    res.status(201).json(savedCamionero);
  } catch (error) {
    res.status(500).json({ message: 'Error creating camionero', error });
  }
};
