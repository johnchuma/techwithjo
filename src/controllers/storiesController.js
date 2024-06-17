import { firestore } from "../utils/firebase"
import { generateId } from "../utils/idGenerator"
import {setDoc,doc, Timestamp, orderBy, getDocs, query, collection, getDoc} from "firebase/firestore"

export const addStory = async(data)=>{
    try {
        const id = generateId(15)
        const response = await setDoc(doc(firestore,"stories",id),{
            id,
            createdAt:Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
export const getStories = async () => {
    try {
        const ref = collection(firestore, "stories")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getStory = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"stories", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}