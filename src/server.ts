// src/server.ts
import app from './app';
import express from 'express';
import connectDB from './services/db';

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
