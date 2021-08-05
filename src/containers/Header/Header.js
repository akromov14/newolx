import ThemeContext from "./../../theme-context";
import React, {useContext} from 'react'
import Image from './../../olx3.png';
import { Button } from 'reactstrap';
import './Header.css'
import HeaderWrapperr from "./HeaderWrapper";




const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);
    return (
       
        <HeaderWrapperr className={`${theme}`} >
            <div className="container py-3 ">
               <div className="nav1">
                    <img src={Image} alt="" className="logo logo2"/>
                    <div className="AkBarc">
                        <div className="MoyPro2">
                            <h3 className="pe-4 MoyPro"><i class="far fa-user"></i> Мой профил</h3>
                        </div>
                       <div className="akBarc2">
                            <div className="kunTun">
                                <button className="btn Padat">Падат абявление</button>  
                            </div>     
                            <div className="uzun">
                                <Button onClick={toggleTheme} color={theme} className="btn btn3">{theme == "dark" ? "Day" : "Night"}</Button>     
                            </div>    
                        </div>          
                    </div>
               </div>
            </div>      
        </HeaderWrapperr>  
    )
}

export default Header
