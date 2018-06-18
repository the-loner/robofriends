import React from 'react';

const Card = ({name, email, id,strumento}) => {
    //const {name,email,id,strumento} = props; //destructuring. grazie a questa linea qui sotto posso scrivere soltanto "name" "id" "strumento". molto più comodo
    return (
        // <h1>RoboFriends</h1>
        <div className='tc bg-orange dib br-pill pa3 ma2 grow bw2 shadow-5' >
            <img alt="robots" src={`https://robohash.org/${name}?200x200`}/>
            <div>
                <h2>{name} </h2>
                <h2>{strumento} </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

