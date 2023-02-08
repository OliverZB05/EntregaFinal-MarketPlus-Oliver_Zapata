import { useState, createContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart((prev) => [...prev, productToAdd]);
        }
        else{
            console.error("Este producto ya está agregado");
        }
        } 

        const isInCart = (id) => cart.some(prod => id === prod.id);

        const getTotalQuantity = () => {
            let accu = 0

            cart.forEach(prod => {
                accu += prod.quantity
            })

            return accu;
        }


        const getTotal = () => {
            let total = 0

            let AddValue = 0;
            for(let i = 0; i < cart.length; i++){
                total = AddValue += cart[i].price;
            }

            return total;
        }

        const totalQuantity = getTotalQuantity();

        const total = getTotal()

        const clearCart = () => {
            setCart([]);
        }

    return(
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, cart, total, clearCart}}>
            {children}
        </CartContext.Provider>
    ) 
}