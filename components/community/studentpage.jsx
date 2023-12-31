
"use client";
import "./community.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const StudentPage = () => {

    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

  return (
    <div>
      <div style={{
        width:"100%",
        height:"50vh",
        
      }}>
        <img id="background-image" style={{
          width:"100%",
          height:"100%",
          objectFit:"cover",
          objectPosition:"center",
          
        }} src={"/entrepreneurs-meeting-office.jpg"} alt="Background Image" />
        <h1 data-aos="fade-up" className="authorityFontheading">
            Nuestros destinatarios
        </h1>
      </div>

      <div className="studentMaindiv" >
        <p data-aos="fade-up" style={{
         marginTop:"1rem",
          textAlign:"center",
          color:"#1C3564",
          fontFamily: "Poppins",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Nuestros destinatarios </p>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"center",
          color:"#6B6B6B",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
        }}>
           Las carreras de UGD Virtual se caracterizan por su flexibilidad, que permite adaptar el régimen de estudios a situaciones particulares de disponibilidad horaria. Nuestros alumnos en esta modalidad pueden ser:
        </p>


        <div  className="studentDiv">
            <div data-aos="fade-up" className="studentDivCard">
                <p  style={{
                    marginTop:"1rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Jóvenes entusiastas</p>

                <p style={{
                    marginTop:"1rem",
                    textAlign:"center",
                    color:"#6B6B6B",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "21px",
                }}>Que, habiendo culminado recientemente sus estudios de nivel medio, aspiran cursar una carrera universitaria pudiendo tener una alta dedicación, o quizás hacerla más pausadamente si buscan a su vez desarrollar una actividad laboral.</p>

                <img style={{
                    marginTop:"2rem",
                    height:"400px",
                    width:"100%",
                    objectFit:"cover",
                }} alt='Mountains' src='/studenimg1.webp' width={100} height={100} />

            </div>
            <div data-aos="fade-up" className="studentDivCard">
                <p  style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#1C3564",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Adultos que buscan fortalecer su perfil laboral</p>

                    <p style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#6B6B6B",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "21px",
                    }}>Personas que, ya desempeñándose laboralmente, buscan incorporar conocimientos y competencias que mejores su empleabilidad y lo posicionen para aspirar a nuevos roles.</p>

                    <img style={{
                        marginTop:"2rem",
                        height:"400px",
                        width:"100%",
                        objectFit:"cover",
                    }} alt='Mountains' src='/studentimg2.webp' width={100} height={100} />

            </div>
            <div data-aos="fade-up" className="studentDivCard">
                <p  style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#1C3564",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Quienes hayan iniciado estudios superiores</p>

                    <p style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#6B6B6B",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "21px",
                    }}>Y por alguna razón no los hayan culminado, y nos remitan información para analizar las posibles equivalencias a reconocer.</p>

                    <img style={{
                        marginTop:"2rem",
                        height:"400px",
                        width:"100%",
                        objectFit:"cover",
                    }} alt='Mountains' src='/studentimg3.webp' width={100} height={100} />

            </div>

        </div>
   
        
      </div>

     
    </div>
  );
};

export default StudentPage;
