import React from 'react';
import ImgRestaurant from '../../assets/img/restaurants/tasty.png'

class Restaurant extends React.Component {

    render(){
        return (          
            <div class="col-sm-6 col-xs-12">
                  <a href="/restaurant">
                    <div class="place-info-box">
                      <span class="place-info-box-icon"><img src={ImgRestaurant} alt="Tasty"/></span>

                      <div class="place-info-box-content">
                        <span class="place-info-box-text">Tasty Treats</span>
                        <span class="place-info-box-star"><i class="fa fa-star"></i> 4.5</span>
                        <span class="place-info-box-detail">Bakery</span>
                        <span class="place-info-box-detail">40-65m</span>
                      </div>
                    </div>
                  </a>               
            </div>               
        );
    }
      
}

export default Restaurant