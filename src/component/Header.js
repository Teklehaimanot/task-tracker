
import Button from './Button'
const Header = ({ title, toggleAdd, showAdd}) => {

    const buttonClicked = () =>{
        toggleAdd()
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = { showAdd ?'Cancel':'Add'} color = {showAdd?'red':'green'} onClick = {buttonClicked}/>
        </header>

    )
}

export default Header;