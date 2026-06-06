import logo from "../assets/logo.jpeg";

export default function Header(){
    return(
        <>
            <header>
                <img src={logo} alt="cheFixit logo" />
                <h1>CheFixit - <span>Fix your ingredients into meals.</span></h1>
            </header>
        </>
    )
}