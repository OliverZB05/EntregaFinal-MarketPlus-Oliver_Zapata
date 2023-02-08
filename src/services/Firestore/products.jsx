import { getDocs, collection, query, where } from "firebase/firestore";
import { createAdaptedProductFromFirestore } from "../../adapters/productAdapter";
import { db } from "../Firebase/firebaseConfig";

export const getProducts = (GroupID) => {
    return new Promise((resolve, reject) => {

        const collectionRef = GroupID ? query(collection(db, "products"), where("group", "==", GroupID)) : collection(db, "products");

        if(GroupID === "DomesticProducts"){
            document.title = "MarketPlus / Hogar";
        }

        if(GroupID === "KitchenProducts"){
            document.title = "MarketPlus / Cocina";
        }

        if(GroupID === "HomeAppliances"){
            document.title = "MarketPlus / Electrodomésticos";
        }

        if(GroupID !== "DomesticProducts" && GroupID !== "KitchenProducts" && GroupID !== "HomeAppliances"){
            document.title = "MarketPlus";
        }

            getDocs(collectionRef).then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })


            resolve(productsAdapted);
            }).catch(error => {
                reject(error);
            })

    })
}