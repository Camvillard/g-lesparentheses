import React, { useState, Fragment } from "react"
import { themeColors } from "../../theme/themeVariables"
import {
  MenuOpenItem,
  MenuOpenLink,
  NavWrapper,
  NavbarListItem,
  OpenMenuWrapper,
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
          color={"white"}
        >
          instagram
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
          color={"white"}
        >
          twitter
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
          color={"white"}
        >
          behance
        </MenuOpenExtLink>
      </MenuOpenItem>
      <MenuOpenItem>
        <MenuOpenExtLink
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
          color={"white"}
        >
          github
        </MenuOpenExtLink>
      </MenuOpenItem>
      <BlobSocial />
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
    <OpenMenuWrapper>
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
      <BlobMenu />
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
      {menuOpen && <Menu categories={fakeCats} />}
      {socialOpen && <Social />}
    </Fragment>
  )
}
