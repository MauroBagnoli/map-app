import { useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useContext } from 'react';
import { DeviceContext } from '@/context/device-context';


export function DeviceDetails() {
    const { devices } = useContext(DeviceContext);
    const { id } = useParams();
    const device = devices.find(item => item.id.toString() === id?.toString());

    return (
        <main className="flex justify-center px-4">
            <div className="w-full max-w-screen-lg">
                <h2 className="pt-4 pb-4 text-2xl font-semibold tracking-tight scroll-m-20">
                    Device details
                </h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Name: {device?.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Coordinates: {device?.latitude}, {device?.longitude}
                    </CardContent>
                    <CardContent>
                        Mobile number:
                        <p>{device?.mobileNumber}</p>
                    </CardContent>
                    <CardContent>
                        Last connection:
                        <p>{device?.lastConnection.toString()}</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
};
