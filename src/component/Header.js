import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({ title, toggleAdd, showAdd }) => {

    const buttonClicked = () => {
        toggleAdd()
    }
    const location = useLocation();
    return (

       <header className="header">
            <h1>{title}</h1>
            {location.pathname ==='/' &&  <Button text={showAdd ? 'Cancel' : 'Add'} color={showAdd ? 'red' : 'green'} onClick={buttonClicked} />}
        </header>

    )
}

export default Header;