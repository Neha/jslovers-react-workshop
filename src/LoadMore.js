import React, { Component } from 'react'

class LoadMore extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <button onClick={this.loadMore}>LoadMore</button>
        )
    }

    loadMore = () => {
        console.log(this.props);
    }
}

export default LoadMore