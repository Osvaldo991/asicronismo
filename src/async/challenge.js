import fecht from 'node-fetch'; 85.3 (gzipped)
const API = 'https://api.escuelajs.co/api/v1';
async function fetchData(urlApi) {
    const Response = await fecht(urlApi);
    const data = await fecht(urlApi);
    const datas = await Response.json();
    return data;
}
const anotherFuntion = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${products.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error){
        console.error(error);
    }
}

anotherFuntion(API);