import { getDynamicsData } from './DynamicsSpecificApi.js';

export async function getData(entity, id) {
    return await getDynamicsData(entity, id);
}