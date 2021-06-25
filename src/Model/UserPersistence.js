const fs = require("fs");

class UserPersistence {
  users = [];
  constructor() {
    this.getUsers();
  }

  getUsers() {
    try {
      let rawdata = fs.readFileSync("user.json");
      let users = JSON.parse(rawdata);
      return (this.users = users);
    } catch (error) {
      return null;
    }
  }

  deleteUser(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        this.users.splice(i,1);
        let data = JSON.stringify(this.users);
        fs.writeFile("user.json", data, (err) => {
          if (err) throw err;
          
        });
      }
    }
  }

  updateUser(id,user) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        user.id = id;
        this.users.splice(i,1,user);
        let data = JSON.stringify(this.users);
        fs.writeFile("user.json", data, (err) => {
          if (err) throw err;
          
        });
      }
    }
  }


  addUser(user) {
    this.users.push(user);
    let data = JSON.stringify(this.users);
    fs.writeFile("user.json", data, (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });
  }
}

module.exports = UserPersistence;
