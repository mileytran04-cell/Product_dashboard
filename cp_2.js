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