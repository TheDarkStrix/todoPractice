import styles from "./index.module.css";
import { Component } from "react";

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      input1: null,
      input2: null,
      result: 0,
    };
    //this.akash = this.akash.bind(this);
    this.isChange = this.isChange.bind(this);
    this.calculation = this.calculation.bind(this);
    this.add = this.add.bind(this);
    //this.isChange1 = this.isChange1.bind(this);
  }

  isChange(event) {
    this.setState({
      input1: event.target.value, //11
    });
    console.log(event.target.value);
  }

  add() {
    this.setState({
      input1: this.state.input1 + "+", //11+
    });
  }

  calculation(operator) {
    if (operator != undefined) {
      switch (operator) {
        case "+":
          var a = this.state.input1;
          var b = this.state.input2;
          var c = parseInt(a) + parseInt(b);
          this.setState({
            result: c,
          });
          break;
        case "-":
          var a = this.state.input1;
          var b = this.state.input2;
          var c = parseInt(a) - parseInt(b);
          this.setState({
            result: c,
          });
          break;
        case "*":
          var a = this.state.input1;
          var b = this.state.input2;
          var c = parseInt(a) * parseInt(b);
          this.setState({
            result: c,
          });
          break;
        case "/":
          var a = this.state.input1;
          var b = this.state.input2;
          var c = parseInt(a) / parseInt(b);
          this.setState({
            result: c,
          });
          break;
        default:
          this.state({
            result: "INVALID INPUT",
          });
          break;
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control"
              name="input1"
              placeholder="Input 1"
              value={this.state.input1}
              onChange={this.isChange}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              name="input2"
              placeholder="Input 2"
              onChange={this.isChange}
            />
          </div>
        </div>
        <br />
        <button className="btn btn-primary" onClick={this.add}>
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.calculation("-")}
        >
          -
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.calculation("*")}
        >
          *
        </button>
        <button
          className="btn btn-primary"
          onClick={() => this.calculation("/")}
        >
          /
        </button>
        {/* Who wins ? : {this.state.input} */}

        {this.state.result != 0 ? <div>{this.state.result}</div> : ""}
      </div>
    );
  }
}
