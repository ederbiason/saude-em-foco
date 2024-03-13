import Image from "next/image";
import Link from "next/link";


export function Navbar() {
  return (
    <div className="w-full h-14 bg-blue-300 flex items-center px-40 justify-between">
        <div className="flex gap-5">
            <Link href="/" className="text-[#233348] font-bold uppercase">
                Saúde em Foco
            </Link>
        </div>

        <div className="flex gap-10">
            <Link href="/diseases" className="hover:underline hover:text-[#233348]">
                Doenças
            </Link>

            <Link href="/diagnoses" className="hover:underline hover:text-[#233348]">
                Diagnóstico
            </Link>

            <Link href="/hospitals" className="hover:underline hover:text-[#233348]">
                Hospitais
            </Link>
        </div>
    </div>
  )
}
