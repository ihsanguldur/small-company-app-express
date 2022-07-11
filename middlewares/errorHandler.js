const {errorPresenter} = require("../utils/presenter");

const errorHandler = (err, req, res, next) => {
    let status = 500;
    let message = 'Something Gone Wrong.';

    if (err.name === 'customError') {
        status = err.status;
        message = err.message;
    }
    console.log(err)
    errorPresenter(res, status, message);
}

module.exports = errorHandler;