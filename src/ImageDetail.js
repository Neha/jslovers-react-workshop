import React, {Component} from 'react'

class projectDetail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
            <figure>
                <img src="" alt="" title="" />
            </figure>
            <h4>Project Heading</h4>
            <p>Project Description</p>

            <h5>Tech Used</h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>

            <span>Like ME</span>
            <span>Rate it</span>
            </React.Fragment>
        )
    }
}

export default projectDetail