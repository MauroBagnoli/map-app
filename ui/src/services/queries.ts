export const getDevices = async () => {
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

    return data;
}
