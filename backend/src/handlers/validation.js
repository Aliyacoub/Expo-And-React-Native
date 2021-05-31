const showValidationError = (req, res, next) => {
    const errors = req.validationErrors();
    if (errors) {
        const errorsArray = errors.map(err => err.msg);
        return res.status(422).json({ message: errorsArray });
    }
    next();
}


const validate = fn => {
    return function (req, res, next) {
        fn(req, res)
        showValidationError(req, res, next);
    }
}

export default validate;