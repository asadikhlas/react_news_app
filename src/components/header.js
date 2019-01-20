import React,{Component} from 'react';
import '../css/styles.css'
 
 


    // state = {
    //     // active: 'active',
    //     keywords:''
    // }
    // inputchangeHandler(event){
    //     // const value = event.target.value === '' ? 'acive' : 'non=active'
    //     // console.log(event.target.value)
    //     this.setState({
    //         keywords: event.target.value
    //     });
    // }
  
        // const style = {
        //     background: 'red'
        // }

        // if(this.state.keywords !== ''){
        //     style.background = 'blue'

        // }else{
        //     style.background = 'red'
        // }
        const Header = (props) => {
    return (
    <header >
         <div className="logo">logo</div>
         <input 
         type="text"
         onChange={props.keywords}
         />
         {/* <div>{this.state.title}</div>
         <div>{this.state.keywords}</div> */}
    </header>
        )
    }

export default Header;  