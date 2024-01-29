import React, { useEffect, useState} from 'react'

import './Card.css'

import axios from 'axios';
import StarRating from '../StarRating/StarRating';

const Card = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        const fetchCardDetails = async() => {
            try{
                const response = await axios.get('json/ReviewCardDetails.json');
                setReview(response.data);
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchCardDetails();
    },[])

  return (
    <div className="container-fluid"> 
        <div className="card-container d-flex">
                    {
                        review.map((review, index) => (
                            <div key={index} className="card">   
                                <div className="img-fluid px-4">
                                    <img 
                                        src={review.review.photo_url} 
                                        alt= {review.user.name} 
                                        className="card-img-top" 
                                    />  
                                </div>
                                <h4 className="reviewer-name">{review.user.name}</h4>
                                <p className="reviwer-mail">{review.user.email}</p>  
                                <p className="card-text text">{review.review.text}</p> 
                                <StarRating rating={review.review.star_rating}/>
                            </div>    
                        ))
                    }

        </div>
    </div>
   
  )
}
                   
                    
export default Card
