// src/pages/HomePage.tsx
// import DonutChart from 'components/DonutChart';
import TimeTracker from 'components/TimeTracker';
import React from 'react';

const HomePage: React.FC = () => {
  const appname='Balanced';
  const username='';
  return (<>
      <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Welcome {username} to {appname}</h1>
      <p className="text-lg">This is the Home Page. Navigate using the menu above.</p>
  <div className="timeTracker flex justify-center items-center space-x-8 mt-4">   
    {/* <TimeTracker/> */}
  </div>
    </div>
  </>
  );
};

export default HomePage;
