import React from 'react';

const Profile = ({ fullName, bio, profession,handleName , children }) => {
  return (
    <div>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};

export default Profile;