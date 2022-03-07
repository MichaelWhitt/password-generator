import React from "react"
import styles from './password.module.css'
import copy from './copy.png'
import check from './check.png'
import video from './Triangles_01.mp4'

export default class PasswordForm extends React.Component {
state = {
    password: '',
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'],
    symbols: ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    copied: false
}

handleChange = (e) => {
    this.setState({password: e.target.value})
}

onCopy = () => {
    navigator.clipboard.writeText(this.state.password)
    this.setState({copied: true})
}

choosePW = (max) => {
    const {lower, upper, symbols, numbers, copied} = this.state
    if (copied) this.setState({copied: false})
    let pwCode = ''

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
        const {copied, password} = this.state
        return(
            <div>
            <video autoPlay muted loop id="myVid" className={`${styles.video}`}>
                <source src={video} type='video/mp4'/>
            </video>
            <div className={`${styles.container}`}>
                <div className={`${styles.pwBox}`}>
                    <div style={{display: 'flex', flexDirection: 'column', width: 400}}>
                        <div style={{fontSize: 30, marginBottom: 30, textAlign: 'center'}}>Secure Password Generator</div>
                        <div style={{display: 'flex', marginBottom: 10, justifyContent: 'center'}} >
                            <input type='text' value={password} onChange={this.handleChange} className={`${styles.pwDisplay} password-display`}/>
                            <button className={`${ password && !copied ? styles.copyBtnGuide : styles.copyBtn}`} onClick={this.onCopy}>
                                <img src={copied ? check: copy} alt="copy" width={30} height={30}/>
                            </button>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <button style={{marginBottom: 10}} onClick={() => this.choosePW(8)}> 8 Digit Password</button>
                            <button style={{marginBottom: 10}} onClick={() => this.choosePW(10)}> 10 Digit Password</button>
                            <button onClick={() => this.choosePW(12)}> 12 Digit Password</button>
                        </div>
                        <div style={{marginTop: 30, fontSize: 15, fontWeight: 600}}>Instructions:</div>
                        {
                            !copied && !password ? <div style={{marginTop: 10}}>Click a button to generate a password</div>:
                            password && !copied ? <div style={{marginTop: 10}}>Click the copy icon</div> :
                            <div style={{marginTop: 10}}><span style={{color: 'red'}}>Copied to clipboard!</span> Use Ctrl + V or CMD + V to paste</div>
                        }
                </div>
                </div>
            </div>
            </div>
        )
    }
}
