import React from 'react';
import "./aboutUs.css";
import Image from 'next/image';


const Equivalencies = () => {

  return (
    <div style={{
      width:"100%",
      backgroundColor:"white",
      paddingTop:"5rem",
      backgroundImage:"url(/cool-background.png)",
    }}>
     <div className='aboutUSPageMain'>
        <div className='aboutUSPageContent'>
            <div >
            <p style={{
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Equivalencias </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Si cursaste estudios en Universidades o Instituciones Superiores, te ofrecemos analizar el reconocimiento de estudios por equivalencia antes de inscribirte a nuestra carrera. Para ello, agradeceremos nos contactes, envíes un informe de las materias que has aprobado, te solicitemos información complementaria, y recibirás el informe preliminar de reconocimiento de estudio.
            </p>
            </div>
       
            

        </div>
        <div className='aboutUSPageImage'>
            <div style={{width: '70%', height: '70%', position: 'relative'}}>
            <Image
                alt='Mountains'
                src='/teamwork-meeting-with-business-people.jpg'
                layout='fill'
                objectFit='contain'
                style={{
                    borderRadius:"10px",
                }}
            />
            </div>

        </div>

      </div>
     
    </div>
  );
};

export default Equivalencies;
