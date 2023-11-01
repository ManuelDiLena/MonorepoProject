import React, { useState } from 'react';

// Defice an interaface for the data that will be passed as props
interface TableData {
    id: number;
    title: string;
    category: string;
    price: number;
}

// Define an interface for the component props
interface TableProps {
    data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {

    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;

    const handleSort = (columnName: string) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnName);
            setSortDirection('asc');
        }
    };

    const sortedData = data.slice().sort((a, b) => {
        if (sortColumn) {
            if (sortDirection === 'asc') {
                return a[sortColumn] < b[sortColumn] ? -1 : 1;
            } else {
                return a[sortColumn] < b[sortColumn] ? 1 : -1;
            }
        }
        return 0;
    })

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = sortedData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(sortedData.length % itemsPerPage);

    return (
        <div className='overflow-x-auto mx-auto max-w-screen-lg mt-3'>
            <table className='w-full table-auto border-collapse border border-gray-300'>
                <thead className='bg-second'>
                    <tr>
                        <th 
                            className='px-4 py-2 text-left text-base text-text font-large uppercase tracking-wider cursor-pointer'
                            onClick={() => handleSort('title')}>
                                Product
                        </th>
                        <th 
                            className='px-4 py-2 text-left text-base text-text font-large uppercase tracking-wider cursor-pointer'
                            onClick={() => handleSort('category')}>
                                Category
                        </th>
                        <th 
                            className='px-4 py-2 text-left text-base text-text font-large uppercase tracking-wider cursor-pointer'
                            onClick={() => handleSort('price')}>
                                Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map((item) => (
                            <tr key={item.id} className={item.id % 2 === 0 ? 'bg-third' : 'bg-white'}>
                                <td className="px-4 py-2">{item.title}</td>
                                <td className="px-4 py-2">{item.category}</td>
                                <td className="px-4 py-2">{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='mt-4 flex justify-between'>
                <button
                    className='bg-second p-1 text-text border-0 tracking-wide cursor-pointer'
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                        Anterior
                </button>
                <button
                    className='bg-second p-1 text-text border-0 tracking-wide cursor-pointer'
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default Table;