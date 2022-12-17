import './main.css';
import { Component } from 'react';
export default class Main extends Component{
  constructor(props){
    super(props)
    this.state = {scale:'c',temp:0}
  }
  handleCelsius=(e)=>{
    this.setState({scale:'c',temp:e.target.value})
  }
  
  
  handleFahrenheit=(e)=>{
    this.setState({scale:'f',temp:e.target.value})
  }
  handleKelvin=(e)=>{
    this.setState({scale:'k',temp:e.target.value})
  }
  handleCentigrade=(e)=>{
    this.setState({scale:'C',temp:e.target.value})
  }
  
 render(){
  const temp = this.state.temp
  const scale = this.state.scale
  const celsius = scale ==='f'?parseFloat((Number(temp)- 32)*5/9).toFixed(2) : scale==='k'?(Number(temp)-273.15):scale==='C'?Number(temp):scale==='r'?((Number(temp)*1.8)+491.67):(temp);
  const fahrenheit = scale ==='c'?parseFloat(Number(temp)*9/5 + 32) : scale==='k'?((Number(temp)+32)+ 273.15):scale==='C'?parseFloat(Number(temp)*9/5 + 32):scale==='r'?Number(temp)+459.67:(Number(temp));
  const kelvin = scale === 'c'?(Number(temp)+273.15): scale==='f'? parseFloat(((Number(temp) - 273.15)*9/5) + 32).toFixed(2):scale==='C'?(Number(temp)+273.15):scale==='r'?Number(temp)*1.8:(Number(temp));
  const centigrade = scale==='c'?Number(temp):scale==='f'?parseFloat((Number(temp)- 32)*5/9).toFixed(2):scale==='k'?(Number(temp)+273.15): scale==='r'?(parseFloat((Number(temp)- 32)*5/9).toFixed(2)+459.67):(temp);
  
  return(
    
    <div className="sub-body">
      <form  name='calform' autoComplete='off'>
      <div className='f-heading'>
        <h3>Type in any of the input boxes for the conversions</h3>
      </div>
        <table className='cal'>
          <tr>
            <td>
              <label for='c'>Celsius:</label>
            </td>
            <td className='math'>
              <input  value={celsius} id='c' name='c' min='0' tabIndex='1' autoFocus onChange={this.handleCelsius} />
            </td>
            <td className='mathSybmol'>&deg;C</td>
          </tr>
          <tr>
            <td>
              <label for='f'>Fahrenheit:</label>
            </td>
            <td className='math'>
              <input value={fahrenheit} id='f' name='f' min='-459.67' tabIndex='2' onChange={this.handleFahrenheit} autoFocus />
            </td>
            <td className='mathSybmol'>&deg;F</td>
          </tr>
          <tr>
            <td>
              <label for='k'>Kelvin:</label>
            </td>
            <td className='math'>
              <input  value={kelvin} id='k' name='k' min='-459.67' tabIndex='3' autoFocus onChange={this.handleKelvin} />
            </td>
            <td className='mathSybmol'>&deg;K</td>
          </tr>
          <tr>
            <td>
              <label for='C'>Centigrade:</label>
            </td>
            <td className='math'>
              <input  value={centigrade} id='C' name='C' min='0' tabIndex='4' autoFocus onChange={this.handleCentigrade} />
            </td>
            <td className='mathSybmol'>&deg;C</td>
          </tr>
          
        </table>
        <div>
          <button className='btn' onClick={()=>{
            this.celsius = 0
          }}>Reset</button>
        </div>
      </form>
        
    </div>
  );
 }
}