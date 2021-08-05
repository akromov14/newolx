import "./Home.css"
import React from 'react'
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

const categories = [
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        backColor: "rgb(255, 206, 50)",
        title: "Детский мир",
        to: "detskiy-mir"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        backColor: "rgb(35, 229, 219)",
        title: "Транспорт",
        to: "transport"
    },
    {
        icon: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        backColor: "#ff5636 ",
        title: "Работа",
        to: "rabota"
    }
   
]

const Home = () => {
    return (
        <Container>
            <div className="container">

                <h1 className="text-center py-3">Главные категории</h1>
                {categories.map(v =>
                    <Link to={v.to} key={v.to} className="category">
                        <div className="icon" style={{ backgroundColor: v.backColor }}>
                            <img src={v.icon} alt=""className="img2" />
                        </div>
                        {v.title}
                    </Link>)
                }
            </div>
        </Container>
    )
}

export default Home;