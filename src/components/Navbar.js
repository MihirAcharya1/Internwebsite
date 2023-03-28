import { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../img/webLogo.png';
import  {MenuData} from './MenuData.js';
import './NavbarStyles.css';

class Navbar extends Component  {
    state = {clicked:false};
    handleClick =()=>{
        this.setState({clicked: ! this.state.clicked})
    };
    render(){
        return(
            <div className="NavBarContainer">
            <nav className="NavbarItems">
                <img src={logo} className="Navlogo" alt="GOWASHE"></img>
                <div className="menuItems" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "NavMenu active" : "NavMenu"} style={{width:"100%"}}>
                    {MenuData.map((item,index)=>{
                        return(
                            <li key={index} style={{listStyle:"none",textDecoration:"none"}}>
                            <Link className={item.cName} to={item.url}>{item.title}</Link>
                        </li>
                        )
                    })}
                   

                </ul>
            </nav>
            
            </div>
        )
    }
}
export default Navbar;