"use client"; 

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa"

import { SiTaildincss, SiNextwindJs } from "react-icons/si";

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore distinctio corrupti pariatur.",
  info: [
    {
      fieldName: "Name",
      fielvalue: "Brenno alencar"
    },

     {
      fieldName: "Telefone",
      fielvalue: "(+55) 62992002421"
    },

    {
      fieldName: "Experiência",
      fielvalue: "+ de 3 anos"
    },

     {
      fieldName: "Linguagens",
      fielvalue: "Portugeus, Ingles"
    },

  ]
}



const Sobre = () => {
  return (
    <div>Sobre mim</div>
  )
} 

export default Sobre