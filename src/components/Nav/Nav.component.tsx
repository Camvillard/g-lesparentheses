import React, { useState, Fragment } from "react"
import { themeColors } from "../../theme/themeVariables"
import {
  MenuOpenItem,
  MenuOpenLink,
  NavWrapper,
  NavbarListItem,
  OpenMenuWrapper,
  MenuWrapper,
  MenuOpenExtLink,
  MenuOpenToggleLink,
  CategoryLink,
  CategoryCount,
  CategoriesListWrapper,
} from "./Nav.ui"
import { BlobMenu, BlobSocial } from "./Blobs.component"
import { Link } from "gatsby"
import { Category, fakeCats } from "../../types/Category.type"

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
      {/* <BlobSocial /> */}
    </OpenMenuWrapper>
  )
}
type CategoriesProps = {
  categories: Category[]
}

const CategoriesList = ({ categories }: CategoriesProps) => {
  return (
    <CategoriesListWrapper>
      {categories.map(cat => (
        <CategoryLink to={"/" + cat.slug} key={cat.slug}>
          {cat.name}
          <CategoryCount>{"(" + cat.articles + ")"}</CategoryCount>
        </CategoryLink>
      ))}
    </CategoriesListWrapper>
  )
}

const Menu = ({ categories }: CategoriesProps) => {
  const [isOpen, openCategories] = useState(false)
  return (
    <MenuWrapper>
      <MenuOpenItem>
        {isOpen && <CategoriesList categories={categories} />}
        <MenuOpenToggleLink onClick={() => openCategories(!isOpen)}>
          catégories
        </MenuOpenToggleLink>
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
      {/* <BlobMenu /> */}
    </MenuWrapper>
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
        <NavbarListItem
          onClick={() => toggle("menu")}
          open={menuOpen || socialOpen}
        >
          {menuOpen ? "fermer" : "menu"}
        </NavbarListItem>
        <NavbarListItem
          onClick={() => toggle("social")}
          open={menuOpen || socialOpen}
        >
          {socialOpen ? "fermer" : "social"}
        </NavbarListItem>
        <NavbarListItem open={menuOpen || socialOpen}>contact</NavbarListItem>
      </NavWrapper>
      {menuOpen && <Menu categories={fakeCats} />}
      {socialOpen && <Social />}
    </Fragment>
  )
}
