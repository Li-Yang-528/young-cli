module.exports = ( program ) => {
    program.push(
        {
            command: 'create <app-name>',
            description: '创建一个新项目',
            action: ( ans ) => { 
                console.log(ans)
            } 
        }
    )
}