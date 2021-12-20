import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return(
      <div>Hi</div>
    );
  }

  getMorningGreeting() {
    return <div>Good Morning</div>
  }

  getEveningGreeting() {
    return <div>Good Evening</div>
  }

  showCompany(name, revenue) {
  }

  getClassName(temperature) {

  }

  render() {

    let date = new Date().getHours()

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {/* your code here */}
            <h1>Stuff: {this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {/* your code here */}
            {date > 12 ? this.getEveningGreeting() : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {/* your code here */}
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* your code here */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
