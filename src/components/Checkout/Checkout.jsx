import "./_Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { CheckoutContext } from "../Context/CheckoutContext";
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore";  
import { db } from "../../services/Firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./subcomponents/RegistrationForm";
import { useTitle } from "../../hooks/useTitle";

const Checkout = () => {
    useTitle("MarketPlus / Registrarse");

    const [ loading, setLoading ] = useState(false);
    const { cart, total, clearCart } = useContext(CartContext);
    const { TextName, TextSurname, TextEmail, TextPhone } = useContext(CheckoutContext);

    const navigate = useNavigate();
    let CurrentDate = new Date();


//============{ Función que crea la orden de compra }============
    const createOrder = async ({count}) => {
        setLoading(true);

        try {

            const objOrder = {
                
                OrderData:{
                    Fecha: `${CurrentDate.toLocaleDateString()}`,
                    NúmeroDeOrden: `${count}`,
                    TotalDeCompra: `${total}`
                },
                buyer:{
                    Nombre: `${TextName} ${TextSurname}`,
                    Celular: `${TextPhone}`,
                    Email: `${TextEmail}`
                },
                items: cart
            }
    
            const batch = writeBatch(db);
    
            const ids = cart.map(prod => prod.id);
    
            const productsRef = query(collection(db, "products"), where(documentId(), "in", ids))
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef);
            const { docs } = productsAddedToCartFromFirestore;
    
        //============={ Lógica de stock }=============
            const outOfStock = [];
    
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
    
                const productsAddedToCart = cart.find (prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            }) 
    
            if(outOfStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db, "orders");
                await addDoc(orderRef, objOrder); 


                clearCart()

                setTimeout(() => {
                    navigate("/");
                }, 5000)

            
            } else {
                console.error("Hay productos fuera de stock");
            } 
        //============={ Lógica de stock }=============

        } catch(error){
            console.error(error);
        } finally{
            setLoading(false);
        }
        
    }
//============{ Función que crea la orden de compra }============

    if(loading){
        return(
            <div className="CheckountContainer">
                <div className="CheckountSubContainer">
                    <div className="CheckountSubContainer__FlexContainer1">
                        <h1>Generando orden...</h1>
                    </div>
                </div>
            </div>
        ) 
    }


    if(cart.length === 0){
        return (
            <div className="CheckountContainer">
                <div className="CheckountSubContainer">
                    <div className="CheckountSubContainer__FlexContainer1">
                        <h1>No hay productos en el carrito</h1>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="CheckountContainer">
                <div className="CheckountSubContainer">
                    <div className="CheckountSubContainer__FlexContainer1">
                        <RegistrationForm createOrder={createOrder}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;