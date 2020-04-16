const {db, Todos} = require('./db')

// adding some initial data
async function addTask(){
    await db.sync()

    await Todos.bulkCreate([
        {
            title: 'Node-js',
            description: 'Learning Basic of Node JS'
        },
        {
            title: 'Angular',
            description: 'Learning Basic of Angular'
        },
        {
            title: 'Java',
            description: 'Learning Advance Java'
        }
    ])
}

addTask()