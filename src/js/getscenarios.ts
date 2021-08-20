import { createClient } from 'microcms-js-sdk'; //ES6
import { API_KEY } from './index';

const getScenarios = () => {
    const client = createClient({
        serviceDomain: "trpg",
        apiKey: API_KEY,
    });
    client.get<ResponseType>({
        endpoint: 'scenarios'
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error);
    })
}

export default getScenarios;
