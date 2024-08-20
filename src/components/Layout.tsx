import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

interface LayoutProps{
children:React.ReactNode;
}

const Layout:React.FC<LayoutProps>=({children})=>{
const [isSideBarExpanded,setIsSideBarExpanded]=React.useState(true);
const handleToggleSidebar=()=>{
    setIsSideBarExpanded(!isSideBarExpanded);
}

return (
    <div className="flex flex-col h-screen">
      {/* NavBar remains fixed at the top */}
      <NavBar />

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <SideBar isExpanded={isSideBarExpanded} onToggle={handleToggleSidebar} />

{/* Main content area, adjusts based on sidebar state */}
<main
  className={`flex-grow mt-16 p-4 transition-all duration-300 ${
    isSideBarExpanded ? "ml-64" : "ml-20"
  }`}
>
        {/* //  overflow-y-auto"
        //   className={`flex-grow top-20 p-4 transition-all duration-300 ${isSideBarExpanded ? 'ml-64' : 'ml-20'} md:ml-64`}
      //  > */}
          {children} {/* Render the page content here */}
        </main>
      </div>
    </div>
  );
}

export default Layout