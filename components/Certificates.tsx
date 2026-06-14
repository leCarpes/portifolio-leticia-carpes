import {
  ExternalLink
} from "lucide-react";


const certificates = [


{
title:"Front-end",

institution:"SENAI",

description:
"Formação em desenvolvimento front-end, abordando estrutura web, estilização e criação de interfaces.",

image:"/certificates/senai.png",

link:"/certificates/senai.pdf"

},




{
title:"CCNA: Introduction to Networks",

institution:"Cisco Networking Academy",

description:
"Fundamentos de redes, protocolos, endereçamento IP e conceitos de comunicação.",

image:"/certificates/cisco.png",

link:"/certificates/cisco.pdf"

},





{
title:"Imersão IA",

institution:"Alura",

description:
"Experiência prática explorando inteligência artificial, modelos de linguagem e integração com APIs.",

image:"/certificates/ia.png",

link:"/certificates/ia.pdf"

}



];





export default function Certificates(){


return (

<section

id="certificados"

className="section"

>



<p

className="
text-red-500
tracking-[5px]
text-sm
"

>

CERTIFICADOS

</p>





<h2

className="
text-4xl
font-bold
mt-4
"

>

Certificados

</h2>






<div

className="
mt-10
grid
md:grid-cols-3
gap-6
"

>




{
certificates.map((certificate)=>(



<div

key={certificate.title}

className="
glass
rounded-2xl
border
border-zinc-800
p-5
hover:border-red-500/60
transition
hover:-translate-y-2
"

>




<div

className="
h-44
rounded-xl
overflow-hidden
bg-zinc-900
"

>


<img

src={certificate.image}

alt={certificate.title}

className="
w-full
h-full
object-cover
"

/>



</div>








<h3

className="
mt-5
font-bold
text-lg
"

>

{certificate.title}

</h3>





<p

className="
text-red-500
text-sm
mt-1
"

>

{certificate.institution}

</p>







<p

className="
text-zinc-400
text-sm
mt-3
leading-6
"

>

{certificate.description}

</p>

<a

href={certificate.link}

target="_blank"

className="
mt-5
inline-flex
items-center
gap-2
text-sm
text-red-500
"

>

Ver certificado

<ExternalLink size={15}/>

</a>

</div>
))

}

</div>
</section>

)

}