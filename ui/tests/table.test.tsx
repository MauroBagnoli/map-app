import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { DataTable } from '../src/components/data-table';

type dataTest = {
    id: number,
    name: string,
    getValue: (arg0: string) => string;
}
describe('DataTable', () => {
    const data = [
        { id: 1, name: 'Item 1'},
        { id: 2, name: 'Item 2' },
    ];

    const columns = [
        {
            accessorKey: "id",
            header: "id",
            cell: ({ row }: { row: dataTest }) => (
                <div className="capitalize">{row.getValue("id")}</div>
            ),
        },
        {
            accessorKey: "name",
            header: "name",
            cell: ({ row }: { row: dataTest }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
    ]

    const onRowClick = jest.fn();

    it('renders the table with correct data and actions', () => {
        render(
            <DataTable data={data} columns={columns} onRowClick={onRowClick} actions={<button>Test Action</button>} />
        );

        // Table headers are rendered correctly
        expect(screen.getByText('id')).toBeInTheDocument();
        expect(screen.getByText('name')).toBeInTheDocument();

        // Table data is rendered correctly
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();

        // Action button is rendered
        expect(screen.getByText('Test Action')).toBeInTheDocument();
    });

    it('renders no results message if data is empty', () => {
        render(<DataTable data={[]} columns={columns} onRowClick={onRowClick} />);

        expect(screen.getByText('No results.')).toBeInTheDocument();
    });
});
