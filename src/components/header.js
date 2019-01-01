import React,{Component} from 'react';
import '../css/styles.css'
 
 
class Header extends Component{ 

    state = {
        title:'The keywords are:',
        keywords:''
    }
    inputchangeHandler(event){
        // console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        });
    }
    render (){ 
    return (
    <header>
         <div className="logo">logo</div>
         <input 
         type="text"
         onChange={(e) => this.inputchangeHandler(e)}
         />
         <div>{this.state.title}</div>
         <div>{this.state.keywords}</div>
    </header>
        )
    }
} 

export default Header;  