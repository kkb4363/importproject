import React from 'react';
import './App.css';
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function App(){
      return(
         <>
         <div className="executive-contents">
        <div className="title"><h2>임원진 소개</h2><Header/> </div>
        </div>

        <div className='가로배치'>
          <ZIN></ZIN>
          
          
        </div>

         
         </>
        
        
      )
}


//fontAwesomeicon이 적용이 안된다.
function Header(){
  return(

    <nav>
      
      <div className="menu-button">
      <FontAwesomeIcon icon={faBars} onclick={openMenu} />
      <FontAwesomeIcon icon="fa-solid fa-xmark" onclick={closeMenu} />
      </div>
      <div className="logo">
        <h1 style={{cursor: 'pointer'}} onclick="location.href='<%= process.env.SERVER_HOST %>'">IMPORT</h1>
      </div>

      <div className="topMenu">
        <ul className="topMenu-ul">
         
          <li><a onclick={OpenSmallMenu(1)}>동아리 <span>▼</span></a>
            <ul>
              <li><a href="<%= process.env.SERVER_HOST %>/executive">임원진</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/indroduce">동아리 소개</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/rule">동아리 규칙</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/meeting">회의록</a></li>
            </ul>
          </li>

          <li><a href="<%= process.env.SERVER_HOST %>/project">프로젝트</a></li>
          
          <li><a onclick="OpenSmallMenu(2)">Education <span>▼</span></a>
            <ul id="SmallMenu2">
              <li><a href="<%= process.env.SERVER_HOST %>/web">Web</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/mobile">Mobile</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/dataAnalysis">Data Analysis</a></li>
              <li><a href="<%= process.env.SERVER_HOST %>/ai">AI</a></li>
            </ul>
          </li>
         
          <li><a href="<%= process.env.SERVER_HOST %>/question">질문 게시판</a></li>
       
        </ul>
      </div>

    </nav>
)
}
  


function ZIN(){
  return(
    <div className="executive-contents">
      <div className="executive-cards-container">
        <div className="executive-cards">
          <div className="executive-card-component">

        <a>
          <img src="../images/m.png" alt="" className="executive-thumbnail" />
          <div className="executive-box">
            <p className="executive-name">진민</p>
          </div>
        </a>
        
        <div className="executive-github"><a href="https://github.com/Import-hanbat"></a>
        <FontAwesomeIcon icon="fab fa-github" style={{color: 'white', fontSize: '30px'}}/>
        </div>
        <div style={{float: 'none'}}>
        </div>
        <div className="position">
          <p>회장</p>
        </div>
        <div className="introduce">
          <p>안녕하세요. 도전을 좋아하는 개발자입니다</p>
        </div>
        <ul className="skill">
          <li className="skill-list">NodeJS</li>
          <li className="skill-list">Android</li>
          <li className="skill-list">JQuery</li>
          <li className="skill-list">Pytorch</li>
        </ul>
      </div>
      <div>
      <div className="executive-card-component">
            <a href className="executive-views">
              <div className="img-size">
                <img src="../images/j.png" alt="" className="executive-thumbnail" />
              </div>
              <div className="executive-box">
                <p className="executive-name">김종혁</p> 
              </div>
            </a><div className="executive-github"><a href className="executive-views" /><a href="https://github.com/Import-hanbat" />
              <i style={{color: 'white', fontSize: '30px'}} className="fab fa-github">
              </i>
            </div>
            <div className="position">
              <p>부회장</p>
            </div>
            <div className="introduce">
              <p>안녕하세요.</p>
            </div>
            <ul className="skill">
              <li className="skill-list">Spring</li>
              <li className="skill-list">NodeJS</li>
              <li className="skill-list">TensorFlow</li>
            </ul>
          </div>
    </div>

    <div>
      <div className="executive-card-component">
            <a href className="executive-views">
              <div className="img-size">
                <img src="../images/l.png" alt="" className="executive-thumbnail" />
              </div>
              <div className="executive-box">   
                <p className="executive-name">이유진</p>
              </div> 
            </a><div className="executive-github"><a href className="executive-views" /><a href="https://github.com/Import-hanbat" />
              <i style={{color: 'white', fontSize: '30px'}} className="fab fa-github">
              </i>
            </div>
            <div className="position">
              <p>총무</p>
            </div>
            <div className="introduce">
              <p>안녕하세요.</p>
            </div>
            <ul className="skill">
              <li className="skill-list">HTML</li>
              <li className="skill-list">CSS</li>
              <li className="skill-list">JS</li>
            </ul>
          </div>
    </div>
    <div>
      <div className="executive-card-component">
            <a href className="executive-views">
              <div className="img-size">
                <img src="../images/s.png" alt="" className="executive-thumbnail" />
              </div>
              <div className="executive-box">
                <p className="executive-name">조수영</p>  
              </div>
            </a><div className="executive-github"><a href className="executive-views" /><a href="https://github.com/Import-hanbat" />
              <i style={{color: 'white', fontSize: '30px'}} className="fab fa-github">
              </i>
            </div>
            <div className="position">
              <p>Back-End 담당</p>
            </div>
            <div className="introduce">
              <p>안녕하세요.</p>
            </div>
            <ul className="skill">
              <li className="skill-list">HTML</li>
              <li className="skill-list">CSS</li>
              <li className="skill-list">JS</li>
            </ul>
          </div>
    </div>

    <div>
      <div className="executive-card-component">
            <a href className="executive-views">
              <div className="img-size">
                <img src="../images/c.png" alt="" className="executive-thumbnail" />
              </div>
              <div className="executive-box">
                <p className="executive-name">최유진</p>  
              </div>
            </a><div className="executive-github"><a href className="executive-views" /><a href="https://github.com/Import-hanbat" />
              <i style={{color: 'white', fontSize: '30px'}} className="fab fa-github">
              </i>
            </div>
            <div className="position">
              <p>Front-End 담당</p>
            </div>
            <div className="introduce">
              <p>안녕하세요.</p>
            </div>
            <ul className="skill">
              <li className="skill-list">HTML</li>
              <li className="skill-list">CSS</li>
              <li className="skill-list">JS</li>
            </ul>
          </div>
    </div>



    </div>
    </div>
    </div>
  )
}


function FOOTER(){
  return(
    <div>
      <div className="footer">
      <div className="sns">
        <ul className="snss">
          <li><a href="https://github.com/Import-hanbat"><i style={{color: 'white'}} className="fab fa-github" /></a></li>
          <li><a href="https://www.instagram.com/import_hanbat/"><i className="fab fa-instagram" /></a></li>
          <li><a href="https://www.facebook.com/Import-110047964872044"><i className="fab fa-facebook" /></a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright 2022. Import all right reserved.</p>
      </div>
      <div className="address">
        <p>대전광역시 유성구 동서대로 125</p>
      </div>
    </div>
    </div>
  )
}

function openMenu(){
  $('.topMenu').css('display','block');
  $('.close-menu').css('display','block');
  $('.open-menu').css('display','none');
  $('.topMenu-ul').css('background','black');
  $('.middle-apply').css('opacity','0.5');
  $('.footer').css('opacity','0.5');
}
function closeMenu(){
  $('.topMenu').css('display','none');
  $('.topMenu-ul').css('background','none');
  $('.close-menu').css('display','none');
  $('.open-menu').css('display','block');
  $('.middle-apply').css('opacity','1');
  $('.footer').css('opacity','1');
  
}
function OpenSmallMenu(num){
  var result = '#SmallMenu'+num;
  $(result).css('dislay','block');
}



export default App3;
