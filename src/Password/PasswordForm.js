import React from "react"
import styles from './password.module.css'
// TODO Must place more weight on symbols and capital letters

export default class PasswordForm extends React.Component {
state = {
    password: '',
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'],
    symbols: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
}

handleChange = (e) => {
    this.setState({password: e.target.value})
}

onCopy = () => {
    navigator.clipboard.writeText(this.state.password)
}

choosePW = (max) => {
    const {lower, upper, symbols, numbers, password} = this.state
    let pwCode = ''

    
    // if pw === 8 lower, upper, lower, sym, num, sym, upper
    // if pw === 10 lower, upper, lower, sym, num, sym, upper, num, lower, upper
    // if pw === 12 lower, upper, lower, sym, num, sym, upper, lower, num, upper, sym, lower

    for (let i = 0; i < max; i++){
        let choice = Math.floor(Math.random() * 4) +1
        let randomLower = Math.floor(Math.random() * 26)
        let randomUpper = Math.floor(Math.random() * 26)
        let randomSymbol = Math.floor(Math.random() * 14)
        let randomNum = Math.floor(Math.random() * 10)
        switch (choice) {
            case 1:pwCode += lower[randomLower]
                break;
            case 2: pwCode += upper[randomUpper]
                break;
            case 3: pwCode += symbols[randomSymbol]
                break;
            case 4: pwCode += numbers[randomNum]
                break;
            default:
                break;
        }
    }

    this.setState({password: pwCode})
}

    render(){
        return(
            <div className={`${styles.container}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={`${styles.pwBox}`}>
                    <input type='text' value={this.state.password} onChange={this.handleChange} className={`${styles.pwDisplay} password-display`}/>
                    <button style={{width: '20%'}} onClick={this.onCopy}>Copy</button>
                    <button onClick={() => this.choosePW(8)}>Generate 8 Digit Password</button>
                    <button onClick={() => this.choosePW(10)}>Generate 10 Digit Password</button>
                    <button onClick={() => this.choosePW(12)}>Generate 12 Digit Password</button>
                </div>
            </div>
        )
    }
}
