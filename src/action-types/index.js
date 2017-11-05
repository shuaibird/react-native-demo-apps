const types = [
    'SELECT_LIBRARY',
]

module.exports = types.reduce((module, type) => (
    {
        ...module,
        [type]: Symbol(type),
    }
), {})
