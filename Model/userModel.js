const pool = require('../db')

class Users {
    static grabAllPost() {
        return pool.query('SELECT * FROM posts')
    }
    static addUserDB(email, username, password, avatar) {
        return pool.query('INSERT INTO users (email, username, password, avatar) VALUES ($1, $2, $3, $4) RETURNING *', [email, username, password, avatar])
    }
    static getUser(username) {
        return pool.query('SELECT * FROM users WHERE username = $1', [username])
    }

}


module.exports = Users