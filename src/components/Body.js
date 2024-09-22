import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =() =>{
 
const [listOfRestaurant,setListOfRestaurant] =useState(resList);
 
 return (
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={ ()=> { 
                 const filteredList=listOfRestaurant.filter( (res)=> res.data.avgRating>4.0)    
                 setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                    listOfRestaurant.map((restaurant)=> { 
                        return (
                            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        )
                    })
               }
            </div>
        </div>
    )
}

export default Body;
