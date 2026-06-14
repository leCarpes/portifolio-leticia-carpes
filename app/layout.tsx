import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

title:"Letícia | Desenvolvedora Full Stack",

description:"Portfólio profissional"

};


export default function RootLayout({

children

}:{

children:React.ReactNode

}){


return (

<html lang="pt-BR">

<body>

{children}

</body>

</html>

)

}