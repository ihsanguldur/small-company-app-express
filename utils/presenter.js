const successPresenter = (res, message, data) => {
    return res.status(200).json({
        success: true,
        message,
        data
    });
}

const errorPresenter = (res, status, message) => {
    return res.status(status).json({
        success: false,
        message,
        data: null
    });
}

module.exports = {
    successPresenter,
    errorPresenter
}