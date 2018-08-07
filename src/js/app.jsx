import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: "15"
    };
  }

  update(event) {
    this.setState({ 
      [event.target.name]: event.target.value
    });
  }

  calculate(data, event) {
    event.preventDefault();
    let balance = data.balance;
    let rate = data.rate / 1200;
    let term = parseInt(data.term) * 12;
    let result = "$" + (balance * ((rate * (1 + rate) ** term)/(((1 + rate) ** term) -1))).toFixed(2) + " is your payment.";
    
    this.setState({
      result: result
    });
  }

  render() {
    return (
      <div className='container'>
        <form className="form-horizontal">
          
          {/* H3 */}
          <div className="form-group">
            <div className="col-md-offset-2 col-md-8">
              <h3>Mortgage Calculator</h3>
            </div>
          </div>  
          
          {/* Loan Balance */}
          <div className="form-group">
            <label className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-8">
              <input className="form-control" name="balance" type="number" onChange={(event) => this.update(event)}/>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="form-group">
            <label className="col-md-2 control-label">Interest Rate (%)</label>
            <div className="col-md-8">
              <input className="form-control" name="rate" type="number" step="0.01" onChange={(event) => this.update(event)}/>
            </div>
          </div>

          {/* Loan Term */}
          <div className="form-group">
            <label className="col-md-2 control-label">Loan Term (years)</label>
            <div className="col-md-8">
              <select className="form-control" name="term" value={this.state.term} onChange={(event) => this.update(event)}>
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="form-group">
            <div className="col-md-offset-2 col-md-4">
              <button className="btn btn-primary" name="submit" onClick={(event) => this.calculate(this.state, event)}>Calculate</button>
            </div>
          </div>

          {/* Output */}
          <div className="col-md-offset-2">
            <div name="output" id="output">{this.state.result}</div>
          </div>

        </form>
      </div>
    );
  }
} // End App
