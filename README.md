# MarketPlus

## Introducción
Este es un proyecto Ecommerce hecho en React en el cual se puede tener una buena interacción de usuario con una gran variedad de lógica de programación como pueden ser:
- Almacenamiento de productos en un carrito de compras
- Manejo de cantidad, precio, stock y categorías de cada producto
- Buena navegabilidad entre componentes
- Lógica para enviar una orden de compra que se recibe desde firestore, sección perteneciente al servicio de firebase, entre otras funcionalidades.

Principalmente este proyecto fue realizado con la finalidad de simular una página Ecommerce de compras online como y brindar al usuario la expeciencia de escoger un producto de su agrado y configurando a su preferencia el manejo de sus productos elegidos, con una interfaz fácil de entender y atajos que hacen más fácil el trabajo de interacción para el cliente.


## Como iniciar el proyecto
- Clonar el repositorio
- Instalar las dependencias presentes en el archivo "package.json" en la ruta "./package.json"
- Configurar variables de entorno presentes en el archivo "firebaseConfig.jsx" y reemplazarlas por las del archivo ".env" (archivo privado)
- Ejecutar el comando de consola npm start


##  Información de la funcionalidad del proyecto
En el archivo "App.jsx" en la ruta "./src/App.jsx" se puede ver la estructura principal de la página web, mostrando las importaciones más destacadas y de mayor importancia y el manejo de rutas de la aplicación hecho mediante react-router-dom. Algunos componentes a destacar de la web son:

- ### ItemListContainer y ItemDetailContainer
Se encargan del filtrado de productos, ItemListContainer para varios productos y filtrar por categorías e ItemDetailContainer para el producto seleccionado en la compra.

- ### CartProvider y CheckoutProvider
Estás funciones vienen son importadas desde contexts que contiene la web en la carpeta context (ubicada en la ruta "./src/components/Context"), cada uno de ellos cumplen diferentes papeles en diferentes áreas.

- CartProvider
Se encarga del manejo del "ShoppingCart.jsx", archivo en donde se encuentra la lógica del carrito de compras.

- CheckoutProvider
Cumple un papel importante en el manejo del "Checkout.jsx", archivo donde está la lógica de enviar la orden de compra.

- ### Hooks personalizados
El proyecto contiene hooks personalizados que cumplen la función de optimizar y facilitar la legibilidad del código y cumpliendo un papel importante en el mismo, entre ellos están:

- useAsync
Cumple un papel fundamental en al filtrar y mostrar de productos,

- useTitle
Este es para cambiar el título de la página dependiendo de en que ruta se encuentre el usuario.


- ### Servicios
La configuración de los servicios más usados (firebase y firestore) se encuentra en la ruta "./src/services". En el documento "FirebaseConfig.jsx" se podrán poner las variables de entorno para así visualizar los productos.

- ### Adaptadores
Se encuentran en la ruta "./src/adapters", en este proyecto solo hay un adaptador que es "productAdapter.jsx" que se encarga de traer solo los datos más importantes de los productos almacenados en el backend de firebase.

- ### Dato importante: algunos componentes pueden tener subcomponentes o "subcomponents" los cuales son componentes hijos del componente principal y que pueden ser imporntantes para que funcione la web.


##  Estilos de la web
Los estilos de la página están hechos mediante SASS, el cual se puede instalar en las dependencias de la página.

- ### 1. Dato importante: algunos componentes tienen en su carpeta hojas de estilo ".scss" las cuales tienen el estilo de cada componente y todas las rutas de esos estilos se muestrán en la página mediante el archivo "style.scss" encontrado en la ruta "./src/SASS".

- ### 2. Dato importante: en la carpeta ubicada en "./src/SASS" también se podra ver una carpeta llamada "_vars.scss", la cual contiene los mixins y maps de cada cada hoja de estilos, es decir que todas las hojas de estilos de todos los componentes que las contienen importan los mixins y maps del archivo "_vars.scss".


## Manejo de interfaz

- ### Filtrado de productos
![Filtrado de productos](https://user-images.githubusercontent.com/106617284/217620950-d2dd8a10-adc4-408e-bd3f-2bc39bf5cea5.gif)

- ### Manejo de cantidades, precios, stocks y borrado de productos
![Manejo de cantidades, precios y stock](https://user-images.githubusercontent.com/106617284/217629818-65ab8066-aac8-4f4b-b04e-54bbcd0afeab.gif)

- ### Carrito de compras
![Carrito de compras](https://user-images.githubusercontent.com/106617284/217631976-5625092e-f3a4-4aa0-8528-4d4eb39a1163.gif)

- ### Enviar orden de compra
![Orden de compra](https://user-images.githubusercontent.com/106617284/217637289-27d31eec-5b49-42b0-8748-1cbe62ab4e8f.gif)
