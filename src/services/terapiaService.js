import { app } from "@/plugins/Firebase/firebase.js";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
export const db = getFirestore(app);

const colection = "terapias";

const data = {
  paciente: "Cehsco",
  psicologo: "Dr. Smith",
  fechacreacion: new Date(),
  sesiones: [
    { fecha: new Date(), notas: "Primera sesion", estado: "pendiente" },
  ],
};

module.exports = {

createTerapia: async function createTerapia(data) {
  try {
    const newTerapia = {
      paciente: data.paciente,
      psicologo: data.psicologo,
      fechacreacion: data.fechacreacion,
      sesiones: data.sesiones,
    };
    const ref = await doc(collection(db, colection));
    await setDoc(ref, newTerapia);
    console.log("Terapia profile created with ID:", ref.id);
  } catch (error) {
    console.error("Error creating terapia profile:", error.message);
  }
},

}
