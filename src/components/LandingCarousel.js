/**
 * Created by Jeremy on 22/04/2016.
 */

 /*Latest Edit made by Dylan on 17/05/2016.*/

import React from 'react';
import Slider from 'react-slick';
import TextBox from '../components/TextBox.js';

class LandingCarousel extends React.Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            fade:true,
            autoplay:true,
            draggable:false

            
        };

return (

  <div id="slider">
{/***LANDING PAGE CAROUSEL***/}
{/***UPDATE: IMAGES NEED TO BE SOURCED FROM CLOUDINARY***/}               
          <Slider {...settings}>
            <img src='http://res.cloudinary.com/hdxsexu67/image/upload/q_80/v1464108177/2_gqnabc.jpg' />
            <img src='http://res.cloudinary.com/hdxsexu67/image/upload/q_80/v1464108177/5_yo3rh0.jpg' />
            <img src='http://res.cloudinary.com/hdxsexu67/image/upload/q_80/v1464108177/3_a8aqca.jpg' />
            <img src='http://res.cloudinary.com/hdxsexu67/image/upload/q_80/v1464108177/4_lfojxh.jpg' />
            <img src='http://res.cloudinary.com/hdxsexu67/image/upload/q_80/v1464108177/1_zj8yye.jpg' />
          </Slider>


{/***THREE DESCRIPTION BOXES ON LANDING PAGE***/}
      <div id="landingBoxes">

        <TextBox link="photos"
        title="GET INSPIRED" 
        text="Kickstart your way to a sustainable and energy efficient home with Rise’s Interactive Lookbook." 
        iconClass="fa fa-lightbulb-o fa-2x descriptionBoxIcon" 
        id="landingIconBulb"/>

        <TextBox link="rebates"
        title="START SAVING"
        text="It’s way easier than you think. We help you build beautiful while helping you save money."
        iconClass="fa fa-usd fa-2x descriptionBoxIcon"
        id="landingIconDollar"/>

        <TextBox link="articles"
        title="EXPERT INSIGHT"
        text="Throw out the greenwashing, our team is here to help! Join the Community today!"
        iconClass="fa fa-users fa-2x descriptionBoxIcon"
        id="landingIconUsers"/>

      </div>

  </div>

        );
    }
}

export default LandingCarousel;