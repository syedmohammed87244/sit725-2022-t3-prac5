const getUser = (req,res) => {
    res.json({statusCode: 400, message: 'Success', data: {'name': 'mohammed'}})
}

module.exports = {getUser}