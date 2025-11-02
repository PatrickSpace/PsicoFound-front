import { app } from "@/plugins/Firebase/firebase.js";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

//set database
export const db = getFirestore(app);

//Gestion de usuarios en Firestore
async function createUserProfile(newUser) {
  try {
    const ref = await doc(collection(db, "users"));
    await setDoc(ref, {
      id: newUser.id,
      email: newUser.email,
      nombre: newUser.nombre,
      rol: newUser.rol,
    });
    console.log("User profile created with ID:", ref.id);
  } catch (error) {
    console.error("Error creating user profile:", error.message);
  }
}

export const createUserInFirestore = createUserProfile;
