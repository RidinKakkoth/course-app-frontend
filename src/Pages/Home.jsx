// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'

import Navbar from "../Components/Navbar";

// const Home = () => {

//   useEffect(()=>{
//   },)
//   const name=useSelector((state)=>state.user.user)
//   const token=useSelector((state)=>state.auth.token)

//   return (
//     <div className='text-lime-950 bg-red-500'>
//       its home
//       <h1>{name}</h1> <br />
//       <h1>{token}</h1>
//     </div>
//   )
// }

// export default Home



const Home = () => {
  const handleLogout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };

  const handleProfile = () => {
    // Handle profile logic
    console.log('Going to profile...');
  };

  return (
    <div>
      {/* <Navbar onLogout={handleLogout} onProfile={handleProfile} /> */}
      <div className="p-4">
        {/* Your home screen content goes here */}ndbdbbdnb
      </div>
    </div>
  );
};

export default Home;
