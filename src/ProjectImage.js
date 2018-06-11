import React, {Component} from 'react';

class ProjectImage extends Component {
 constructor(props){
     super(props)
     console.log(props)
     this.state = {
         like : 0
     }
 }

        likeEvent = ()  => {
           this.setState ({
                like : this.state.like + 1
            })
        }


    render(){
        return(
            <li onClick={this.likeEvent}>
                    <figure>
                        <img src={this.props.nData.img} />
                    </figure>
                   
                    <h3>{this.props.nData.name}</h3>
                    <p>{this.props.nData.description}</p>
                    <p>{this.state.like}</p>
                </li>


             
        )
    }
}

export default ProjectImage