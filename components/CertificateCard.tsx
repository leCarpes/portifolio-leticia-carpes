export default function CertificateCard({
item
}:any){


return (

<div className="
bg-zinc-900
rounded-xl
border
border-zinc-800
p-5
">


<img
src={item.image}
className="h-32 mx-auto"
/>


<h3 className="mt-4 font-bold">

{item.title}

</h3>


<p className="text-zinc-400">

{item.company}

</p>


<p className="text-red-500">

{item.year}

</p>


</div>

)

}