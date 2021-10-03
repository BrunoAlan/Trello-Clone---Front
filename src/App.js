import React, { useEffect, useState } from "react";
import "./App.css";
import {getCards,getColumns} from '../src/services/APIservices'
import Board from "./components/Board";
import Column from "./components/Column";
import BoardTitle from "./components/BoardTitle";
import Card from "./components/Card";

function App() {
  const [cards, setcards] = useState([]);
  const [columns,setColumns] = useState([])
  
  useEffect(() => {
    const fetch = async () => {
      setcards(await getCards());
      setColumns(await getColumns())
    };
    fetch();
  }, []);
  return (
    <>
     <BoardTitle title='Kanban UTN'/>
      <Board>
        {columns.map(({title}) =>(
        <Column title={title}>
        <div className="column-content">
          {cards &&
            cards.map(( {title,description}) => (
              <Card title={title} description={description}/>
            ))}
        </div>
      </Column>
        ))}
      </Board>
    </>
  );
}

export default App;
