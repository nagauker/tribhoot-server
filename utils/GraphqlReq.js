const { GraphQLClient } = require("graphql-request")

module.exports = GraphqlReq = (query, variables) => {
try{
    const client = new GraphQLClient(`${process.env.HASURA_ENDPOINT}`, { headers: {"x-hasura-admin-secret" : process.env.HASURA_ADMIN_SECRET} })
    return client.request(query, variables)
} catch (err) {
    console.log(err);
    throw err
}

}
