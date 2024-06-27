import { firestore } from "../utils/firebase"
import { generateId } from "../utils/idGenerator"
import {setDoc,doc, Timestamp, collection, getDocs} from "firebase/firestore"

export const addSubscriber = async(data)=>{
    try {
        const response = await setDoc(doc(firestore,"subscribers",data.email),{
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

export const getSubscribers = async () => {
    try {
       
        
        const ref = collection(firestore, "subscribers")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}