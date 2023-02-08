import "./_ShoppingCart.scss";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ShoppingCart = () => {
    useTitle("MarketPlus / Carrito de compras");

    const { cart } = useContext(CartContext);
    const MySwal = withReactContent(Swal);

    //============== Precio Total ============== 
    let AddValue = 0;
    for(let i = 0; i < cart.length; i++){
        AddValue += cart[i].price;
    }
    //============== Precio Total ============== 

    const RegistrationAlert = () => {
        MySwal.fire({
            title: 'Necesitará registrarse para enviar la orden de compra y poder continuar',
            icon: 'info',
            showConfirmButton: false,
            timer: 3000
        })
    }

    return(
        <>
            <div className="ContainerShoppingCart">
                <div className="ContainerShoppingCart__FlexContainerCart1">
                    <div className="FlexContainerCart1__ContainerTitle">
                        <h1 className="ContainerTitle__Title">Carrito de compras</h1>
                    </div>
                </div>

                <div className="ContainerShoppingCart__FlexContainerCart2" style={{height: cart.length === 0 || cart.length === 1 ? "57vh" : "auto"}}>

                    {cart.length === 0 && <h1 style={{textAlign: "center"}}>No hay productos en el carrito de compras</h1>}
                    
                    {/* =========== TABLES PRODUCTS =========== */}

                    {cart.map( prod => (
                        <table className="FlexContainerCart2__TableProducts" cellSpacing="0" key={prod.id}>
                                    <tbody>
                                            <tr>
                                                <td rowSpan="3" className="TableProducts__NumberingColumn"><h1>{cart.indexOf(prod) + 1}</h1></td>
                                                <th colSpan="3" className="TableProducts__FirstRow"><h1 className="FirstRow__Text">{prod.name}</h1></th>
                                            </tr>

                                            <tr className="TableProducts__SecondRow">
                                                <td className="SecondRow__td1"><h2 style={{textAlign: "center", marginTop: "12px"}}>Cantidad</h2></td>
                                                <td className="SecondRow__td2"><h2 style={{textAlign: "center", marginTop: "12px"}}>Precio</h2></td>
                                                <td className="SecondRow__td3"><h2 style={{textAlign: "center", marginTop: "12px"}}>IVA</h2></td>
                                            </tr>

                                            <tr className="TableProducts__ThirdRow">
                                                <td className="ThirdRow__td1"><h2 style={{textAlign: "center", marginTop: "12px"}}>{prod.quantity}</h2></td>
                                                <td className="ThirdRow__td2"><h2 style={{textAlign: "center", marginTop: "12px"}}>{"$" + prod.price}</h2></td>
                                                <td className="ThirdRow__td3"><h2 style={{textAlign: "center", marginTop: "12px"}}>21%</h2></td>
                                            </tr>
                                    </tbody>
                        </table>
                    ))}
                    {/* =========== TABLES PRODUCTS =========== */}
                    
                    <div className="FlexContainerCart2__SubFlexContainer3">
                        <div className="SubFlexContainer3__ContainerTotalPrice" style={{display: cart.length === 0 ? "none" : "visible"}}>  
                            <div className="Column1TotalPrice"><h2 className="TemplateTotalPrice__Text-1">Precio total:</h2></div>
                            <div className="Column2TotalPrice"><h2 className="TemplateTotalPrice__Text-2" id="TotalPrice">{cart.length !== 0 && `$${AddValue}`}</h2></div>
                        </div>
                    </div>

                    <div className="FlexContainerCart2__SubFlexContainer4">
                        <Link to={`/checkout`}><button className="SubFlexContainer4__GoToCheckout" style={{display: cart.length === 0 ? "none" : "visible"}} onClick={RegistrationAlert}><h2 className="GoToCheckout__Text">Terminar Compra</h2></button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;