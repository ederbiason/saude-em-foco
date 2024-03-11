import { ReactNode } from "react"

interface CardProps {
    icon: ReactNode
    title: string
    description: string
}

export function Card({ title, description, icon }: CardProps) {
    return (
        <div className="flex flex-col gap-5 bg-blue-400 rounded-lg p-10 items-center">
            {icon}

            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold text-left">
                    {title}
                </h1>
                <p className="text-zinc-800">
                    {description}
                </p>
            </div>
        </div>
    )
}
