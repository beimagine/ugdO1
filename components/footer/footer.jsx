
import Image from "next/image";
import "./footer.css";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import ugdIcon from "@/public/Frame19.svg";
import bgimage from "@/public/ugd-bg-image4.webp";
import Link from "next/link";
import WhatsAppWidget from "./whatsAppWidget";


const Footer = () =>{
  

    return(
    <div>
        <FooterBgImageComp />
        <div className="footerdiv" style={{
            width:"100%",
            backgroundColor:"#1C3564",
        }}>
            <div
            className="footersubdiv"
            >
                <div className="socialdiv" >
                    <div style={{
                        
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1.4em",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                    }}>Seguinos</div>
                    <Link href={"https://www.instagram.com/ugdvirtualok/"} target="_blank"><Image src={instagram} width={35} height={35} /></Link>
                    <Link href={"https://www.facebook.com/ugdvirtualok"} target="_blank"><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                    <Link href={"https://www.linkedin.com/company/ugd-virtual/"} target="_blank"><Image src={linkedin} width={35} height={35} /></Link>
                    <Link href={"https://wa.me/5493765180053"} target="_blank"><Image  src={"/whatsappicons.png"} width={35} height={35} /></Link>
                    {/* <WhatsAppWidget /> */}
                </div>

                <div style={{
                    display:"flex",
                    width:"100%",
                }}>
                    <Image src={ugdIcon} width={250} height={250} />
                </div>

               

            </div>
        </div>
        <div className="footerMobile" >
            <div>
               
                    <div className="socialdiv" style={{
                        marginTop:"1.2rem",
                        padding:"0",
                        justifyContent:"space-between"
                    }}>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1.4em",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                        }}>Síganos</div>
                        <Link href={"https://www.instagram.com/ugdvirtualok/"}><Image src={"/instagram.svg"} width={35} height={35} /></Link>
                        <Link href={"https://www.facebook.com/ugdvirtualok"}><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                        <Link href={"https://www.linkedin.com/company/ugd-virtual/"}><Image src={"/linkedin.svg"} width={35} height={35} /></Link>
                        <Link href={"https://wa.me/5493765180053"} target="_blank"><Image src={"/whatsappicons.png"} width={38} height={38} /></Link>
                    
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;


const FooterBgImageComp = () =>{
    return(
        <div style={{
            backgroundImage: `url(${bgimage.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:"100%",
            display:"flex",
            alignContent:"center",
            justifyContent:"center",
            padding:"50px",
            backgroundColor: "#1C3564",
        }}
        className="footerbgimagesubdiv"
        >
            <div
            className="footerimagesubdiv"
             >
                <div>
                    <p className="bgfooterheading">UGD Virtual: Educación que se adapta a vos</p>
                    <p className="bgfooterpara">Nuestra finalidad es que obtengas el título que buscas poniendo a tu disposición todas las herramientas y equipos de apoyo para tal fin.  El equipo de gestión de Educación a Distancia y los docentes estarán atentos a tus necesidades. Tendrás un tutor asignado con el que te podrás contactar en cualquier momento para que pueda orientarte y ayudarte durante tu trayecto de formación.
                    </p>
                </div>
            </div>
            <div className="footerimagesubdivempty">

            </div>
        </div> 
    )
}