import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sistema de E-commerce",
    description:
      "Plataforma completa de e-commerce com painel administrativo, carrinho de compras, pagamentos integrados e gestão de estoque.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/modern-ecommerce-dashboard.png",
    github: "#",
    demo: "#",
  },
  {
    title: "API REST Escalável",
    description: "API REST robusta com autenticação JWT, rate limiting, documentação Swagger e testes automatizados.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    image: "/api-documentation-interface.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos e filtros avançados.",
    tech: ["React", "TypeScript", "D3.js", "WebSocket"],
    image: "/analytics-dashboard-charts.png",
    github: "#",
    demo: "#",
  },
  {
    title: "App de Gestão de Tarefas",
    description:
      "Aplicação de gerenciamento de projetos com funcionalidades de kanban, calendário e colaboração em equipe.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "tRPC"],
    image: "/project-management-kanban-board.png",
    github: "#",
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
