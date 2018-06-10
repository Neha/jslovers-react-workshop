import React, {Component} from 'react'
import sampleimg from './images/bluebg.png'
import axios from 'axios'


var profileData ;

class Portfolio extends Component {
   constructor(props){
       super(props)
       this.state = {
           pName : "This is My project",
           counter : 0,
           flag : false,
           projectData : []
       }
   }

  componentDidMount = () => 
  {
      axios.get('http://localhost:3000/data.json').then((response) => {
        console.log(response);
        profileData = response.data;

        this.setState({
            profileData : profileData
        })
      })
  }

  increment = () =>{
      console.log('click me');
      if(this.state.flag == false) {
        this.setState({
            flag : true,
            counter :  this.state.counter + 1
          })
      }
      else{
        this.setState({
            flag : false,
            counter :  this.state.counter - 1
          })
      }
      
  }

   render(){
    return(
        <div className="portfolio">
         <h4>Portfolio</h4>
         <ul>
             { this.state.profileData && this.state.profileData.map((pData, i) => {
                return(
                    <li key={i}>
                    <figure>
                        <img src={pData.img} alt="" title="" />
                    </figure>
                    <h3>{pData.name}</h3>
                    <p>{pData.description}</p>
                </li>
            ) 
             } )
            }
             
         </ul>
         </div>
     )
   }
}

export default Portfolio