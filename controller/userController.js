const userModel = require('../Model/userModel')
const bcrypt = require('bcrypt')


const getAllPost = async (req, res) => {
  const data = await userModel.grabAllPost()
  res.send(data.rows)
}

const addUser = async (req, res) => {
  const {email, username, password } = req.body
  const hashPassword = bcrypt.hashSync(password, 10) 
  try{
  const data = await userModel.addUserDB(email, username, hashPassword, "img")
  res.status(200).json(data.rows)
  } catch (error){
    res.status(404).send(error);
  }
}

const lookForUser = async (req, res) => {
const {username, password} = req.body
const user = await userModel.getUser(username)

if( bcrypt.compareSync(password, user.rows[0].password)){
   res.send(`Hello ${user.rows[0].username}, Welcome.`)
}else{
  res.status(404).send(error);
}

}

module.exports = {
  getAllPost,
  addUser,
  lookForUser
}