import React from "react";

export class ShowDate extends React.Component {
    state = {
        date: ""

    };

    componentDidMount(){
        this.getDate();
    }

    getDate = () => {
        const date =  new Date();
        this.setState({ date });
    }

    render(){
        return(
            <div className="date">
            <p>ddd {this.state.date} </p>
            </div>
        );
    }
}

export default ShowDate;