import React from "react";

class myComponent extends React.Component {
    
    state = {
        name: 'hin',
        age: 20,
        date: new Date()
    } 
    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick(),1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID); 
    }
    tick = () => {
        this.setState({
            date: new Date()
        })  
    }

        render() {
            return (
                <div>
                    <p> Wrtie your namr : </p>
                    <input type="text" value={this.state.name} onChange={(event) => this.onChangeName(event) } />
                    <p> your name is = : {this.state.name}</p>
                    <p> it is : {this.state.date.toLocaleTimeString()}</p>
                </div>
            )
        }
}
class child extends myComponent{
    constructor(props) {
    super(props);
        this.state = {

        }
        props.tick();

    }
}
export default myComponent;