import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  
    return (
        <div>
        {    
            robots.map((user, i) => 
                                    {
                return (
                            <Card
                               key={i}
                               id={robots[i].id}
                               name={robots[i].name}
                               strumento={robots[i].strumento}
                               email={robots[i].email}
                            />
                        );
                                    }
                    )   
        }
        </div>
    );
}




//METODO alternativo

// const CardList = ({robots}) => {
//     const cardsArray = robots.map((user,i) =>{
//       return ( 
//       <Card 
//       key={i} 
//       id={robots[i].id} 
//       name={robots[i].name} 
//       strumento={robots[i].strumento} 
//       email={robots[i].email} 
//       />
//       );
//     })
//    return (
//        <div>
//            {cardsArray}
//        </div>
//    );
// }

export default CardList;