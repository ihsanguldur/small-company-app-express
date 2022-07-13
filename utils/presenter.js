const successPresenter = (res, message, data) => {
    res.status(200).json({
        success: true,
        message,
        data
    });
}

const errorPresenter = (res, status, message) => {
    res.status(status).json({
        success: false,
        message,
        data: null
    });
}

module.exports = {
    successPresenter,
    errorPresenter
}