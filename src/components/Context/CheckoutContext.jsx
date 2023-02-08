import { useState, createContext } from "react";
export const CheckoutContext = createContext();


export const CheckoutProvider = ({children}) => {
    const [count, setCount] = useState(1); 

    //==========={ Extraer valor de los inputs }===========
    const [TextName, setTextName] = useState("");
    const [TextSurname, setTextSurname] = useState("");
    const [TextEmail, setTextEmail] = useState("");
    const [TextPhone, setTextPhone] = useState("");

        const hadleInputChangeName = ({target}) => {
            setTextName(target.value);
        }
    
        const hadleInputChangeSurname = ({target}) => {
            setTextSurname(target.value);
        }
    
        const hadleInputChangeEmail = ({target}) => {
            setTextEmail(target.value);
        }
    
        const hadleInputChangePhone = ({target}) => {
            setTextPhone(target.value);
        }
    //==========={ Extraer valor de los inputs }===========

    return(
        <CheckoutContext.Provider value={{hadleInputChangeName, hadleInputChangeSurname, hadleInputChangeEmail, hadleInputChangePhone, TextName, TextSurname, TextEmail, TextPhone, count, setCount}}>
            {children}
        </CheckoutContext.Provider>
    ) 
}