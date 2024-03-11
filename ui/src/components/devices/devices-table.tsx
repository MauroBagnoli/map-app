
import { CaretSortIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Device, DeviceContext } from "@/context/device-context"
import { DataTable } from "../tables/data-table"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { NewDeviceDialog } from "./new-device-dialog"

const columns: ColumnDef<Device>[] = [
    {
        accessorKey: "id",
        header: "id",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("id")}</div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    name
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "latitude",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    latitude
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("latitude")}</div>,
    },
    {
        accessorKey: "longitude",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    longitude
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("longitude")}</div>,
    },
    {
        accessorKey: "lastConnection",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    last connection
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("lastConnection")}</div>,
    },
    {
        accessorKey: "mobileNumber",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    mobile number
                    <CaretSortIcon className="w-4 h-4 ml-2" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("mobileNumber")}</div>,
    },
]

export function DevicesTable () {
    const { devices } = useContext(DeviceContext);
    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <DataTable 
                data={devices}
                columns={columns}
                onRowClick={(id) => {
                    navigate('/details/' + (parseInt(id) + 1))
                }}
                actions={<NewDeviceDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />}
            />
        </>
    )
}
