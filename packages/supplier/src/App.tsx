import { useEffect, useState } from 'react';
import { getProducts, Product } from '../../shared/api';
import Header from './components/Header';
import Table from './components/Table';

function App() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <div className='text-black'>
                <Header />
                <Table data={products} />
            </div>
        </>
    )
}

export default App


