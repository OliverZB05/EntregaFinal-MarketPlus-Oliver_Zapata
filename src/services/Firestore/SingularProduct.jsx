import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/Firebase/firebaseConfig";

export const getProduct = (ProductID) => {

    return new Promise((resolve, reject) => {
        const docRef = doc(db, "products", ProductID);
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productsAdapted = { id: doc.id, ...data }
    
            resolve(productsAdapted);
        }).catch(error => {
            reject(error);
        })

    })
}
