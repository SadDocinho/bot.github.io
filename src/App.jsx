import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState } from 'react';

const firebaseapp =  initializeApp({
  apiKey: "AIzaSyAdxx-mHEoVYNs7vVb_X84X26V6Ux_OIzY",
  authDomain: "candyland-6ecc8.firebaseapp.com",
  projectId: "candyland-6ecc8",
});

export const App = () => {
  return <h1>CandyLand</h1>;
};