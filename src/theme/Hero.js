import styled from 'styled-components'
import img from '../styles/img/verres.jpg'

const Hero = styled.div`
    max-height: 100%;
    min-width: 100%;
    background: linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.3)), url(${img}) center/cover fixed no-repeat;
    position: fixed;
    top: 0;
    z-index:-1;
    min-height: 100%;
`

export default Hero
