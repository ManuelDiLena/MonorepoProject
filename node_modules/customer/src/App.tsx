import { useEffect, useState } from 'react';
import { getProducts, Product } from '../../shared/api';
import Header from './components/Header';
import Card from './components/Card';

function App() {

    const [products, setProducts] = useState<Product[]>([]);
    const [filterProduct, setFilterProduct] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    // Function to toggle sort direction by price
    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    }

    // Function to sort products by price at the specified direction
    const sortedProducts = [...products].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    // Function to filter products by name and category
    const filteredProducts = sortedProducts.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(filterProduct.toLowerCase());

        const categoryMatch = product.category.toLowerCase().includes(filterCategory.toLowerCase());

        return (!filterProduct || titleMatch) && (!filterCategory || categoryMatch);
    })

    return (
        <>
            <div>
                <Header />
                <div className='container mx-auto flex flex-row justify-evenly py-3 sm:flex-row'>
                    <input
                        type='text'
                        placeholder='Filtrar por producto'
                        value={filterProduct}
                        onChange={(e) => setFilterProduct(e.target.value)}
                        className='sm:w-1/2 w-full sm:mr-4 mb-2 h-10 px-4 border-solid border-2 border-second text-text sm:text-lg outline-none'
                    />
                    <input
                        type='text'
                        placeholder='Filtrar por categoría'
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className='sm:w-1/2 w-full sm:mr-4 mb-2 h-10 px-4 border-solid border-2 border-second text-text sm:text-lg outline-none'
                    />
                    <button 
                        onClick={toggleSortDirection}
                        className='sm:w-1/2 w-full sm:mr-4 mb-2 h-10 px-4 bg-second border-solid border-2 border-second text-text sm:text-lg outline-none'
                    >
                        Ordenar por Precio {sortDirection === 'asc' ? 'Mayor' : 'Menor'}
                    </button>
                </div>
                <div className='flex flex-wrap'>
                    {
                        filteredProducts.map((product) => (
                            <Card 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                category={product.category}
                                price={product.price}
                                image={product.image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default App
