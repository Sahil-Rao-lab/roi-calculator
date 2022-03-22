import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './common/Button'
import Reactangle from './common/Rectangle';
import ToggleBtn from './common/ToggleBtn';
import cross from './images/cross.png';
import cake from './images/cake.png';
import down_arrow from './images/down_arrow.png';
import pencil from './images/pencil.png';
import check from './images/check.png';

function App() {

  const [hidden, setHidden] = useState(false);
  const [divClick, setDivClick] = useState(false)

  const toggleDetails = (e) => {
    let node = document.getElementById('show');
    if (!hidden) {
      e.target.innerText = "Hide details"
      node.style.display = "flex"
      setHidden(true)
    } else {
      e.target.innerText = "Show details"
      node.style.display = "none"
      setHidden(false)
    }
  }

  const handleInput = (e) => {
    let element = e.target;
    let icon = element.children[0];
    if (!divClick) {
      element.style.border = "1.5px solid #FDE100"
      icon.src = check
      setDivClick(true)
    } else {
      setDivClick(false)
      element.style.border = "1.5px solid #ECECEC"
      icon.src = pencil;
    }
  }

  return (
    <div className="container">
      <div className="main">
        {/* ITEM 1 START HERE  */}
        <div className="heading_cross_btns item1">
          <h1>Calculator</h1>
          <div className="item1_cross_btns">
            <img src={cross} alt="delete" />
            <div className="item1_btns">
              <img src={cake} id='cake' alt="c" />
              <span id='cake_text'>Cake</span>
              <ToggleBtn />
              <span>USD</span>
            </div>
          </div>
        </div>
        {/* ITEM 2 START HERE  */}
        <div className="balance_btns_rect item2">
          <Reactangle>2.10000 CAKE</Reactangle>
          <div className="item2_btns_text">
            <div className="item2_btns">
              <Button radius={'10px'} bg={'#FFF9AA'}>USE BALANCE</Button>
              <Button radius={'10px'}>$1000</Button>
              <Button radius={'10px'}>$100</Button>
            </div>
            <p id='item2_papra'>~$20.82</p>
          </div>
        </div>
        {/* ITEM 3 / TIMEFRAME START HERE */}
        <div className="item3 timeframe">
          <h3>Timeframe</h3>
          <div className="item3_btns">
            <Button padding={'.8rem 2.1rem'} bg={'#FCEB74'} border={'1px solid #FED700'}>1 Day</Button>
            <Button padding={'.8rem 2.1rem'} color={'#A2A2A2'} >7 Days</Button>
            <Button padding={'.8rem 2.1rem'} color={'#A2A2A2'} >30 Days</Button>
            <Button padding={'.8rem 2rem'} color={'#A2A2A2'} >1 Year</Button>
            <Button padding={'.8rem 2rem'} color={'#A2A2A2'} >5 Year</Button>
          </div>
        </div>
        {/* ITEM 4 APY START HERE */}
        <div className="item4 apy">
          <h3>Enble Accelerated APY</h3>
          <ToggleBtn width={'3.2rem'} height={'1.9rem'} bg={'#EAEAEA'} />
        </div>
        {/* ITEM 5 TIER START HERE */}
        <div className="item5 tier">
          <p id='tier_para1'>Select Tier</p>
          <div className="item5_btns">
            <Button padding={'.8rem 2.2rem'} color={'#A2A2A2'} >Tier 1</Button>
            <Button padding={'.8rem 2.2rem'} color={'#A2A2A2'} >Tier 2</Button>
            <Button padding={'.8rem 2.2rem'} color={'#A2A2A2'} >Tier 3</Button>
            <Button padding={'.8rem 2.2rem'} bg={'#FCEB74'} border={'1px solid #FED700'}>Tier 4</Button>
            <Button padding={'.8rem 2.2rem'} color={'#A2A2A2'} >Tier 5</Button>
          </div>
          <p id='tier_para2'>ROI at Current Rates</p>
        </div>
        {/* ITEM 6 START HERE */}
        <div className="item6 form_btns">
          <Reactangle mg={'1rem 0'} click={handleInput} id="checked_input"><img id='pencil' src={pencil} alt="edit" /> 100.0 USD</Reactangle>
          <p>~3 CAKE + 10 DON</p>
          <div className="item6_btns">
            <Button bg={'#000000'} color={'#fff'} border={'1px solid #000'} radius={'20px'} padding={'1rem 20%'}>Apply</Button>
            <Button bg={'#fff'} color={"#666666"} border={'1px solid #000'} padding={'1rem 20%'} radius={'20px'}>Cancel</Button>
          </div>
        </div>
        {/* SHOW DETAILS */}
        <div className="hide_show">
          <span onClick={toggleDetails}>Show details</span>
          <img src={down_arrow} alt="down" onClick={toggleDetails} />
        </div>
        {/* HIDDEN DATA */}
        <div className="hidden_data" id='show'>
          <div className="head">
            <h3>APY</h3>
            <span>63.34%</span>
          </div>
          <div className="list">
            <ul>
              <li>Calculated based on current rates</li>
              <li>All fugures are estimates provided for your convenience only,
                and by no means represent guaranted returns.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));