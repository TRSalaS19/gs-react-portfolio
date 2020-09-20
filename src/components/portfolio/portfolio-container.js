import React, {Component} from "react";
import portfolioItem from "./portfolio-item";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered");
    }

    portfolioItems() {
        const data = ["Apple", "Google", "Mcdonalds"];

        return data.map(item => {
            return <PortfolioItem title={item}/>
        // return <h2>{item}</h2>
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>
                
                {this.portfolioItems()}
            </div>
        );
    }
}