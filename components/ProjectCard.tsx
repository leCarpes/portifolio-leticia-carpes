export default function ProjectCard({
project
}:any){


return (

<div className="
bg-zinc-900
border
border-red-900
rounded-xl
overflow-hidden
">


<img

src={project.image}

className="
h-40
w-full
object-cover
"

/>



<div className="p-5">


<h3 className="
font-bold
text-xl
">

{project.title}

</h3>


<p className="
text-zinc-400
mt-3
">

{project.description}

</p>


<div className="
flex gap-2 mt-4 flex-wrap
">


{

project.tech.map((t:string)=>(

<span
key={t}
className="
bg-zinc-800
px-3
py-1
rounded-full
text-sm
">

{t}

</span>

))

}


</div>



<a className="
text-red-500
block
mt-5
">

Ver no GitHub →

</a>



</div>


</div>

)

}