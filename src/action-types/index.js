const types = [
    /* eslint-disable */
    ...require('./auth').default,
    ...require('./employee').default,
    /* eslint-enable */
]

module.exports = types.reduce((module, type) => (
    {
        ...module,
        [type]: type,
    }
), {})
