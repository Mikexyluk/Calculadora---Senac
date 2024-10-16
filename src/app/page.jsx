"use client"
import Image from "next/image";
import Calculadora from "./components/calculadora";
import logo from '@/assets/image/senac.png'

function Home(){



return(
  <>
  <div className="w-screen h-screen bg-slate-200 flex justify-center p-6">
  <div className="w-[500px] space-y-4">
  <div>
            {/* <h1>Minha Imagem</h1> */}
            <Image 
                src={logo} 
                alt="logo" 
                width={500}
                height={300} 
            />
        </div>
  <h1 className="text-3xl text-sky-700 font-bold text-center font-sans" >Calculadora de Combustível</h1>
  <Calculadora/>
  </div>
  </div>
  </>
)
}
export default Home;