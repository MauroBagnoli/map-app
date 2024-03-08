import { createContext, useState, useEffect, FC, ReactNode } from 'react';


export interface Device {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    mobileNumber: string;
    lastConnection: Date;
}

interface DeviceContextType {
    devices: Device[];
    fetchDevices: () => Promise<void>;
}

const DeviceContext = createContext<DeviceContextType>({ devices: [], fetchDevices: async () => { } });

const DeviceProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [devices, setDevices] = useState<Device[]>([]);

    const fetchDevices = async () => {
        try {
            const query = `
                    query {
                        devices { id name mobileNumber latitude longitude lastConnection }
                    }
                `;

            const response = await fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            })
            const { data } = await response.json();

            setDevices(data?.devices || []);
        } catch (error) {
            console.error('Error fetching devices:', error);
        }
    };

    useEffect(() => {
        fetchDevices();
    }, []);

    return (
        <DeviceContext.Provider value={{ devices: devices, fetchDevices }}>
            {children}
        </DeviceContext.Provider>
    );
};

export { DeviceProvider, DeviceContext };
