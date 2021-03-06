import React from 'react';

import RestaurantItem from './RestaurantItem';
import { FOOD_API } from '../../api/Api'

class Restaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          restaurants: []
        };
    }

    componentDidMount() {
        this.getRestaurants();
    }

    getRestaurants(){
        fetch(`${FOOD_API}/restaurants`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                restaurants: result
                          
              });
            },
            (error) => {
              this.setState({
                isLoaded: false,
                error
              });
            }
        )
    }

    renderRestaurants() {
        let result = []
        this.state.restaurants.map((restaurant) => {
            result.push(<RestaurantItem
                            key={restaurant.id}
                            id={restaurant.id}
                            category={restaurant.category} 
                            name={restaurant.name} 
                            deliveryEstimate={restaurant.deliveryEstimate} 
                            rating={restaurant.rating} 
                            image={restaurant.imagePath}
                            about={restaurant.about}
                            hours={restaurant.hours}>
                        </RestaurantItem>)
        })

        return result
    }
    
    render(){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }else if (!isLoaded) {
            return <div>Loading...</div>;
        } else{
            return (
            <div className="container">          
                <section className="content-header">
                    <h1>
                        Todos os Restaurantes
                    </h1>
                </section>
                
                <section className="content">
                    <div className="row">
                        {this.renderRestaurants()}
                    </div>
                </section>
            </div>                        
            );  
        }
    }  
}


export default Restaurants