import React, { Component } from 'react'
import Userlist from "./Userlist.js";


export class Users extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <Userlist/>
      </div>
    );
  }
}

export default Users