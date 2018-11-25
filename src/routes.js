import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import DefaultLayout from './layouts/defaultLayout';
import MainLayout from './layouts/mainLayout';
import Splash from './pages/splash';
import Inoutro from './pages/inoutro';
import Main from './pages/main';
// import Splash from './blocks/Splash';
// import One from './blocks/One';
// import Two from './blocks/Two';
// import Three from './blocks/Three';

// export default () => {
//  return (
//    <BrowserRouter>
//    <Switch>
//         <DefaultLayout exact path="/" component={Splash}/>
//         <MainLayout path="/one" component={One}/>
//         <MainLayout path="/two" component={Two}/>
//         <MainLayout path="/three" component={Three}/>
//    </Switch>
//    </BrowserRouter>
//  )
// }


export default () => {
  return (
    <BrowserRouter>
    <Switch>
         <Route exact path="/" component={Splash}/>
         <Route path="/inoutro" component={Inoutro}/>
         <Route path="/main" component={Main}/>
    </Switch>
    </BrowserRouter>
  )
 }