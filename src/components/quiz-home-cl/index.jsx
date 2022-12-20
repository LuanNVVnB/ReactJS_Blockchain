
import Narbar from "../quiz-navbar-cl/nav-bar";
import FooterClient from "../quiz-footer-cl/footer";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as CandidateActions from '../../actions/candidate-manager/candidateActions'
import Carousel from 'react-bootstrap/Carousel';
import carose2 from "../../assets/theme/img/carose2.jpg";
import carose3 from "../../assets/theme/img/carose3.jpg";
import carose4 from "../../assets/theme/img/carose4.jpg";
import {Link} from 'react-router-dom'
import './index.css';
import CardApp from "./CardApp";
// import Blog from"./Blog";
import Tab from "./Tab";
import CandidateList from "./CandidateList";
import Center from "./Center";

function HomeClient() {
   const candidate = useSelector(state => state.CandidateManagerReducer.candidateData);
    // Dispatch
    const dispatch = useDispatch()

    // Effect
    useEffect(() => {
        dispatch(CandidateActions.fnGetAllCandidates())
    }, [])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="full-screen" style={{width: '100vw'}}>
      
        <Narbar />
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={carose4}
              alt="First slide"
            />
            <Carousel.Caption>
              <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>The revolution is here.</h1>
                        <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><Link to='/voted-proposal' class="btn btn-light btn-lg action-button" type="button">Get Started</Link></div>
                    
                </div>
            </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={carose2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className='carousel-font'>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={carose3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='carousel-font'>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <CardApp/>
        <Center/>
      {/* <Intruction/> */}
        <CandidateList candidate={candidate && candidate}/>
        <Tab/>
        <FooterClient />

     
    </div>
  )
}

export default HomeClient