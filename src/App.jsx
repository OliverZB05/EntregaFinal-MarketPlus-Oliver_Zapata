//########################################################
//======================{ 𝐈𝐌𝐏𝐎𝐑𝐓𝐒 }======================
//########################################################

    //======================{ Estilos generales }======================
    import "./SASS/styles.scss";
    //======================{ Estilos generales }======================

    //======================{ De react-router-dom }======================
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    //======================{ De react-router-dom }======================

    //======================{ ItemContainers }======================
    import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
    import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
    //======================{ ItemContainers }======================

    //======================{ Contexts }======================
    import { CartProvider } from "./components/Context/CartContext";
    import { CheckoutProvider } from "./components/Context/CheckoutContext";
    //======================{ Contexts }======================

    //======================{ otros }======================
    import Navbar from "./components/NavBar/NavBar";
    import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
    import Checkout from "./components/Checkout/Checkout";
    import Footer from "./components/Footer/Footer";
    //======================{ otros }======================

//########################################################
//======================{ 𝐈𝐌𝐏𝐎𝐑𝐓𝐒 }======================
//########################################################




function App() {

  return (
    <div className="App">
      <header className="App-header">

      {/* ==========={ 𝐃𝐞 𝐂𝐨𝐧𝐭𝐞𝐱𝐭𝐬 }=========== */}
            <CartProvider>
            <CheckoutProvider>
      {/* ==========={ 𝐃𝐞 𝐂𝐨𝐧𝐭𝐞𝐱𝐭𝐬 }=========== */}

              <BrowserRouter>
                <Navbar />
                  <Routes>
                    {/* ==========={ Rutas }=========== */}
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:GroupID" element={<ItemListContainer />} />
                    <Route path="/detail/:ProductID" element={<ItemDetailContainer />} />   
                    <Route path="/ShoppingCart" element={<ShoppingCart/> } />
                    <Route path="/checkout" element={<Checkout />} />
                    {/* ==========={ Rutas }=========== */}
                  </Routes>  
              </BrowserRouter >

      {/* ==========={ 𝐃𝐞 𝐂𝐨𝐧𝐭𝐞𝐱𝐭𝐬 }=========== */}
              </CheckoutProvider>
            </CartProvider>
      {/* ==========={ 𝐃𝐞 𝐂𝐨𝐧𝐭𝐞𝐱𝐭𝐬 }=========== */}



      {/* ==========={ 𝐅𝐨𝐨𝐭𝐞𝐫 }=========== */}
          <Footer />
      {/* ==========={ 𝐅𝐨𝐨𝐭𝐞𝐫 }=========== */}
      </header>
    </div>
  );
}

export default App;
