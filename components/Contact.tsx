import {
  Mail,
  ArrowRight
} from "lucide-react";


export default function Contact(){

return (

<section
id="contato"
className="section"
>


<div
className="
glass
rounded-3xl
p-10
md:p-16
text-center
"
>


<p
className="
text-red-500
tracking-[5px]
text-sm
"
>

CONTATO

</p>



<h2
className="
text-4xl
md:text-5xl
font-bold
mt-5
"
>

Vamos conversar?

</h2>




<p
className="
text-zinc-400
mt-5
max-w-xl
mx-auto
leading-7
"
>

Estou disponível para conversar sobre
projetos, oportunidades e ideias
relacionadas à tecnologia.

</p>




<a

href="https://mail.google.com/mail/?view=cm&fs=1&to=lecarpesoliveira@gmail.com"

target="_blank"

rel="noopener noreferrer"

className="
mt-8
inline-flex
items-center
gap-3
bg-red-600
px-7
py-3
rounded-xl
red-glow
hover:bg-red-700
transition
"

>


<Mail size={20}/>


Enviar e-mail


<ArrowRight size={18}/>


</a>



</div>


</section>

)

}