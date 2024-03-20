"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

import { useChat } from 'ai/react'

interface ChatProps { }

export function Chat(props: ChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({ api: "/api/chat" })

    return (
        <Card className="w-full h-[600px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
                <CardTitle>
                    Health Bot
                </CardTitle>

                <CardDescription>
                    O Health Bot é um chatbot onde você pode realizar um autodiagnóstico a partir dos sintomas que você está sentindo. Lembrando que esse processo é feito por uma inteligência artificial, portanto serve apenas como uma sugestão. O aconselhado é buscar um médico profissional.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 p-6 pt-0">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className="flex gap-3 text-slate-600"
                    >
                        {message.role === "user" && (
                            <Avatar>
                                <AvatarFallback>
                                    Você
                                </AvatarFallback>

                                <AvatarImage
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg=="
                                    className="bg-blue-300 border-black border-2 rounded-full"
                                />
                            </Avatar>
                        )}

                        {message.role === "assistant" && (
                            <Avatar>
                                <AvatarFallback>
                                    Bot
                                </AvatarFallback>

                                <AvatarImage
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvdCI+PHBhdGggZD0iTTEyIDhWNEg4Ii8+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiB4PSI0IiB5PSI4IiByeD0iMiIvPjxwYXRoIGQ9Ik0yIDE0aDIiLz48cGF0aCBkPSJNMjAgMTRoMiIvPjxwYXRoIGQ9Ik0xNSAxM3YyIi8+PHBhdGggZD0iTTkgMTN2MiIvPjwvc3ZnPg=="
                                    className="bg-blue-300 border-black border-2 rounded-full"
                                />
                            </Avatar>
                        )}

                        <p className="leading-relaxed">
                            <span className="text-slate-800 block font-bold">
                                {message.role === "user" ? "Você" : "Bot"}
                            </span>

                            {message.content}
                        </p>
                    </div>
                ))}
            </CardContent>

            <CardFooter>
                <form
                    className="gap-2 w-full flex"
                    onSubmit={handleSubmit}
                >
                    <Input
                        placeholder="Informe seus sintomas"
                        value={input}
                        onChange={handleInputChange}
                    />

                    <Button type="submit">
                        Enviar
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}