import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import users from "./assets/users.json"
import nophoto from "./assets/nopokemon.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(users);

const ImgComponent = ({ pok: { user, avatar=nophoto } }) => {
    console.log(user);
    return (
        <div>
            <img width="475px" src={avatar} alt={user}/> 
        </div>)
}
root.render(<ImgComponent pok={users[13]} />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


