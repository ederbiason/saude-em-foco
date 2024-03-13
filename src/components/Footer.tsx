import Image from "next/image";
import logoUnifil from "@/assets/logo-unifil.png"

export function Footer() {
    return (
        <div className="bg-gradient-to-b from-blue-300 from-30% to-blue-500 h-28 px-40 py-5 flex justify-between">
            <div className="flex flex-col justify-between">
                <h1 className="text-[#233348] font-bold uppercase text-xl">
                    Saúde em Foco
                </h1>
                <p className="font-semibold">
                    Projeto de Extensão
                </p>
                <p>
                    ©Saúde em foco 2024. All rights reserved
                </p>
            </div>

            <Image 
                src={logoUnifil}
                alt="Logo do Centro Universitário Filadélfia"
                width={300}
            />
        </div>
    )
}
