import './footer.css';
const Footer = (props) => {
    return (
        <footer className='footer-box'>
            <p className='description'>&copy; 2024. Btongtong All rights reserved.</p>
            <p><a className='description' href="/">Privacy Policy</a> | <a className='description' href="/">Terms of Service</a></p>
        </footer>
    )
}

export default Footer;