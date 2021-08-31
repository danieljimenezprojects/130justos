import React from 'react'
import Icon1 from '../../images/1.svg'
import Icon2 from '../../images/2.svg'
import Icon3 from '../../images/3.svg'

import {ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Workshops</ServicesH2>
                    <ServicesP>Transmitimos nuestros conocimientos en tu academia
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Colaboraciones & Videoclips</ServicesH2>
                    <ServicesP>Promocionamos marcas, realizamos anuncios y colaboramos 
                        con artistas.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Showcase</ServicesH2>
                    <ServicesP>Realizamos shows, actuaciones y acompañamiento a artistas.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
