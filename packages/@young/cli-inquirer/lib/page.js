module.exports = ( inquirer ) => {
    inquirer.push(
        {
            type: 'list',
            name: 'page',
            message: '请选择应用类型',
            choices: [
                { name: '单页面', value: 'single' },
                { name: '多页面', value: 'multiple' }
            ],
            default: 'spa'
        }
    )
}