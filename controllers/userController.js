import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
class UserController {
  static home = (req, res) =>{
    res.render("index")
  }

  static shop = (req, res) => {
    res.render("shop")
  }

  static blog = (req, res) => {
    res.render("bolg")
  }



  static about = (req, res) => {
    res.render("about")
  }

  static contact = (req, res) => {
    res.render("contact")
  }

  static registration = (req, res) =>{
    res.render("registration")
  }

  static cart = (req, res) => {
    res.render("cart")
  }

  static sproduct = (req, res) => {
    res.render("sproduct")
  }

  static createUserDoc = async (req, res) =>{
    try {
      // Creating New Document using Model
      const doc = new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
      })
      // saving document
      await doc.save()
      res.redirect('/login')
    } catch (error) {
      console.log(error)
    }
  } 

  static login = (req, res) =>{
    res.render("login")
  }

  static verifyLogin = async (req, res) =>{
    try {
      const {email, password} = req.body
      const result = await UserModel.findOne({email:email})
      // console.log(result)
      if(result != null){
        if(result.email == email && result.password == password){
          // res.send(`<h1>Dashboard ---- ${result}</h1>`)
          res.redirect("shop")
        } else{
          res.send("<h1>Email or Password is not Valid</h1>")
        }
      } else{
        res.send("<h1>You are not a Registered User</h1>")
      }      
    } catch (error) {
      console.log(error)
    }
  }
 

}

export default UserController