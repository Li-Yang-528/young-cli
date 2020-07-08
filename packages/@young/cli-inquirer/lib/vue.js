module.exports = ( inquirer ) => {
    inquirer.push(
        {
            type: 'confirm',
            name: 'jsx',
            message: '请选择是否使用jsx',
            default: true
        }
    )
}