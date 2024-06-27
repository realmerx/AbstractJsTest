import { getRescoData } from './RescoSpecificApi.js';

export async function getData(entity, id) {
    return await getRescoData(entity, id);
}