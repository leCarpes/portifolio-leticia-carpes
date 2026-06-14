import {
Code2,
Rocket,
Database,
Lightbulb
} from "lucide-react";


const cards=[


{
icon:Code2,
title:"Desenvolvimento",
text:"Aplicações web e mobile com foco em organização."
},


{
icon:Rocket,
title:"Evolução",
text:"Sempre estudando novas ferramentas e tecnologias."
},


{
icon:Database,
title:"Dados",
text:"Experiência com bancos, CRUDs e estrutura de sistemas."
},


{
icon:Lightbulb,
title:"Projetos",
text:"Transformando ideias em aplicações reais."
}


]


export default function About(){


return (

<section
id="sobre"
className="section"
>


<div className="
grid
md:grid-cols-2
gap-16
"
>



<div>


<p className="
text-red-500
tracking-widest
"
>

SOBRE MIM

</p>



<h2 className="
text-4xl
font-bold
mt-4
"
>

Tecnologia e criação

</h2>



<p
className="
text-zinc-400
mt-6
leading-7
"
>

Sou estudante de Desenvolvimento de Sistemas,
com interesse em desenvolvimento web,
mobile e soluções tecnológicas.

Tenho experiência criando projetos completos,
trabalhando com interfaces, lógica,
banco de dados e ferramentas modernas.

</p>


</div>




<div
className="
grid
grid-cols-2
gap-5
"
>


{
cards.map(card=>{


const Icon=card.icon;


return (

<div
key={card.title}
className="
glass
rounded-xl
p-6
"
>


<Icon
className="text-red-500 mb-4"
/>


<h3 className="font-bold">

{card.title}

</h3>


<p className="
text-sm
text-zinc-400
mt-3
">

{card.text}

</p>


</div>

)

})
}



</div>



</div>


</section>

)

}