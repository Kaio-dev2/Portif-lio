import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Manipulação de Vetores",
    description:
      "Programa desenvolvido em C para gerenciamento de um vetor de números inteiros, com foco no aprendizado de manipulação de arrays, estruturas de controle e interação via console.O sistema oferece operações básicas de CRUD, validações de entrada e uma lógica de saída controlada, reforçando boas práticas de programação e uso consciente dos dados.",
    tech: ["C"],
    image: "/",
    github: "#",
    demo: "#",
  },
  {
    title: "Jogo de Aposta (Macaco Milionário) - Terminal",
    description: "Jogo simples desenvolvido em Python, baseado em um sistema de apostas por rodadas, onde o jogador gerencia saldo, define valores de aposta e tenta obter combinações vencedoras para ganhar prêmios.O projeto trabalha lógica de programação, controle de fluxo, validação de entradas e geração de resultados aleatórios, com interação direta via terminal.",
    tech: ["Python"],
    image: "/",
    github: "#",
    demo: "#",
  },
  {
    title: "Jogo da Pedra Papel e Tesoura Multiplayer",
    description: "AO desenvolvimento do código, justifica-se pela necessidade de um jogo multiplayer de pedra, papel e tesoura entre duas pessoas rodando o mesmo código em máquinas diferentes, estando conectadas no mesmo servidor..",
    tech: ["Python","Redis"],
    image: "/",
    github: "#",
    demo: "#",
  },
{
    title: "Sistema de Gerenciamento de Estoques",
    description: "Sistema desenvolvido em Python com SQLite, focado no controle de estoque, registro de vendas, gerenciamento de usuários e geração de relatórios financeiros.m hash de senha e lógica de negócios, simulando um ambiente real de gestão comercial.",
    tech: ["Python","SQLite3"],
    image: "https://miro.medium.com/1*9oq7pQsxHMD_2L7m_nPjsw.png",
    github: "https://github.com/Kaio-dev2/Sistema_de_Gerenciamento_de_Estoques.git",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
          <p className="text-muted-foreground text-pretty">Alguns dos projetos que desenvolvi recentemente</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
