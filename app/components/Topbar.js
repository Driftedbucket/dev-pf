import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import styles from './Topbar.module.css'

export default function Topbar(){
    return(
        <header>
            <div>
                <a href="https://wa.me/264816752591" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                <a href="https://github.com/Driftedbucket" target="_blank" rel="noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/awike-gulu-2a409a3a5/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook/></a>
                <a href="https://instagram.com/awike_.rna" target="_blank" rel="noreferrer"><FaInstagram/></a>
            </div>

            <a href="/cv.pdf" download >
                CV <HiOutlineDownload/>
            </a>
        </header>
    );
}