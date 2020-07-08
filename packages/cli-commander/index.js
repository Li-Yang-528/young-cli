const program = require( 'commander' );
module.exports = function () {
    program
        .version( require( '../../package' ).version, '-v, --version' )
        .usage( '<command> [options]' )
    
    program    
        .command( 'create <app-name>' )
        .description( '创建一个项目把' )
        .action( res => { 
            console.log( res )
            inquirer.prompt( [
                {
                    type: 'input', // 问题类型
                    name: 'name', // 数据属性名
                    message: '名称', // 提示信息
                    default: 'Rogan', // 默认值
                },
                {
                    type: 'confirm',
                    name: 'out',
                    message: '是否退出'
                },
                {
                    type: 'list',
                    name: 'phone',
                    message: '选择手机品牌',
                    choices: [
                        { name: '小米', value: 'mi' },
                        { name: '华为', value: 'huawei' },
                        { name: '苹果', value: 'apple' }
                    ]
                },
                {
                    type: 'rawlist',
                    name: 'num',
                    message: '编号',
                    choices: [
                        { name: '1', value: 1 },
                        { name: '2', value: 2 }
                    ],
                    default: 0 // 默认值为列表项编号，起始为 0

                },
               
                {
                    type: 'checkbox',
                    name: 'lang',
                    message: '语言',
                    choices: [

                        { name: 'javascript', value: 1 },
                        { name: 'php', value: 2 },
                        { name: 'go', value: 3 },

                    ],
                }

            ] )
            .then( answers => { 
                console.log( answers)
            })
        })
    
    program.parse( process.argv )
        
}

