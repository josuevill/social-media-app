import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'

export default async function isUsernameExists(username) {
    const consulta = query(collection(db, "usuarios"), where("username", "==", username))
    const querySnapshot = await getDocs(consulta)
    return querySnapshot.size > 0
}
