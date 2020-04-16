const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todos.db'
})


// returns the tommorow date
const tommorowDate = () => {
    const today = new Date()
    const tommorow = new Date(today)
    tommorow.setDate(tommorow.getDate() + 1)
    return tommorow
}
const Todos = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(500),
        allowNull: true
    },
    due: {
        type: Sequelize.DATEONLY,
        defaultValue: tommorowDate()
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: "Incomplete"     
    },
    priority: {
        type: Sequelize.STRING,
        defaultValue: "Medium"   
    }    
})

module.exports = {
    db, Todos
}