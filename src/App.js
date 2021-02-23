import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar','alam','jahan','mitun','titun']
  const products = [{name:'Photoshop', price:'$9.99'},
  {name:'Photoshop1', price:'$9.99'},
  {name:'Photoshop2', price:'$9.99'},
  {name:'PDF', price:'$9.99'}]


  
  return (
    <div className="App">
      <header className="App-header">
        <p>i am react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Person name="Anika" job="Chef"></Person>
        <Person name="Nibir" job="Singer"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    
      </header>
    </div>
  );
}
function Counter(){
const[count, setCount] = useState(0);
const handleIncrease = () => setCount(count + 1);






return(

<div>
  <h1>Count: {count}</h1>
  <button onMouseMove={() => setCount(count + 1)}>+</button>
  <button onMouseMove={() => setCount(count - 1)}>-</button>
</div>

)

}

function Users(){
const [users, setUsers] = useState([])
useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])
return(

<div>
  <h3>Dynamic users: {users.length}</h3>
  <ul>
    {
    users.map(user => <li>{user.name}-{user.email}</li>)
    }
  </ul>
</div>

)

}

function Product(props){
  const productStyle = {
    border:'1px solid gray', 
    borderRadius:'5px',
    backgroundColor:'cyan',
    height:'200px',
    width:'200px',
    float:'left'
  }
return(
<div style={productStyle}>
<h2> {props.name} </h2>
<h1>{props.price} </h1>
<button>Buy now: </button>

</div>

)


}


function Person (props){
return (
<div style={{border:'1px solid gold', width:'400px'}}>
<h3>My Name: {props.name} </h3>
<p>My Profession: {props.job} </p>
</div>
)


}
export default App;
