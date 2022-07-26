
# Mock Product Data API 

Plain and simple API that returns fake product data.

## About
The motivation for this API stemmed from the need for authentic e-commerce data with good quality product images. It also helped me dip my toes in backend development and get to understand the basics of how frontend and backend work together harmoniously :).

## Routes 

- **GET** all products - `https://mock-products-api.herokuapp.com/products`


- **GET** all products on sale - `https://mock-products-api.herokuapp.com/products/sale`


- **GET** a specific product - `https://mock-products-api.herokuapp.com/products/[id]`
 


- **GET** a specific category  - `https://mock-products-api.herokuapp.com/products?category=[category]`


## Usage

### Example

#### Request
```javascript

  fetch('https://mock-products-api.herokuapp.com/products/62d869b0693cad567b18e2c7')
    .then(response => response.json())
    .then(data => console.log(data))

```

#### Response 
```javascript

  {
    "_id":"62d869b0693cad567b18e2c7",
    "title":"Cotton T-shirt",
    "price":8.99,
    "description":"Soft, comfortable cotton t-shirt for everyday wear",
    "category":"women",
    "image":"https://res.cloudinary.com/diqpihmgu/image/upload/v1658355132/ecommerce/cotton-tshirt_ds3v3m.jpg"
  }

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)