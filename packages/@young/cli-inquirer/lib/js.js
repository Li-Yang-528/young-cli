module.exports = ( inquirer ) => {
    inquirer.push(
        {
            type: 'list',
            name: 'js',
            message: '请选择js处理器',
            choices: [
                { name: 'Javascript', value: 'js' },
                { name: 'Typescript', value: 'ts' }
            ],
            default: 'js'
        }
    )
}