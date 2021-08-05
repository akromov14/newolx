
import React, { useContext } from 'react'
import Container from "../../containers/Container";
import datas from "../../data";
import { useParams } from "react-router-dom";
import ThemeContext from "./../../theme-context";
import CategoryWrapper from './CategoryWrapper';
import './Category.css'

console.log(datas);

const Category = () => {
    const { category } = useParams();
    const obj = datas.filter(v => v.category == category)[0];
    const data = obj.data;

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(theme, toggleTheme);

    return (
        <Container>
            <CategoryWrapper  className={`shadow py-4 ${theme}`}>
                <div className="container">
                    <h1 className="text-center">{ category }</h1>
                    <div className="row">
                        {data.map(v =>
                            <div className="col-sm-12  col-md-12 mt-4">
                                <div className="shadow p-2 d-flex product">
                                   <div className="biznesimg">
                                        <img src={v.img}  alt="" className="biznesimg"/>
                                   </div>
                                    <div className="text1">
                                        <div className="d-flex">
                                            <div className="title1">
                                                <p>{v.title}</p>
                                            </div>
                                            <div className="price1">
                                                <span>{v.price}</span> <br />   
                                            </div>
                                        </div>
                                        <div className="location">
                                            <span>{v.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </CategoryWrapper>
        </Container>

    )
}

export default Category;