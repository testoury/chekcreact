import React from 'react';
import Profile from './profile/profile';
import image from './assets/me.jpg'

const App = () => {
 const handleName=(Name)=>{alert(Name)}
  return (
    <div>
      <Profile fullName={"hichem"} bio={"ddz"} profession={"drzé"} handleName={handleName}>
        <img src={image}/>
      </Profile>
    </div>
  );
}

export default App;
