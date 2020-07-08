module.exports = ( inquirer ) => {
    inquirer.push(
        {
            type: 'list',
            name: 'router',
            message: '请选择路由模式',
            choices: [
                { name: 'history', value: 'history' },
                { name: 'hash', value: 'hash' }
            ],
            default: 'hash'
        },
        {
            type: 'list',
            name: 'router',
            message: '请选择路由生成规则',
            choices: [
                { name: '手动', value: 'custom' },
                { name: '自动', value: 'auto' }
            ],
            default: 'custom'
        }
    )
}