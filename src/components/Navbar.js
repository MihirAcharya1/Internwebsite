import { Component} from "react";
import { Link } from "react-router-dom";
import logo from '../img/webLogo.png';
import  {MenuData} from './MenuData.js';
import './NavbarStyles.css';
// import {auth} from '../firebase'
import { getDocs} from "firebase/firestore"; 

import  { UserCollectionRef} from '../SignInSignUp'

// const [UserNumber,setUserNumber] = useState("Sign In");
class Navbar extends Component  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       users: [],
    //     };
    //   }
    
    //   async componentDidMount() {
    //     const data = await getDocs(UserCollectionRef);
    //     this.setState({
    //       users: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    //     });
    //   }

   
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
                      {/* {this.state.users.map((user) =>(
                    <li style={{listStyle:"none",textDecoration:"none"}}> 
                         <Link className="SignUpbtn" to="/SignInSignUp" key={user.id}>{user.Contact_No}</Link> 
                        <Link className="SignUpbtn" to="/SignInSignUp">Sign In </Link>
                     </li>))}  */}
                        <Link className="SignUpbtn" to="/SignInSignUp">Sign In </Link>

                   

                </ul>
            </nav>
            
            </div>
        )
    }
}
export default Navbar;