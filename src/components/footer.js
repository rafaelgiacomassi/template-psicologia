import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Feito com <span className="icon -love"><RiHeart2Line/></span> por <a href="https://flordavidamarketing.com.br/">Flor Da Vida Marketing Digital</a> <Link to="/"></Link></p>
    </div>
  </footer>
)

export default Footer