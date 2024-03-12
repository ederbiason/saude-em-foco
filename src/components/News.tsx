import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import moment from 'moment';

const data = {
    author: "O Tempo",
    title: "Saiba quais são os testes existentes para dengue e quando podem ser aplicados - O Tempo",
    description: null,
    url: "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3Lm90ZW1wby5jb20uYnIvYnJhc2lsL3NhaWJhLXF1YWlzLXNhby1vcy10ZXN0ZXMtZXhpc3RlbnRlcy1wYXJhLWRlbmd1ZS1lLXF1YW5kby1wb2RlbS1zZXItYXBsaWNhZG9zLTEuMzM0NjM4OdIBf2h0dHBzOi8vd3d3Lm90ZW1wby5jb20uYnIvbW9iaWxlL2JyYXNpbC9zYWliYS1xdWFpcy1zYW8tb3MtdGVzdGVzLWV4aXN0ZW50ZXMtcGFyYS1kZW5ndWUtZS1xdWFuZG8tcG9kZW0tc2VyLWFwbGljYWRvcy0xLjMzNDYzODk?oc=5",
    urlToImage: null,
    publishedAt: "2024-03-11T15:04:42Z",
    content: null
}

import newsImage from "@/assets/saude.png"

export function News() {
    return (
        <section className="w-full py-10">
            <div className="mx-auto lg:max-w-6xl px-3">
                <Carousel className="flex flex-col gap-8">
                    <h1 className="text-3xl font-bold text-center">
                        Fique por dentro das últimas notícias
                    </h1>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square justify-around flex-col overflow-hidden rounded-t-lg">
                                            <Image
                                                src={newsImage}
                                                alt="Imagem genérica para uma notícia de saúde."
                                            />

                                            <div className="px-5 pt-3 pb-6 flex flex-col gap-3">
                                                <h1>
                                                    {data.title}
                                                </h1>

                                                <p>
                                                    Publicado em: {moment(data.publishedAt).format('DD/MM/YYYY')}
                                                </p>

                                                <Link
                                                    href={data.url}
                                                    target="_blank"
                                                    rel="noop"
                                                    className="flex text-blue-700 gap-3 items-center justify-end hover:text-blue-400"
                                                >
                                                    <p>Ler mais</p>
                                                    <MoveRight />
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                </Carousel>
            </div>
        </section>
    )
}
