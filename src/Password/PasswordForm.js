import React from "react"
import styles from './password.module.css'
// TODO Must place more weight on symbols and capital letters

export default class PasswordForm extends React.Component {
state = {
    password: '',
    passwordOptions : [1,2,3,4,5,6,7,8,9,0, 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J',
'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S',
't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=']
}



choosePW = (max) => {
    const injectSym = () => {
        // include logic to inject symbol
    }

    let pwCode = ''
    for (let i = 0; i < max; i++){
        let randomNum = Math.floor(Math.random() * 76)
        pwCode += this.state.passwordOptions[randomNum]
        injectSym()
        this.setState({password: pwCode})
    }
}

    render(){

        return(
            <div className={`${styles.container}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={`${styles.pwBox}`}>
                    <div className={`${styles.pwDisplay}`}>{this.state.password}</div>
                    <button style={{width: '20%'}}>Copy</button>
                    <button onClick={() => this.choosePW(6)}>Generate 6 Digit Password</button>
                    <button onClick={() => this.choosePW(8)}>Generate 8 Digit Password</button>
                    <button onClick={() => this.choosePW(10)}>Generate 10 Digit Password</button>
                    <button onClick={() => this.choosePW(12)}>Generate 12 Digit Password</button>
                </div>
            </div>
        )
    }

}
