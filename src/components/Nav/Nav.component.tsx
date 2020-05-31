import React, { useState } from "react"
import Logo from "../logo/Logo.component"
import {
  MenuWrapper,
  MenuItem,
  MenuLink,
  CategoriesListWrapper,
  CategoryLink,
  CategoryCount,
  SocialMenuWrapper,
  SocialMenuWrapperItem,
  FooterNavWrapper,
  ToggleMenu,
} from "./Nav.ui"
import { Category, fakeCats } from "../../types/Category.type"
import { OpenNav, CloseNav } from "../Icons/ToggleNav.component"

const SocialMenu = () => {
  return (
    <SocialMenuWrapper>
      <SocialMenuWrapperItem>
        <a
          href="https://twitter.com/cam_villard"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter/
        </a>
      </SocialMenuWrapperItem>
      <SocialMenuWrapperItem>
        <a
          href="https://www.instagram.com/cam_villard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram/
        </a>
      </SocialMenuWrapperItem>
      <SocialMenuWrapperItem>
        <a
          href="https://github.com/camvillard"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </SocialMenuWrapperItem>
    </SocialMenuWrapper>
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

type FooterMenuProps = {
  categories: Category[]
}
const FooterMenu = ({ categories }: FooterMenuProps) => {
  const [shopStatus, showShopStatus] = useState(false)
  const [categoriesIsOpen, openCategories] = useState(false)
  const [socialIsOpen, openSocial] = useState(false)

  const toggleShop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    showShopStatus(!shopStatus)
  }
  const toggleCategories = () => {
    openCategories(!categoriesIsOpen)
  }
  const toggleSocial = () => {
    openSocial(!socialIsOpen)
  }
  return (
    <MenuWrapper>
      {/* <MenuItem onClick={toggleCategories}>catégories</MenuItem>
      {categoriesIsOpen && <CategoriesList categories={categories} />} */}
      <MenuItem>
        <MenuLink to={"/a-propos"}>à propos</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={"/contact"}>contact</MenuLink>
      </MenuItem>
      <MenuItem>
        <a
          href="https://www.behance.net/camvillard"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio
        </a>
      </MenuItem>
      <MenuItem>
        <MenuLink to={"/"} onClick={toggleShop}>
          {shopStatus ? "bientôt !" : "e-shop"}
        </MenuLink>
      </MenuItem>
      <MenuItem onClick={toggleSocial}>
        {socialIsOpen ? <SocialMenu /> : "social"}
      </MenuItem>
    </MenuWrapper>
  )
}

export const Nav = () => {
  const [menuIsOpen, openMenu] = useState(false)
  const toggleMenu = () => {
    openMenu(!menuIsOpen)
  }
  return (
    <FooterNavWrapper isOpen={menuIsOpen}>
      <Logo />
      <ToggleMenu onClick={toggleMenu}>
        {menuIsOpen ? <CloseNav /> : <OpenNav />}
      </ToggleMenu>
      {menuIsOpen && <FooterMenu categories={fakeCats} />}
    </FooterNavWrapper>
  )
}
