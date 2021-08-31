import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
 const HeroSection = () => {
     const [hover,setHover] = useState(false);
     const onHover = () => {
         setHover(!hover);
     }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>130 justos</HeroH1>
                <HeroP> @danielmcdance & @vicmakovey</HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    to="about"
                    primary='true'
                    dark='true'
                    smooth= {true} duration={500} spy={true}
                    exact='true' offset={-80}>
                        Contáctanos {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
