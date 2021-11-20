const bcrypt = require("bcrypt")
const {GET_MASTER_PASSWORD} = require('../graphql/master')
const GraphqlReq = require("../utils/GraphqlReq")

const checkIsAdmin = async (req, res) => {
    try {
        const masterPassword = await GraphqlReq(GET_MASTER_PASSWORD)
        res.send(bcrypt.compareSync(req.body.password, masterPassword.master[0].password))
    } catch (err) {
        console.log(err);
    }
}

module.exports = checkIsAdmin