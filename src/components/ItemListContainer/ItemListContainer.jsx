import "../Itemlist/_ItemList.scss";
import { useParams } from "react-router-dom";
import ItemList from "../Itemlist/ItemList";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/Firestore/products";

const ItemListContainer = () => {

    const { GroupID } = useParams();
    const getProductsWithCategory = () => getProducts(GroupID)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [GroupID]);

    if(loading) {
        return(
            <div className="ContainerLoading">
                <h1 className="ContainerLoading__TextLoading">Cargando productos...</h1>
            </div>
        )
        
    }

    if(error) {
        return(
            <div className="ContainerLoading">
                <h1 className="ContainerLoading__TextLoading">Hubo un error al cargar los productos</h1>
            </div>
        )
    }

    

    return(
        <>
            <ItemList products={products} GroupID={GroupID}/> 
        </>
    )
}

export default ItemListContainer;