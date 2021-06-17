
import Button from './Button'
const Header = ({ title }) => {

    const buttonClicked = () =>{
        console.log("clicked")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = {'Add'} color = {'green'} onClick = {buttonClicked}/>
        </header>

    )
}

export default Header;