module.exports = (inquirer) => { 
    inquirer.push( {
        type: 'list',
        name: 'css',
        message: '请选择css预编译工具',
        choices: [
            { name: 'sass', value: 'sass' },
            { name: 'less', value: 'less' }
        ],
        default: 'sass'
    })
}