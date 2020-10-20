import React, {Component} from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
        }
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);

        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
            <PortfolioItem 
                key={item.id} 
                item={item}
                />
        // return <h2>{item}</h2>
            );
        });
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
    getPortfolioItems () {
        axios
          .get("https://gustavosalas.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
          });
      }

      componentDidMount() {
        this.getPortfolioItems();
      }

    render() {
        if(this.state.isLoading) {
            return <div>We are loading things up...one moment please.</div>
        }
        return (
            <div className="portfolio-items-wrapper">

                <button className = "btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>

                <button className = "btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>

                <button className = "btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div> 
        );
    }
}