import axios from 'axios';

// API url
const apiUrl = 'https://fakestoreapi.com/products';

// Interface for the product object
export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

// Function to get the list of products
export const getProducts = async ():Promise<Product[]> => {
    try {
        const res = await axios.get(`${apiUrl}`);
        return res.data as Product[];
    } catch (error) {
        throw new Error('Could not get product list');
    }
};