import {

SiReact,
SiNextdotjs,
SiTypescript,
SiTailwindcss,
SiLaravel,
SiFirebase,
SiMysql,
SiGit,
SiExpo

} from "react-icons/si";



const tech=[

{
name:"React",
icon:SiReact,
color:"text-cyan-400",
glow:"hover:shadow-cyan-400/30"
},

{
name:"Next.js",
icon:SiNextdotjs,
color:"text-white",
glow:"hover:shadow-white/20"
},

{
name:"TypeScript",
icon:SiTypescript,
color:"text-blue-500",
glow:"hover:shadow-blue-500/30"
},

{
name:"Tailwind",
icon:SiTailwindcss,
color:"text-cyan-300",
glow:"hover:shadow-cyan-300/30"
},

{
name:"React Native",
icon:SiReact,
color:"text-cyan-400",
glow:"hover:shadow-cyan-400/30"
},

{
name:"Expo",
icon:SiExpo,
color:"text-white",
glow:"hover:shadow-white/20"
},

{
name:"Laravel",
icon:SiLaravel,
color:"text-red-500",
glow:"hover:shadow-red-500/30"
},

{
name:"Firebase",
icon:SiFirebase,
color:"text-yellow-400",
glow:"hover:shadow-yellow-400/30"
},

{
name:"MySQL",
icon:SiMysql,
color:"text-blue-400",
glow:"hover:shadow-blue-400/30"
},

{
name:"Git",
icon:SiGit,
color:"text-orange-500",
glow:"hover:shadow-orange-500/30"
}

]



export default function TechStack(){


return (

<section className="section">


<p className="
text-red-500
tracking-[5px]
">

TECNOLOGIAS

</p>



<h2 className="
text-4xl
font-bold
mt-4
">

Minha Stack

</h2>



<div className="
mt-10
grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-5
gap-5
"
>


{
tech.map(item=>{


const Icon=item.icon;


return (

<div
key={item.name}
className={`
group
bg-zinc-900/70
border
border-zinc-800
rounded-xl
p-5
flex
flex-col
items-center
justify-center
gap-3
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
${item.glow}
`}
>


<Icon

size={38}

className={`
transition
duration-300
group-hover:scale-110
${item.color}
`}

/>



<span
className="
text-sm
text-zinc-300
"
>

{item.name}

</span>



</div>

)

})

}



</div>


</section>

)

}