const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id}, 'ihsanguldur', {expiresIn: '10m'});
}

module.exports = generateToken;