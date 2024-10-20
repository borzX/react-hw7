import { useState } from "react";
import {
    BrowserRouter,
    NavLink,
    Route,
    Router,
    Routes,
    Link,
  } from "react-router-dom";
import { DetailPage } from "./DetailPage";

function ShowDetails() {
const [block, setBlock] = useState()

const blockShow = () => { 
    setBlock(!block)
 }
 const routes = [
    {
      path: "/detail",
      element: <DetailPage />,
    }
  ];

    return (
        <>
         <Link  to="/detail" element={<DetailPage />}>
        Detail
        </Link>
        <Routes>
            <Route path="/detail" element={<DetailPage/>} />
        </Routes>
        </>
       
        
        // <Link  to="/detail" target={"_blank"}>
        //   Detail
        // </Link>
        // <div>
        //     <button onClick={blockShow}>Detail</button>
        //     <p style={{display: block ? 'block' : 'none'}}>LoremText</p>
        // </div>
        
        
    )
    
}

export default ShowDetails;