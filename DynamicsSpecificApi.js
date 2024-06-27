
export async function getDynamicsData(entity, id) {
    const result = await fetch(`${entity}.json`);
    const data = await result.json();
    return data[id];
}