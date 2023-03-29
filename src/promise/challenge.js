import fetch from 'node-fetch'; 85.3 (gzipped);
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetchData(urlApi);
};

/*
fetchData(`${API}/products`)
.then(Response => Response.json())
.then(products => {
    console.log(products);
})
.then(() => {
    console.log('Hola')

})
.catch (error => console.log(error));
*/

fetchData(`${API}/products`)
.then(Response => Response.json())
.then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(Response => Response.json())
.then(product => {
    console.log(console.log(product.title));
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(Response => Response.json())
.then(category => {
    console.log(category.name);
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'));