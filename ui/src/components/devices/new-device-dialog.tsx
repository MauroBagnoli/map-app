import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { DeviceForm } from "@/forms/device-form"

export function NewDeviceDialog({ dialogOpen, setDialogOpen }: { dialogOpen: boolean, setDialogOpen: (value: boolean) => void}) {
    return (
        <Dialog open={dialogOpen}>
            <Button onClick={() => setDialogOpen(true)} variant="outline">Add New Device</Button>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new Device</DialogTitle>
                    <DialogDescription>
                        Fill the required fields in order to create a new Device
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <DeviceForm setDialogOpen={setDialogOpen} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

