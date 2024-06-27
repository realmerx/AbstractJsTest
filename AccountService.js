import { getData } from './DataService.js'

function getAccount(id) {
    return getData('accounts', id);
}

export { getAccount }