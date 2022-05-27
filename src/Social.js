import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCoffee,faFacebookF } from '@fortawesome/free-solid-svg-icons';

const Social = () => {
  return (
    <div className="social-buttons">
    <a href="https://wa.me/6289681794458">
   <FontAwesomeIcon icon={faWhatsapp} className="social-icon" /></a>
   <a href="https://facebook.com/kazu.miteku.1">
    <FontAwesomeIcon icon={faFacebook} className="social-icon" /></a>
    <a href="https://t.me/synerzie">
    <FontAwesomeIcon icon={faTelegram} className="social-icon" /></a>
    </div>
    )
}

export default Social