const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');

const protect = (req, res, next) => {
    const bearer = req.headers['authorization'].split(' ')[1];
    jwt.verify(bearer, 'ihsanguldur', (err, decoded) => {
        if (err) {
            return next(new CustomError(401, 'You Are not Authorized.'));
        }
        req.customer = {id: decoded.id};
        return next();
    });
}

module.exports = {
    protect
}