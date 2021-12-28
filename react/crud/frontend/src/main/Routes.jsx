import { Routes, Route } from "react-router-dom"

import Home from '../componentes/home/home'
import UserCrud from '../componentes/user/UserCrud'

export default props => (
   <Routes>
     <Route exact path ="/" element={<Home />} />
     <Route path ="/users" element={<UserCrud />} />
     <Redirect path = "*" element= {<Home />} />  
   </Routes>
);