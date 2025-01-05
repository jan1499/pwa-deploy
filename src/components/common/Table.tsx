"use client"
import React, { useState } from 'react';
import Pagination from './Pagination';

const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((value, key) => value?.[key], obj);
};

interface Column {
    id: string;
    title: string;
    accessor: string | ((row: any) => any);
    cell?: (value: any, row: any) => JSX.Element | string;
    className?: string;
}

interface TableProps {
    columns: Column[];
    data: any[];
    itemsPerPage?: number;
    onRowClick?: (rowData: any) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, itemsPerPage = 10, onRowClick }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <div className="table-responsive-container">
                <table className="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.id} className={column.className || ''} scope="col">
                                    {column.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, rowIndex) => (
                            <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
                                {columns.map((column) => {
                                    const value =
                                        typeof column.accessor === 'function'
                                            ? column.accessor(row)
                                            : getNestedValue(row, column.accessor);
                                    return (
                                        <td key={column.id} className={column.className || ''}>
                                            {column.cell ? column.cell(value, row) : value}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-end my-4'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Table;


// const columns = [
//     { id: 'name', title: 'Name', accessor: 'name' },
//     { id: 'age', title: 'Age', accessor: 'age', cell: (value: any) => <div>{value} years</div> },
//     { id: 'city', title: 'City', accessor: 'address.city' },
//     { id: 'status', title: 'Status', accessor: 'status', cell: (value: any) => (
//         <span style={{ color: value === 'Active' ? 'green' : 'red' }}>{value}</span>
//     )},
//   ];

//   const data = [
//     { name: 'John Doe', age: 28, address: { city: 'New York', address_line: '123 Main St' }, status: 'Active' },
//     { name: 'Jane Smith', age: 34, address: { city: 'Los Angeles', address_line: '456 Elm St' }, status: 'Inactive' },
//     { name: 'Michael Johnson', age: 25, address: { city: 'Chicago', address_line: '789 Maple Ave' }, status: 'Active' },
//     { name: 'Emily Davis', age: 31, address: { city: 'Houston', address_line: '321 Oak St' }, status: 'Active' },
//     { name: 'Daniel Brown', age: 45, address: { city: 'San Francisco', address_line: '654 Pine St' }, status: 'Inactive' },
//     { name: 'Sarah Wilson', age: 29, address: { city: 'Seattle', address_line: '987 Birch St' }, status: 'Active' },
//     { name: 'James Taylor', age: 37, address: { city: 'Miami', address_line: '159 Cedar St' }, status: 'Inactive' },
//     { name: 'Olivia Johnson', age: 26, address: { city: 'Denver', address_line: '753 Elm St' }, status: 'Active' },
//     { name: 'Liam Martin', age: 32, address: { city: 'Austin', address_line: '852 Maple St' }, status: 'Active' },
//     { name: 'Sophia Garcia', age: 40, address: { city: 'Atlanta', address_line: '963 Walnut St' }, status: 'Inactive' },
//     { name: 'William Anderson', age: 27, address: { city: 'Boston', address_line: '741 Oak St' }, status: 'Active' },
//     { name: 'Ava Martinez', age: 33, address: { city: 'Philadelphia', address_line: '852 Birch St' }, status: 'Inactive' },
//     { name: 'Mason Thompson', age: 30, address: { city: 'San Diego', address_line: '963 Pine St' }, status: 'Active' },
//     { name: 'Isabella Hernandez', age: 24, address: { city: 'Dallas', address_line: '741 Cedar St' }, status: 'Inactive' },
//     { name: 'Ethan Moore', age: 39, address: { city: 'San Jose', address_line: '852 Oak St' }, status: 'Active' },
//     { name: 'Mia Clark', age: 28, address: { city: 'Jacksonville', address_line: '963 Maple St' }, status: 'Inactive' },
//     { name: 'Jacob Lewis', age: 34, address: { city: 'Indianapolis', address_line: '741 Birch St' }, status: 'Active' },
//     { name: 'Charlotte Walker', age: 29, address: { city: 'Columbus', address_line: '852 Cedar St' }, status: 'Inactive' },
//     { name: 'Aiden Young', age: 37, address: { city: 'Fort Worth', address_line: '963 Oak St' }, status: 'Active' },
//     { name: 'Amelia Allen', age: 31, address: { city: 'Charlotte', address_line: '741 Maple St' }, status: 'Inactive' },
//   ];