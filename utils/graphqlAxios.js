const axios = require('axios')

const graphqlAxios = async(query,variabels,token ) => {

    const headers = {
        "content-type": "application/json",
    }
    if (token) {
        headers["Authorization"] = token
    } else {
        headers["x-hasura-admin-secret"] = process.env.HASURA_ADMIN_SECRET
    }

    const graphqlQuery = {
        "query": query,
        "variables": variabels
    };

    const response = axios({
        url: process.env.HASURA_ENDPOINT,
        method: 'post',
        headers: headers,
        data: graphqlQuery
    });

    const res = await response.json()
    return res
}

module.exports = {graphqlAxios}