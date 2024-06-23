import { firestore } from "../utils/firebase"
import { generateId } from "../utils/idGenerator"
import {setDoc,doc, Timestamp} from "firebase/firestore"

export const addSubscriber = async(data)=>{
    try {
        const response = await setDoc(doc(firestore,"subscriber",data.email),{
            id:data.email,
            createdAt:Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}