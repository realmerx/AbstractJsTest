export async function getRescoData(entity, id) {
    return fetch(`${entity}.json`)
        .then(response => response.json())
        .then(data => {
            return data[id];
        });
}