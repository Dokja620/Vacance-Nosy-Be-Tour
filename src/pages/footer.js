import Whatsapp from '../assets/imgs/footer/whatsapp-color-svgrepo-com.svg';
import facebook from '../assets/imgs/footer/facebook-svgrepo-com.svg';
import gmail from '../assets/imgs/footer/gmail-svgrepo-com.svg';

const NavBar = () => {
    return ( 
        <footer>
            <div className="reach-us">
                <div className="soc whatsapp"><a href="https://api.whatsapp.com/send?phone=%2B261329066427&data=ARCdnSkqAAm-F2QnLgSIra_Ea-JkP1-VN8DfC66-ke3n9beRwQSdrwnc8gf9AWedFdo6gB719V-FRIWxxMIsUuaYCuyiApq5-asUX0609qk9cY1MSqQLYgUgY_ZW5QyCq_6yKQJdCQh-WX-efBC88_FotA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1uW4GplD447x1EliNzxhAFCctsZmAsF2eUkCLSbFexcLkObESN4iJvF5E"><img src={Whatsapp} alt="Nosy Be" /></a></div>
                <div className="soc Facebook"><a href="https://www.facebook.com/profile.php?id=100083992161517"><img src={facebook} alt="Nosy Be" /></a></div>
                <div className="soc gmail"><a href="mailto:vacancesnosybetour@gmail.com"><img src={gmail} alt="Nosy Be" /></a></div>
            </div>
            <div className="terms"></div>
            <div className="made"><p>Fait par <span>Ohayo Dev. & Design</span> © 2024</p></div>
        </footer>
    ); 
}
 
export default NavBar;