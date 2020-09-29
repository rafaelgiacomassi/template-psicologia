import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/sobre",
    title: "Sobre"
  },
  {
    path: "/blog",
    title: "Meu Trabalho"
  },
  {
    path: "https://api.whatsapp.com/send?phone=5517991784843&text=Ol%C3%A1,%20eu%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20atendimento%20psicol%C3%B3gico",
    title: "Contato"
  },
]

const ListLink = (props) => (<li><Link to={props.to}>{props.children}</Link></li>)


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMenu: false}

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({      
      showMenu: !state.showMenu    
    }))
  }

  render () {
    const listMenuItems = MenuItems.map((menuItem, index) => 
      <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
    )
    return (
      <nav className="site-navigation">
        <button onClick={this.handleToggleClick} className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}>
          <div className="icon-menu-line"><RiMenu3Line/></div>
          <div className="icon-menu-close"><RiCloseLine/></div>
        </button>
        <ul>
          {listMenuItems}
        </ul>
      </nav>
    )
  }
}

export default Navigation
