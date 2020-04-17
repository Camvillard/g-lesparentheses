import React, { useState, Fragment } from "react"
import { themeColors } from "../../theme/themeVariables"
import {
  MenuOpenItem,
  MenuOpenLink,
  NavWrapper,
  NavbarListItem,
  OpenMenuWrapper,
  MenuOpenExtLink,
} from "./Nav.ui"

const { oldPink, darkGray, offWhite, lightPink, forestGreen } = themeColors

const Social = () => {
  return (
    <OpenMenuWrapper>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://www.instagram.com/cam_villard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
        >
          behance
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </MenuOpenExtLink>
      </MenuOpenItem>
    </OpenMenuWrapper>
  )
}

const Menu = () => {
  return (
    <OpenMenuWrapper>
      <MenuOpenItem>
        <MenuOpenLink to={"/"}>catégories</MenuOpenLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenLink to={"/"}>à propos</MenuOpenLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenLink to={"/"}>contact</MenuOpenLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenLink to={"/"}>portfolio</MenuOpenLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenLink to={"/"}>e-shop</MenuOpenLink>
      </MenuOpenItem>
    </OpenMenuWrapper>
  )
}

export const Nav = () => {
  const [menuOpen, openMenu] = useState(false)
  const [socialOpen, openSocial] = useState(false)

  const toggle = (menu: string) => {
    if (menu === "menu") {
      openMenu(!menuOpen)
      openSocial(false)
    }
    if (menu === "social") {
      openMenu(false)
      openSocial(!socialOpen)
    }
  }
  return (
    <Fragment>
      <NavWrapper open={menuOpen || socialOpen}>
        <NavbarListItem onClick={() => toggle("menu")}>
          {menuOpen ? "fermer" : "menu"}
        </NavbarListItem>
        <NavbarListItem onClick={() => toggle("social")}>
          {socialOpen ? "fermer" : "social"}
        </NavbarListItem>
        <NavbarListItem>contact</NavbarListItem>
      </NavWrapper>
      {menuOpen && <Menu />}
      {socialOpen && <Social />}
    </Fragment>
  )
}
