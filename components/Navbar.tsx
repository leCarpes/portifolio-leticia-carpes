export default function Navbar(){


return (

<nav className="
fixed top-0
w-full
z-50
bg-black/40
backdrop-blur
">


<div className="
max-w-6xl
mx-auto
flex
justify-between
items-center
p-5
">


<h1 className="
font-bold
text-xl
">

Letícia
<span className="text-red-500">
.dev
</span>

</h1>



<div className="
hidden md:flex gap-6 text-sm
">


<a href="#sobre">
Sobre
</a>


<a href="#projetos">
Projetos
</a>


<a href="#certificados">
Certificados
</a>


<a href="#contato">
Contato
</a>


</div>


</div>


</nav>

)

}