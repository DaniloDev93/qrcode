import './styles/about.sass'

import qrcodeImg from '../img/qrcode-img.svg'

const About = () => {
    return(
        <>
            <div className="about-container">
                <img src={qrcodeImg} />

                <div className="sobre-text">
                    <span>O que é um Qrcode?</span>
                    <br/>
                    <p>
                        O Qr Code é uma espécie de código de barras estilizado, que forma a figura de um quadrado e, 
                        quando é digitalizado, transmite grande variedade de informações e pode ser lido pela câmera de diversos 
                        aparelhos celular ou por aplicativos baixados nos mesmos.</p><br/>
                        <p>Por ser um código visual, ele pode ser lido de forma digital, estando em um dispositivo eletrônico
                        por exemplo, ou física, quando impresso em algum lugar.</p> 
                        <p>Dessa forma, acaba sendo uma ferramente acessível e de fácil uso.</p><br/> Ele pode estar presente em todos os tipos de indústria, como
                        varejo, marketing e logística.
                </div>
            </div>
        </>
    )
}

export default About;