import React, {Component} from 'react'
import ProjectImage from './ProjectImage'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      axios.get('/data.json').then((response) => {
        console.log(response);
        profileData = response.data;

        this.setState({
            profileDataAll : profileData,
            profileData : profileData.slice(0, 2)
        })
      })
  }

  increment = () =>{
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

  loadMore = () => {
    this.setState({
        profileData : this.state.profileData
     })
  }

   render(){
    return(
        <div className="portfolio">
         <h4>Portfolio</h4>
         <ul>
             { this.state.profileData && this.state.profileData.map((pData,i) => {
                  return(
                        <ProjectImage nData = {pData} key={i}/>
                    ) 
                
             } )
            }
             
         </ul>
         <button onClick={() => { 
             this.setState({
                profileData : this.state.profileDataAll
             })
         }}> Click me</button>
        
         </div>
     )
   }
}

export default Portfolio