import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name : 'ryan',
    luckyNumber: luckyNumber()

};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random() * 1000) + 1;
}


function greeting(user){
    return <div className ="container">
        <h1>Hello to you mister {user.name}</h1>
        <h2 className ='text-muted'> This is the lucky number: {user.luckyNumber}</h2>
    </div>;

}






