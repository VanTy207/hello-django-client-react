import React, { Component } from 'react';

class HeaderAppComponent extends Component {
    state = {  
        text: 'nguyen van ty'
    } 

    componentDidMount(){
        const url = 'http://127.0.0.1:8000/demo-json'
        // fetch(url).then(response => response.json()).then(data => console.log(data));
            fetch(url).then(data=>console.log(data.json()));
    }

    render() { 
        var tempText = this.state.text;
        return (
            <div>
                Header Component jsx: {tempText}
            </div>
        );
    }
}
 
export default HeaderAppComponent;