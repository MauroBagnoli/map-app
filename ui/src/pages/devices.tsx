import { DevicesTable } from "@/components/devices/devices-table";

function Devices() {
    return (
        <main className="flex justify-center px-4">
            <div className="w-full max-w-screen-lg">
                <h2 className="pt-4 text-2xl font-semibold tracking-tight scroll-m-20">
                    Active devices on the network
                </h2>
                <DevicesTable />
            </div>
        </main>
    );
}

export default Devices;
