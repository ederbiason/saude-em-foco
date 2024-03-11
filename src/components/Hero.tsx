import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.png"

export function Hero() {
    return (
        <div className="flex justify-between gap-12 w-full items-center py-14">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl font-bold">
                    Um guia virtual de cuidados para você
                </h1>

                <p className="text-xl text-slate-400">
                    O Saúde em Foco fornece um guia virtual de cuidados de saúde de maneira simplificada para todos
                </p>

                <Link
                    href="https://saudefocounifil.blogspot.com/"
                    target="_blank"
                    className="bg-blue-400 w-fit px-8 py-4 rounded-full font-semibold text-white"
                >
                    Saiba mais
                </Link>
            </div>

            <Image
                src={hero}
                alt="Healthcare hero image"
            />
        </div>
    )
}