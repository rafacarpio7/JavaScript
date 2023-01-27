

// ************************************************************** PRODUCTOS ************************************************************
// const envioDatosProductos = () => {
//     const peticion=new XMLHttpRequest();
//     peticion.open('POST','http://localhost:3000/products');

//     peticion.setRequestHeader('Content-Type', 'application/json');

//     peticion.onload = () => {
//         const data = JSON.parse(peticion.response);
//         console.log(data);
//     };
//     peticion.send(JSON.stringify({
//         nombreProducto: document.getElementById('nombreProducto').value,
//         precio: document.getElementById('precio').value,
//         descripcionProducto: document.getElementById('descripcionProducto').value,
//         categoria: document.getElementById('categoria').value
//     }));   
// };
var form=document.getElementById('formularioProductos');
form.addEventListener('submit',function(){

    const peticion=new XMLHttpRequest();
    peticion.open('POST','http://localhost:3000/products');

    peticion.setRequestHeader('Content-Type', 'application/json');

    peticion.onload = () => {
        const data = JSON.parse(peticion.response);
        console.log(data);
    };
    peticion.send(JSON.stringify({
        nombreProducto: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precio').value,
        descripcionProducto: document.getElementById('descripcionProducto').value
    }));   
});

// ************************************************************** CATEGORIAS ************************************************************
// const envioDatosCategorias = () => {
//     const peticion=new XMLHttpRequest();
//     peticion.open('POST','http://localhost:3000/categories');

//     peticion.setRequestHeader('Content-Type', 'application/json');

//     peticion.onload = () => {
//         const data = JSON.parse(peticion.response);
//         console.log(data);
//     };
//     peticion.send(JSON.stringify({
//         nombreCategoria: document.getElementById('nombreCategoria').value,
//         descripcionCategoria: document.getElementById('descripcionCategoria').value
//         // name: "monitor FHD",
//         // price: 140.99,
//         // description: "monitor FHD Samsung",
//         // categoryId: 1
//     }));   
// };

