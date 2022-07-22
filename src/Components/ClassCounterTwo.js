import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    componentDidMount()
    {
        document.title=`Clicked ${this.state.count} Times`
    }

    componentDidUpdate(prevProps,prevState)
    {
      if(prevState.count !== this.state.count)
      {
       
        console.log("Updating document title")
        document.title=`Clicked ${this.state.count} Times`
      }
       

    }
    
  render() {
    return (
      <div>
         <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>
          <button onClick={()=>this.setState({count:this.state.count+1})}>
            Clicked {this.state.count} Times
          </button>

      </div>
    )
  }
}

export default ClassCounterTwo
