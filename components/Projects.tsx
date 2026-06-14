import {
  ExternalLink
} from "lucide-react";


import {
  FaGithub,
  FaFilePdf
} from "react-icons/fa";



const projects = [


{
title:"BookSpace",

description:
"Aplicação mobile para gerenciamento e organização de livros, desenvolvida com foco em experiência do usuário e funcionalidades completas.",

image:"/projects/bookspace.png",

technologies:[
"React Native",
"Expo",
"Firebase"
],

type:"github",

link:
"https://github.com/leCarpes/pamii-leticia-carpes/tree/main/BookSpace"

},




{
title:"Lista de Tarefas",

description:
"Sistema web para gerenciamento de tarefas com operações CRUD, persistência de dados e organização de informações.",

image:"/projects/tasks.png",

technologies:[
"Laravel",
"SQLite",
"Tailwind"
],

type:"github",

link:
"https://github.com/leCarpes/pwiii-leticia-carpes/tree/main/listatarefas"

},




{
title:"Análise de Redes",

description:
"Estudo prático de captura e análise de pacotes utilizando Wireshark, explorando conceitos de redes e protocolos.",

image:"/projects/network.png",

technologies:[
"Wireshark",
"TCP/IP",
"Redes"
],

type:"pdf",

link:
"/documents/Wireshark.pdf"

}



];





export default function Projects(){


return (

<section

id="projetos"

className="section"

>




<p

className="
text-red-500
tracking-[5px]
text-sm
"

>

PROJETOS

</p>





<h2

className="
text-4xl
font-bold
mt-4
"

>

Meus Projetos

</h2>







<div

className="
mt-10
grid
md:grid-cols-2
gap-6
"

>




{

projects.map((project)=>{


return (



<div


key={project.title}


className={`

group
glass
rounded-2xl
overflow-hidden
border
border-zinc-800
hover:border-red-500/60
transition
duration-300
hover:-translate-y-2


${
project.title === "BookSpace"
? "md:col-span-2"
: ""
}


`}


>






<div

className={`
overflow-hidden
bg-zinc-900

${
project.title === "BookSpace"
? "h-72"
: "h-52"
}

`}

>




<img


src={project.image}


alt={project.title}


className="
w-full
h-full
object-cover
group-hover:scale-105
transition
duration-500
"


/>




</div>







<div

className="
p-6
"

>




<h3

className="
text-xl
font-bold
"

>

{project.title}

</h3>







<p

className="
text-zinc-400
mt-3
text-sm
leading-6
"

>

{project.description}

</p>








<div

className="
flex
flex-wrap
gap-2
mt-5
"

>



{

project.technologies.map((tech)=>(



<span


key={tech}


className="
px-3
py-1
rounded-full
text-xs
bg-zinc-800
text-zinc-300
"

>

{tech}

</span>



))

}



</div>









<div

className="
mt-6
"

>





<a


href={project.link}


target="_blank"


rel="noopener noreferrer"


className="
inline-flex
items-center
gap-2
text-red-500
hover:text-red-400
transition
text-sm
"

>





{

project.type === "github"

?

<>

Ver no GitHub

<FaGithub size={16}/>

</>


:

<>

Ver documentação

<FaFilePdf size={16}/>

</>


}






<ExternalLink size={14}/>




</a>





</div>







</div>






</div>



)

})

}




</div>





</section>


)

}