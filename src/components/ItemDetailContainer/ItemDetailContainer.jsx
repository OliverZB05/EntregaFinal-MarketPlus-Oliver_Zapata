import "../ItemDetail/_ItemDetail.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getProduct } from "../../services/Firestore/SingularProduct";

const ItemDetailContainer = () => {

    const { ProductID } = useParams();
    const getProductsWithID = () => getProduct(ProductID);
    const { data: product, error, loading } = useAsync(getProductsWithID, [ProductID]); 

    if(loading) {
        return(
            <div className="ContainerLoading">
                <h1 className="ContainerLoading__TextLoading">Cargando productos...</h1>
            </div>
            
        )
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }


    return (
        <>
                <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer;