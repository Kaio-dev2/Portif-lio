"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground font-mono">Olá, meu nome é</p>
          <h1 className="text-5xl md:text-7xl font-bold text-balance">Kaio Richard Amaral Lisboa</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground text-balance">
            Desenvolvedor de Sistemas
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            Desenvolvedor Back-End em formação, com foco na construção de aplicações eficientes e bem estruturadas.Possuo base em Python, C. Java, VBA, lógica de programação e bancos de dados, buscando evoluir continuamente por meio de projetos práticos e aprendizado constante.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              Ver Projetos
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Entre em Contato
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/Kaio-dev2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/Kaio-richard-dev2/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="kaiorichard1145@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
