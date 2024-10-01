//import React from 'react'
import "./../App.css";

//import Home from './Home';

function Products() {
  return (
    <>
      <div className="wholebox">
        <div className="firstbox">
          <img src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&h=220&w=220"></img>
          <p>
            <b>Limited Time Offer: Elevate Your Fragrance Game!</b>
          </p>
          <p>
            Unlock the essence of luxury with our exquisite perfumes, now
            available at an exclusive rate of<b> $49.99 </b>(originally{" "}
            <b>$69.99</b>). Enjoy a 30% discount during this limited-time sale!
          </p>
        </div>
        <div className="secondbox">
          <img
            src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&h=220&w=220
"
          ></img>
          <p>
            <b>Limited Time Offer: Elevate Your Fragrance Game!</b>
          </p>
          <p>
            Indulge in the essence of luxury with our exceptional perfumes, now
            available for just <b>$49.99</b> (originally <b>$69.99</b>). Do not
            miss out on this limited-time offer featuring a 30% discount!
          </p>
        </div>
        <div className="thirdbox">
          <img src="https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&h=220&w=220"></img>
          <p>
            <b>Limited Time Offer: Elevate Your Fragrance Game!</b>
          </p>
          <p>
            Discover the essence of elegance with our luxurious perfumes, now
            offered at a special price of <b>$49.99</b> (previously
            <b>$69.99</b>). 30% savings during this limited-time offer!
          </p>
        </div>
      </div>
    </>
  );
}

export default Products;
