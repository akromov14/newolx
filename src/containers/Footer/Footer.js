import "./Footer.css"
import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import FooterWrapperr from "./FooterWrapper";
import ThemeContext from "./../../theme-context";

let menu = [
    { to: "/mobileapps", title: "Мобильные приложения" },
    { to: "/features", title: "Помощь" },
    { to: "/features", title: "Платные услуги" },
    { to: "/features", title: "Бизнес на OLX" },
    { to: "/features", title: "Реклама на сайте" },
    { to: "/features", title: "Условия использования" },
    { to: "/features", title: "Политика конфиденциальности" }
]

const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <FooterWrapperr className={`footer text-dark ${theme} ` }>
            <div className="container py-5">
               
                <div class="row">
                    <div className="col-4">
                        <div>
                        {menu.map(value =>
                            <Link to={value.to} key={value.to} class='footera'>{value.title}</Link>)}
                        </div>
                </div>
                   
                </div>
            </div>
        </FooterWrapperr>
    )
}

export default Footer;