import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Insert from "../pages/Insert";
import Display from "../pages/Display";
import Search from "../pages/Search";
import Update from "../pages/Update";
import EditData from "../pages/EditData";


const App=()=>{
    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="display" element={<Display/>}/>
<Route path="insert" element={<Insert/>}/>
<Route path="search" element={<Search/>}/>
<Route path="search" element={<Update/>}/>
<Route path="editdata:/id" element={<EditData/>}/>

    </Route>
</Routes>
</BrowserRouter>
        </>
    )
}
export default App;