type CreateDeviceInput = {
    name: string;
    latitude: number;
    longitude: number;
    mobileNumber: string;
}

export const createDevice = async (input: CreateDeviceInput) => {
    const mutation = `
        mutation CreateDevice($input: CreateDeviceInput!) {
            createDevice(input: $input) {
                name
                mobileNumber
                latitude
                longitude
            }
        }
    `;

    const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: mutation, variables: {input} }),
    });

    const { data } = await response.json();
    return data.createDevice;
};
