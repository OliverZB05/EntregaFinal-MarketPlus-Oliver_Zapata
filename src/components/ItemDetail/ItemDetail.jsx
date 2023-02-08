import "./_ItemDetail.scss";
import { useState } from "react";
import swal from "sweetalert";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useTitle } from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({product}) => {
    useTitle("MarketPlus / " + product.name);

//=============={ Lógica de los botones de suma, resta y reset }==============

    const [count, setCount] = useState(product.quantity);
    let [PrintPrice, setPrintPrice] = useState(product.unitprice);
    const { addItem, isInCart, cart } = useContext(CartContext);
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    if(PrintPrice === undefined){
        PrintPrice = product.price;
    }

    const decrement = () => {
        if(count === 1){
            swal({
                title: "Llegaste al límite productos",
                icon: 'info'
            });
            return;
        }

        setCount(count - 1);
        setPrintPrice(PrintPrice - product.price);
    }

    const increment = () => {
        if(count === product.stock){
            swal({
                title: "Llegaste al límite de stock del producto",
                icon: 'info'
            });
            return;
        }

        setCount(count + 1);
        setPrintPrice(PrintPrice + product.price);
    }

    const reset = () => {
        setCount(1);
        setPrintPrice(product.price);
    }

    const PushToCart = () => {
            addItem({ id: product.id, name: product.name, quantity: count, price: PrintPrice});

            MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Ya se ha agregado el producto al carrito',
                showConfirmButton: false,
                timer: 2500
            })
    }

    const DeleteItem = () => {
        if(isInCart(product.id)){
            const found = cart.find(el => el.id === product.id)
            const idxOf = cart.indexOf(found);
            cart.splice(idxOf, 1);
            navigate("/");

            MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Ya se ha eliminado el producto del carrito',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

//=============={ Lógica de los botones de suma, resta y reset }==============

    return (
        <>
            <div className="ContainerDetail">
                <div className="ContainerDetail__Section1"></div>
                <div className="ContainerDetail__Section2">
                    <div className="Section2__ContainerAlert">
                        <div className="ContainerAlert__Row1">
                            <h1 className="Row1__NameProduct">{product.name}</h1>
                        </div>

                        <div className="ContainerAlert__Row2">
                            {/* ================== CardProduct ================== */}
                            <div className="ContainerCards">
                                        <div className="ContainerCards__CardProduct">
                                            
                                                <div className="CardProduct__ContainerIMG" style={{ backgroundImage: `url(${product.img})`}}></div>
                                            
                                        </div>
                            </div>
                            {/* ================== CardProduct ================== */}
                        </div>


                        <div className="ContainerAlert__Row3">
                            <div className="Row3__Column1">
                                <div className="Column1__RowSection1"> <h2 className="RowSection1__TitleGroup">Categoría</h2> </div>
                                <div className="Column1__RowSection2"> 
                                    <h2 className="RowSection2__TextGroup">
                                        {product.group === "DomesticProducts" && "Productos del hogar"} 
                                        {product.group === "KitchenProducts" && "Productos de cocina"}
                                        {product.group === "HomeAppliances" && "Electrodomésticos"}
                                        </h2> 
                                </div>
                            </div>

                            <div className="Row3__Column2">
                                <div className="Column2__RowSection1"> <h2 className="RowSection1__TitlePrice">Precio</h2> </div>
                                <div className="Column2__RowSection2"> <h2 className="RowSection2__TextPrice">{"$" + PrintPrice}</h2> </div>
                            </div>
                        </div>


                        <div className="ContainerAlert__Row4" id="Row4">
                            <div className="Row4__SubRow1"> <h2 className="SubRow1__TitleQuantity">Cantidad</h2> </div>
                            <div className="Row4__SubRow2"> 
                                <h2 className="SubRow2__TextQuantity">{count}</h2> 

                                {/* ================== Botones de incremento, decremento y reset ================== */}
                                    <button className="SubRow2__PlusButton">
                                        <p className="PlusButton__Text" onClick={increment}>+</p>
                                    </button> 
                                    <button className="SubRow2__MinusButton">
                                        <p className="MinusButton__Text" onClick={decrement}>-</p>
                                    </button>
                                    <button className="SubRow2__ResetButton">
                                        <p className="ResetButton__Text" onClick={reset}>Reset</p>
                                    </button><br />
                                {/* ================== Botones de incremento, decremento y reset ================== */}

                            </div>

                            {/* ================== Lógica de botones de borrar producto e ir al carrito ================== */}
                                { !isInCart(product.id) ? <button className="Row4__PayButton" onClick={PushToCart}><p className="PayButton__Text">Comprar</p></button>
                                : (<> <button className="Row4__DeleteItemButton" onClick={DeleteItem}><p className="DeleteItemButton__Text">Borrar Producto</p></button><br />
                                <Link to={`/ShoppingCart`}><button className="Row4__ShoppingButton"><p className="ShoppingButton__Text">Ir al carrito de compras</p></button></Link> </>)}
                            {/* ================== Lógica de botones de borrar producto e ir al carrito ================== */}
                        </div>


                    </div>
                </div>
                <div className="ContainerDetail__Section3"></div>
            </div>
        </>
    )
}

export default ItemDetail;