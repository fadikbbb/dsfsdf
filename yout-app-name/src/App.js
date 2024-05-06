import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Form';
import TransactionList from './TransactionList';



// let users = [{
//   fname: "hadi",
//   lname: "kabbani",
// }, {
//   fname: "fadi",
//   lname: "Kabbani",
// }, {
//   fname: "shadi",
//   lname: "Kabbani",
// }, {
//   fname: "ahmad",
//   lname: "Kabbani",
// }, {
//   fname: "mhamad",
//   lname: "Kabbani",
// }]

// function App() {
//   return (
//     users.map(ele => <Users user={ele} />)
//   )
// }

// function Users(props) {
//   return (
//     <div>
//       <h1>{props.user.fname} {props.user.lname}</h1>
//     </div>);
// }

// 
// function App() {
//   const [users, setUsers] = useState({ fName: "Hadi", lName: "Kabbani", userage: 22 });
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     setUsers({ fName: firstname, lName: lastname, userage: age });
//   }
//   return (
//     <div className='container'>
//       <h1>{users.fName}  {users.lName} your age is {users.userage}</h1>
//       <form onSubmit={handleSubmit}>
//         <input className='input' id='fname' type="text" placeholder='Enter your first name' onChange={(e) => setFirstName(e.target.value)} />
//         <input className='input' id='lname' type="text" placeholder='Enter your last name' onChange={(e) => setLastName(e.target.value)} />
//         <input className='input' id='age' type="text" placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }


// function App() {
//   const [users, setUsers] = useState([]);

//   function addUser(user) {
//     setUsers(users => [...users, user]);
//     console.log(users);
//   }
//   return (<div>
//     <Form add={addUser} />
//     <div>
//       <UserList users={users} />
//     </div>
//     <div>
//       <AdminList users={users} />
//     </div>
//   </div>
//   )
// }

// function Form({ add }) {
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [role, setRole] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     let user = { fName: firstname, lName: lastname, userRole: role };
//     add(user);
//   }
//   return (
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <input className='input' id='fname' type="text" placeholder='Enter your first name' onChange={(e) => setFirstName(e.target.value)} />
//         <input className='input' id='lname' type="text" placeholder='Enter your last name' onChange={(e) => setLastName(e.target.value)} />
//         <input className='input' id='age' type="text" placeholder='Enter your role' onChange={(e) => setRole(e.target.value)} />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// function UserList({ users }) { return <ul> {users.map((ele, index) => ele.userRole === "user" ? <li key={index}>{ele.fName} {ele.lName} your age is {ele.userRole}</li> : "")}</ul> }
// function AdminList({ users }) { return <ul> {users.map((ele, index) => ele.userRole === "admin" ? <li key={index}>{ele.fName} {ele.lName} your age is {ele.userRole}</li> : "")}</ul> }

function App() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems(items => [...items, item]);
  }
  return <div className="container" >
    <Form addTransaction={addItem} />
    <TransactionList items={items} />
  </div>
}


export default App;
