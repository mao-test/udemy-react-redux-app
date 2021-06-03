import React, { Component } from "react";
const App = () => (<Counter></Counter>)

class Counter extends Component {
    // Counter 初期化処理 
    constructor(props){
      super(props)
      this.state = {count: 0}
    }

    handlePlusButton = () => {
        //stateの状態を変更するメソッドsetState
        //stateを直接いじってはダメ。setStateを使うことでrender()を実行させて再描画する。
        this.setState({count: this.state.count +1})
    }

    handleMinusButton = () => {
        this.setState({count: this.state.count -1})
    }

    render(){
        return( 
        <React.Fragment>
          <div>count: {this.state.count}</div>
          <button onClick={this.handlePlusButton}>+1</button>
          <button onClick={this.handleMinusButton}>-1</button>
        </React.Fragment>
        )
    }
}


export default App;
