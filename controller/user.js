const fs = require("fs");
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;

exports.createUser = (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
  }
  
  exports.getAllusers = (req, res)=>{
    res.json(users)
  }
  
  exports.getUser = (req, res)=>{
    console.log(req.params)
    const user = users.find(user=> user.id === (+req.params.id))
    res.json(user)
  }
  
  exports.replaceUser = (req, res)=>{
    console.log(req.params)
    const userIndex = users.findIndex(user=> user.id === (+req.params.id))
    
    users.splice(userIndex, 1, { id: (+req.params.id), ...req.body})
    res.json(users)
    }
  
    exports.updateUser = (req, res)=>{ 
      console.log(req.params)
      
      const userIndex = users.findIndex(user=> user.id === (+req.params.id))
      
      const user = users[userIndex]
      
      users.splice(userIndex, 1, {...user, ...req.body}) //req.body me jo price hai vo replace kardega user me jo price hai
      res.json(users)
      }
  
    exports.deleteUser = (req, res)=>{
      console.log(req.params)
  
      const userIndex = users.findIndex(user=> user.id === (+req.params.id))
  
      const user = users[userIndex]
  
      users.splice(userIndex, 1) 
      res.json(user)
  }