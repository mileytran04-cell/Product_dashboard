const url = 'https://www.course-api.com/javascript-store-products';

// fetch with then and catch
function fetchProductsThen() {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(product) {
                console.log(product.fields.name);
            });
        })
        .catch(function(error) {
            console.log('there was an error', error);
        });
}

function handleError(error) {
    console.log('An error occurred:', error.message);
}

function displayProducts(products) {
    let container = document.getElementById('product-container');

    for (let i = 0; i < 5; i++) {
        let product = products[i];
        let name = product.fields.name;
        let price = product.fields.price;
        let image = product.fields.image[0].url;

        let card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = '<img src="' + image + '" alt="product">' +
                         '<h3>' + name + '</h3>' +
                         '<p>$' + price + '</p>';

        container.appendChild(card);
    }
}

// fetch with async await
async function fetchProductsAsync() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data);
    } catch(error) {
        handleError(error);
    }
}

fetchProductsThen();
fetchProductsAsync();