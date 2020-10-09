import React, {Component} from "react";
import portfolioItem from "./portfolio-item";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title: "Apple", category: "eCommerce" },
                {title: "Google", category: "Scheduling"},
                {title: "Mcdonalds", category: "Enterprise"},
                {title: "Subway", category: "eCommerce"}
            ]
        }
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);

        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} job={item.job}/>
        // return <h2>{item}</h2>
        })
    }
    handleFilter (filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }
    // handlePageTitleUpdate () { 
    //     this.setState({
    //         pageTitle: "Some Awesome new cool Title"
    //     })
    // }
    
    render() {
        if(this.state.isLoading) {
            return <div>We are loading things up...one moment please.</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}

                <hr/>

                {/* <button onClick= {this.handlePageTitleUpdate}>Change Title</button> */}
            </div>
        );
    }
}