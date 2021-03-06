import React from 'react'
import NavbarButton from '../NavbarButton/NavbarButton'
import AnimatedAnchor from '../AnimatedAnchor/AnimatedAnchor'
import animatedLinks from '../component-data/animatedLinks'
import navbarButtonProps from '../component-data/navbarButtons'

export interface NavbarProps {
  id: string
}

const Navbar: React.FC<NavbarProps> = ({id}) => (
  <nav 
    id={id}
    className={'hbox align-start'}
  >
    {
      navbarButtonProps.map( button => 
        <NavbarButton key={button.href} {...button} />)
    }
    { 
      animatedLinks.map( link => 
        <AnimatedAnchor key={link.href} {...link} />) 
    }
  </nav>
)

export default Navbar