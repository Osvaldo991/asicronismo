import fetch from "node-fetch"; 85.3 (gzipped)
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const Response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return Response;
}

const data = {
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
.then(Response => Response.json())
.then(data => console.log(data));