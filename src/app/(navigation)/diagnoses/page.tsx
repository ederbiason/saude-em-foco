import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function page() {
    return (
        <div className="w-full px-40 pt-10 pb-20 bg-slate-50">
            <Card className="w-full h-[500px] grid grid-rows-[min-content_1fr_min-content]">
                <CardHeader>
                    <CardTitle>
                        Health Bot
                    </CardTitle>

                    <CardDescription>
                        ChatBot para fazer um autodiagnóstico a partir dos seus sintomas.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                    <div className="flex gap-3 text-slate-600">
                        <Avatar>
                            <AvatarFallback>USER</AvatarFallback>
                            <AvatarImage
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg=="
                                className="bg-blue-300 border-black border-2 rounded-full"
                            />
                        </Avatar>

                        <p className="leading-relaxed">
                            <span className="font-bold text-slate-800 block">Você</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque. Facilis perferendis, exercitationem deleniti saepe fugiat tempore cum. Eligendi asperiores dolores ipsum voluptatibus labore a iste earum inventore debitis at.
                        </p>
                    </div>

                    <div className="flex gap-3 text-slate-600">
                        <Avatar>
                            <AvatarFallback>BOT</AvatarFallback>
                            <AvatarImage
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvdCI+PHBhdGggZD0iTTEyIDhWNEg4Ii8+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiB4PSI0IiB5PSI4IiByeD0iMiIvPjxwYXRoIGQ9Ik0yIDE0aDIiLz48cGF0aCBkPSJNMjAgMTRoMiIvPjxwYXRoIGQ9Ik0xNSAxM3YyIi8+PHBhdGggZD0iTTkgMTN2MiIvPjwvc3ZnPg=="
                                className="bg-blue-300 border-black border-2 rounded-full"
                            />
                        </Avatar>

                        <p className="leading-relaxed">
                            <span className="font-bold text-slate-800 block">Bot</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eaque. Facilis perferendis, exercitationem deleniti saepe fugiat tempore cum. Eligendi asperiores dolores ipsum voluptatibus labore a iste earum inventore debitis at.
                        </p>
                    </div>
                </CardContent>

                <CardFooter className="space-x-2">
                    <Input
                        placeholder="Informe os sintomas que você está sentindo..."
                    />

                    <Button
                        type="submit"
                        className="w-40 flex gap-2"
                    >
                        Enviar
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
