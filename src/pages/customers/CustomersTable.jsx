import './customersTable.css';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../../data';

function CustomersTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 75 },
        {
            field: 'customer',
            headerName: 'Customer',
            width: 200,
            renderCell: (params) => {
                return <div className='customerList'>{params.row.user}</div>;
            },
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'orders',
            headerName: 'Total Orders',
            width: 100,
        },
        {
            field: 'spent',
            headerName: 'Total Spent',
            width: 100,
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
        },
    ];

    return (
        <div className='customers'>
            <div className='customersTableList'>
                <div style={{ height: 550, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomersTable;
