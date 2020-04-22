import React from 'react';
import Card from './card';

//This component returns all the Cards to be displayed 
const CardList=({robots})=>{
  const cardArray=robots.map((user,index)=>{
    return <Card key={robots[index].id} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>
  });
  return(
    <div>
      {cardArray}
    </div>
  );
}

export default CardList;
