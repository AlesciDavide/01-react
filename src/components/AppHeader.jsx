import './AppHeader.css'
import reactLogo from '../assets/react.svg'
export default function AppHeader(){

    const title = 'Il mio header react';

    return(
        <header className="headerList">
            <div>
            <img src={reactLogo} alt="" />
            <h1 style={{textAlign: "center"}}>{title.toUpperCase()}</h1>

            </div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    about
                </li>
            </ul>
        </header>
    )
}