import './styles/main.sass'

import { RxDoubleArrowDown } from 'react-icons/rx'

import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

import { useState } from 'react'

const Main = () => {

    const [input, setInput] = useState("")
    const [qrCodelink, setqrCodelink] = useState("")

    //gera o tamanho do Qrcode para o download recebendo o valor atual do Input.
    //passando a url para o hook setqrCodelink.
    const gerarLinkdownload = (link_url) => {
        QRCodeLink.toDataURL(link_url, {
            width: 600,
            margin: 3,
        }, (err, url) => {
            setqrCodelink(url)
        })
    }

    //método receberá o valor atual do Input.
    //gerarLinkdownload enviará o valor atual do Input para download substituindo o link_url no método acima
    const gerarQrcode = (e) =>  {
        setInput(e.target.value);
        gerarLinkdownload(e.target.value);
    }

    return(
        <>
           <div className="main-container">
                <div className="qrcode"><QRCode value={input}/></div> 
                <div className="form">
                    <form action="">
                        <input type="text" placeholder='Digite aqui o site' required 
                        value={input} onChange={(e) => gerarQrcode(e)}
                        />
                        <p>O qrcode será gerado automaticamente.</p>
                        <a href={qrCodelink} download={`qrcode.png`} className='download'>Baixar Qrcode</a>
                    </form>
                </div>

                    <p className='sobre-title'>Saiba mais <RxDoubleArrowDown/></p>
           </div>
        </>
    )
}

export default Main;