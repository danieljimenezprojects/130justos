import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import{FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRight,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre Nosotros</FooterLinkTitle>
                                
                                <FooterLink to="/signin">@vicmakovey</FooterLink>
                                <FooterLink to="/signin">@danielmcdance</FooterLink>
                                <FooterLink to="/signin">@130justos</FooterLink>
                                <FooterLink to="/signin">signin</FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Algunos de nuestros trabajos</FooterLinkTitle>
                                
                                <FooterLink to="/signin">HipHop Juste Debout Champion</FooterLink>
                                <FooterLink to="/signin">February Hip Hop</FooterLink>
                                <FooterLink to="/signin">Colaboración con Skinny Flex</FooterLink>
                                <FooterLink to="/signin">Discipulo honorífico de Bruce Lee</FooterLink>
                                <FooterLink to="/signin"></FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                   
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'
                        onClick={toggleHome}>
                            130justos
                        </SocialLogo>
                        <WebSiteRight> © All rights reserved  {new Date().getFullYear}</WebSiteRight>
                       
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
