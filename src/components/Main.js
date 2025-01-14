import styled from "styled-components";
import React, { useState } from "react";
import Korea from "../img/korea.jpeg";
import Vegas from "../img/vegas.jpeg";
import Greece from "../img/greece.jpeg";
import Borakay from "../img/borakay.jpeg";
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Event from "../pages/Event";
import { Link } from "react-router-dom";
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
 width: 100vw;
 height: 100vh;
 display: flex;
 background-color: #FEFBF6;

 .flight {
  color: #3330E4;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
    text-decoration: none;
 }
 .flight2 {
  color: #513252;
    font-weight: bold;
    font-size: 1.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    justify-content: center;
    position: relative;
    left: 10%;
 }

 nav {
  width: 20vw;
  height: 100vh;
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-top: 15px;
  flex-direction: column;
  position: fixed;
  border-right: 1px solid gray;
  background-color: #FEFBF6;

  @media (max-width: 1150px) {
      display: none;
  }
 }

 .minisection {
  background-color: royalblue;
  width: 80%;
  height: 20%;
  border: 3px solid black;
  margin-top: 15px;
  background-image: url("https://img.modetour.com/modetour/2021/main/thum/01_220721.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
 }

 .minisection2 {
  background-color: royalblue;
  width: 80%;
  height: 20%;
  border: 3px solid black;
  margin-top: 15px;
  background-image: url("https://img.modetour.com/modetour/2021/main/thum/04_220714.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  cursor: pointer;
  border-radius: 30px;
 }

 .star {
  color: #ffffff;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 10px;
    position: relative;
    left: 10%;
 }

 .star2 {
  color: #ffffff;
    font-weight: bold;
    font-size: 1.3rem;
 }

 .slide {
  padding-top: 20px;
  width: 80vw;
  height: 70vh;
  user-select: none;
  position: absolute;
  left: 20%;


   ul, li {
     list-style: none;
   }

   [name="slide"] {
     display: none;
   }

   .slidebox {
     max-width: 1000px;
     width: 100%;
     margin: 0 auto;
   }

   .slidebox img {
     max-width: 100%;
     border-radius: 40px;
   }
   .slidebox .slidelist {
     white-space: nowrap;
     font-size: 0;
     overflow: hidden;
   }

   .slidebox .slideitem {
     position: relative;
     display: inline-block;
     vertical-align: middle;
     width: 100%;
     transition: all 0.35s;
   }

   .slidebox .slideitem label {
     position: absolute;
     z-index: 1;
     top: 50%;
     transform: translateY(-50%);
     padding: 20px;
     border-radius: 50%;
     cursor: pointer;
   }

   label.left {
     left: 20px;
     background-color: #5F5F5F;
     background-image: url(./img/left.png);
     background-position: center center;
     background-size: cover;
     background-repeat: no-repeat;
   }

   label.right {
     right: 20px;
     background-color: #5F5F5F;
     background-image: url(../img/right.png);
     background-position: center center;
     background-size: cover;
     background-repeat: no-repeat;
   }

   [id="slide01"]:checked ~ .slidelist .slideitem {
     transform: translateX(0);
   }
   [id="slide02"]:checked ~ .slidelist .slideitem {
     transform: translateX(-100%);
   }
   [id="slide03"]:checked ~ .slidelist .slideitem {
     transform: translateX(-200%);
   }
   [id="slide04"]:checked ~ .slidelist .slideitem {
     transform: translateX(-300%);
    }
    
    .selectMenu {
      width: 80vw;
      background: #FEFBF6;
      color: gray;
      /* font-weight: bold; */
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      padding-top: 50px;
      justify-content: space-around;
    }

    .selectMenu span {
      border: 2px solid lightgray;
      border-radius: 20px;
      padding: 5px 15px;
      cursor: pointer;
    }

    .selectMenu span:hover {
      background: #F6F6F6;
      color: #29D493;
    }

  }
  `;


// 이미지 슬라이드 크기 1100px X 480px

const Main = () => {
  
  const [change, setChange] = useState(1);

  const handleButtonClick = () => {
    setChange(1)
  }

  const handleButtonClick2= () => {
    setChange(2)
  }

  const handleButtonClick3= () => {
    setChange(3)
  }
  
  return (
    <>
    
    <Section>

          <nav>
              <div className="minisection">
                <Link to="/Event" style={{ textDecoration: "none"}}>
                <div className="flight">초특가 항공권</div>
                <div className="flight2">대한민국 최저가</div>
                </Link>
              </div>
              <div className="minisection2">
              <Link to="/Event" style={{ textDecoration: "none"}}>
                <div className="star">별보러 몽골</div>
                <div className="star2">최대 10만원 즉시할인</div>
              </Link>
              </div>
          </nav>


          <div className="slide">
              <div className="slidebox">
                <input type="radio" name="slide" id="slide01" />
                <input type="radio" name="slide" id="slide02" />
                <input type="radio" name="slide" id="slide03" />
                <input type="radio" name="slide" id="slide04" />
                <ul className="slidelist">
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide04" className="left"></label>
                        <label htmlFor="slide02" className="right"></label>
                        <a><img src={Korea} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide01" className="left"></label>
                        <label htmlFor="slide03" className="right"></label>
                        <a><img src={Vegas} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide02" className="left"></label>
                        <label htmlFor="slide04" className="right"></label>
                        <a><img src={Greece} /></a>
                      </div>
                  </li>
                  <li className="slideitem">
                      <div>
                        <label htmlFor="slide03" className="left"></label>
                        <label htmlFor="slide01" className="right"></label>
                        <a><img src={Borakay} /></a>
                      </div>
                  </li>
                </ul>
              </div>

              <div className="selectMenu">
              <span onClick={handleButtonClick}>오늘의 BEST 여행지</span>
              <span onClick={handleButtonClick2}>항공사가 추천하는 여행지</span>
              <span onClick={handleButtonClick3}>얼리버드 할인 특가</span>
              </div>
              {change === 1 ? <TabFirst /> : undefined}
              {change === 2 ? <TabTwo /> : undefined}
              {change === 3 ? <TabThree /> : undefined}

              
          </div>

              
      <Footer />
    </Section>
    
    </>
  )
}

export default Main;

const Wrapper = styled.div`


  .tabs {
    height: 40vh;
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 280px;
    height: 250px;
    padding-top: 10px;
    cursor: pointer;
  }


  .word {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
  }

  .word:hover {
    cursor: pointer;
    color: green;
  }

`;


const TabFirst = () => {
  return (
    <>
    <Wrapper>

      <div className="tabs">

      <div className="tabchildren">
      <Link to="/Cebu" style={{textDecoration: "none"}}>
      <img className="one" src="https://img.modetour.com/eagle/photoimg/11093/bfile/636977501233548972.JPG" />
      <span className="word">세부 4박 5일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/Laos" style={{textDecoration: "none"}}>  
      <img className="two" src="https://img.modetour.com/eagle/photoimg/46312/Bfile/636529164558136991.png" />
      <span className="word">라오스 5박 6일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/Singapore" style={{ textDecoration: "none"}}>
      <img className="three" src="https://img.modetour.com/eagle/photoimg/45599/bfile/637176301868413310.png" />
      <span className="word">싱가포르 5박 6일</span>
      </Link>
      </div>

      </div>

    </Wrapper>

    </>
  )
}


const TabTwo = () => {
  return (
    <>
    <Wrapper>

      <div className="tabs">
      <div className="tabchildren">
      <Link to="/KotaKinabalu" style={{ textDecoration: "none"}}>
      <img className="one" src="https://img.modetour.com/eagle/photoimg/26090/Bfile/The%20Magellan%20Sutera%20(Resort)%202a.jpg" />
      <span className="word">코타키나발루 3박 5일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/EastEurope" style={{ textDecoration: "none"}}>
      <img className="two" src="https://img.modetour.com/eagle/photoimg/23273/Bfile/635737695951882259.jpg" />
      <span className="word">동유럽 3국 9일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/Australia" style={{ textDecoration: "none"}}>
      <img className="three" src="https://img.modetour.com/eagle/photoimg/61864/bfile/636616499875933305.png" />
      <span className="word">호주 4박 5일</span>
      </Link>
      </div>
      </div>


    </Wrapper>

    </>
  )
}


const TabThree = () => {
  return (
    <>
    <Wrapper>

      <div className="tabs">
      <div className="tabchildren">
      <Link to="/LasVegas" style={{ textDecoration: "none"}}>
      <img className="one" src="https://img.modetour.com/eagle/photoimg/47065/bfile/635845591029588663.png" />
      <span className="word">미서부 10일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/Spain" style={{ textDecoration: "none"}}>
      <img className="two" src="https://img.modetour.com/eagle/photoimg/11432/Bfile/636506698134733051.png" />
      <span className="word">스페인 9일</span>
      </Link>
      </div>

      <div className="tabchildren">
      <Link to="/Mongolia" style={{ textDecoration: "none"}}>
      <img className="three" src="https://img.modetour.com/eagle/photoimg/68416/Bfile/637885533237833819.JPG" />
      <span className="word">몽골 6일</span>
      </Link>
      </div>
      </div>


    </Wrapper>

    </>
  )
}