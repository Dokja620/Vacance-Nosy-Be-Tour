import Whatsapp from '../assets/imgs/footer/whatsapp-color-svgrepo-com.svg';
import facebook from '../assets/imgs/footer/facebook-svgrepo-com.svg';
import gmail from '../assets/imgs/footer/gmail-svgrepo-com.svg';

const NavBar = () => {
    return ( 
        <footer>
            <div className="reach-us">
                <div className="soc whatsapp"><img src={Whatsapp} alt="" /></div>
                <div className="soc Facebook"><img src={facebook} alt="" /></div>
                <div className="soc gmail"><img src={gmail} alt="" /></div>
            </div>
            <div className="terms"></div>
            <div className="made"><p>fait par <span>Ohayo Dev. & Design</span> © 2024</p></div>
        </footer>
    ); 
}
 
export default NavBar;