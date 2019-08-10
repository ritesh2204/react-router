import React from 'react';
import { Route} from "react-router-dom";
import Mynavbar from "./components/NavBar";
import Style from "./Style.css";

const divStyle = {
  height: '100vh',

};

function App() {
  return (
    <div className="text-center">
        < Mynavbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/rizwan" component={RizwanPage} />
        <Route exact path="/ritu" component={RituPage} />
    </div>
  );
}

const Home = () => {

  return (
    <div>
         <React.Fragment>
        <section>
         <div className="container-fluid">
             <div className="row bg-info justify-content-center align-items-center" style={divStyle}>
                <div className="col-sm-10 text-center">
                    <h1 className="display-4 text-capitalize"><span className="text-warning">A tech</span><span className="text-white font-weight-bold"> Website</span></h1>
                    <h2 className="font-weight-light font-italic text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <a href="#" className="btn btn-warning btn-lg px-4 m-3">Press Here</a>
                    <a href="#" className="btn btn-danger btn-lg px-4 m-3">Press Here</a>
                </div>
             </div>
         </div>
     </section>
     </React.Fragment>

       </div>

  
  )
}

const RizwanPage = () => {

  return (
    <React.Fragment>
    <section>
     <div className="container-fluid">
         <div className="row bg-dark justify-content-center align-items-center" style={divStyle}>
            <div className="col-sm-10 text-center">
                <h1 className="display-4 text-capitalize"><span className="text-warning">Contact us</span><span className="text-white font-weight-bold"></span></h1>
                <h2 className="font-weight-light font-italic text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <a href="#" className="btn btn-warning btn-lg px-4 m-3">Press Here</a>
                <a href="#" className="btn btn-danger btn-lg px-4 m-3">Press Here</a>
            </div>
         </div>
     </div>
 </section>
 </React.Fragment>
  )
}

const RituPage = () => {

  return (
    <React.Fragment>
    <section>
     <div className="container-fluid">
         <div className="row bg-success justify-content-center align-items-center" style={divStyle}>
            <div className="col-sm-10 text-center">
                <h1 className="display-4 text-capitalize"><span className="text-warning">About us</span><span className="text-white font-weight-bold"></span></h1>
                <h2 className="font-weight-light font-italic text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <a href="#" className="btn btn-warning btn-lg px-4 m-3">Press Here</a>
                <a href="#" className="btn btn-danger btn-lg px-4 m-3">Press Here</a>
            </div>
         </div>
     </div>
 </section>
 </React.Fragment>
  )
}
export default App;

