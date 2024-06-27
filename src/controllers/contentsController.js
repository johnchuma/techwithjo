import { firestore } from "../utils/firebase"
import { generateId } from "../utils/idGenerator"
import {setDoc,doc, Timestamp, orderBy, getDocs, query, collection, getDoc, where, updateDoc} from "firebase/firestore"

export const addContent = async(data)=>{
    try {
        const id = generateId(15)
         await setDoc(doc(firestore,"contents",id),{
            id,
            createdAt:Timestamp.now(),
            ...data
        })
      const content  =  await getContent(id)
        return content;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
export const getSlugs = async () => {
    try {
        const ref = collection(firestore, "contents")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        const slugs = response.docs.map((item) => item.data()).map((item)=>`${item.title.replace(/ /g,'-')}-${item.id}`);
        console.log(slugs)
        return slugs;
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getStories = async () => {
    try {
        const ref = collection(firestore, "contents")
        let qr = query(ref, orderBy("createdAt","desc"),where("type","==","Story"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getHowTo = async () => {
    try {
        const ref = collection(firestore, "contents")
        let qr = query(ref, orderBy("createdAt","desc"),where("type","==","How to ?"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getEvents = async () => {
    try {
        const ref = collection(firestore, "contents")
        let qr = query(ref, orderBy("createdAt","desc"),where("type","==","Event"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getContent = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"contents", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}

export const updateContent = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"contents", id),{
            ...data
        })

        return response;
    } catch (error) {
        throw error
    }
}