import {
  ArrowRight
} from "lucide-react";


import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


export default function Hero(){


return (

<section
className="
relative
min-h-screen
flex
items-center
overflow-hidden
"
>


<img

src="/hero-bg.png"

className="
absolute
inset-0
w-full
h-full
object-cover
"

alt="background"

/>



<div
className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/80
to-black/20
"
/>



<div
className="
absolute
bottom-0
h-96
w-full
bg-gradient-to-t
from-black
to-transparent
"
/>





<div
className="
relative
z-10
max-w-6xl
mx-auto
px-8
pt-24
w-full
"
>


<div className="max-w-xl">



<p
className="
text-red-500
tracking-[6px]
text-sm
"
>

OLÁ, EU SOU

</p>





<h1
className="
mt-6
text-6xl
md:text-7xl
font-bold
leading-tight
"
>

LETÍCIA


<span
className="
block
text-red-600
"
>

CARPES

</span>


</h1>





<h2
className="
mt-6
text-2xl
text-zinc-300
"
>

Desenvolvedora Full Stack

</h2>





<p
className="
mt-6
max-w-xl
text-zinc-400
leading-7
"
>

Desenvolvo aplicações web e mobile,
criando soluções com foco em tecnologia,
organização e boas práticas.

</p>






<div
className="
mt-10
"
>


<a

href="#projetos"

className="
bg-red-600
px-7
py-3
rounded-xl
inline-flex
items-center
gap-2
red-glow
hover:bg-red-700
transition
"

>

Ver projetos

<ArrowRight size={18}/>

</a>



</div>







<div
className="
mt-8
flex
gap-4
"
>





<a

href="https://github.com/leCarpes"

target="_blank"

rel="noopener noreferrer"

className="
w-11
h-11
border
border-zinc-800
rounded-xl
flex
items-center
justify-center
bg-black/40
hover:border-red-500
hover:-translate-y-1
transition
"

>


<FaGithub size={19}/>


</a>







<a

href="https://www.linkedin.com/in/let%C3%ADcia-carpes-de-oliveira-b34aa1302/"

target="_blank"

rel="noopener noreferrer"

className="
w-11
h-11
border
border-zinc-800
rounded-xl
flex
items-center
justify-center
bg-black/40
hover:border-red-500
hover:-translate-y-1
transition
"

>


<FaLinkedin size={19}/>


</a>






</div>






</div>


</div>



</section>

)

}