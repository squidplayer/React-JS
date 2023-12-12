import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';


function App() {

  const [items, setItems]= useState('');

  const [listitems, setListitems]= useState([]);

  const addItems = (event)=>{
    setItems(event.target.value);
  }

  const aniket = () => {
      setListitems((olditems)=> {
        return [...olditems, items];
      })
  }

  const deleteItem = (id)=>{
    console.log('Item deleted')
    setItems((olditems)=>{
      return olditems.filter((arrele, index)=>{
          return index !== id;
      })
    })
  }




  return (
    <div className="main-container">
        <div className='heading'></div>

        <input className='' onChange={addItems}></input>
        <button onClick={aniket} >Add me</button>
        <div className='lists'>
          <ul>
            {
              listitems.map((item, index)=>{
                return (
                  <TodoList text={item} key={index} id={index} onselect={deleteItem}/>
                )
              })
            }
          </ul>
        </div>
    </div>
  );
}

export default App;
