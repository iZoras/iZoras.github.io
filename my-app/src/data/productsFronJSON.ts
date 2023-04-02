import { IProduct } from "../models";
import ".//products";

const data = require("./products.json");
const products = data.products;

export const productsArray: IProduct[] = products.map((product: any) => {
    return {
        id: product.id,
        url: product.url,
        title: product.title,
        typeOfMeasurement: product.typeOfMeasurement,
        amount: product.amount,
        barcode: product.barcode,
        manufacturer: product.manufacturer,
        brand: product.brand,
        description: product.description,
        price: {
            sum: product.price.sum,
            typeOfCurrency: product.price.typeOfCurrency,
        },
        keywords: product.keywords,
    };
});
