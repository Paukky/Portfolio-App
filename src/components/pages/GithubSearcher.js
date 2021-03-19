import React from 'react'
import GithubSearchers from '../layout/GithubSearcher.png'
import GithubSearchers2 from '../layout/GithubSearcher2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContactKeeper = () =>  {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        }
        return (      
            <React.Fragment>
                <div className="container p-2 ">
                    <Slider>
                        <div>
                             <img src={GithubSearchers} width="100%"/>
                        </div>
                        
                        <div>
                             <img src={GithubSearchers2} width="100%"/>
                        </div>     

                    </Slider> 

                    <p className ="text-center text-primary p-2">
                    I integrated Github's REST API to make my first front-end application. The scalable and easy to use application taught me the basic of React Framework and Github API's ability to call for data.
                    <br/>
                    You can view this project here
                    <br/>
                    <a href="https://githubfindersearcher.netlify.app/"> <b>Github Finder</b></a>
                    </p>
                   
                </div>
            </React.Fragment>
        )
    }


export default ContactKeeper
