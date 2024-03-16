import { diseases } from "@/utils/diseases"
import Link from "next/link"

export interface DiseasesProps {
    id: string
    doenca: string
    sintomas: string
    tratamento: string
}

export default function page() {
    return (
        <div className="w-full px-40 pt-10 grid grid-cols-4 gap-5 pb-20">
            {diseases.map((disease: DiseasesProps) => (
                <Link href={`/diseases/${disease.id}`} key={disease.id} className="hover:bg-blue-400 text-center p-2 flex items-center justify-center rounded-md font-semibold hover:text-white">
                    {disease.doenca}
                </Link>
            ))}
        </div>
    )
}
