import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Desenvolvedor Full-Stack Sênior",
    company: "Tech Company",
    period: "2022 - Presente",
    description:
      "Desenvolvimento de aplicações web escaláveis usando React, Next.js e Node.js. Liderança técnica de equipe e mentoria de desenvolvedores júnior.",
    achievements: [
      "Reduziu tempo de carregamento em 40% através de otimizações",
      "Implementou arquitetura de microsserviços",
      "Mentoria de 5 desenvolvedores júnior",
    ],
  },
  {
    title: "Desenvolvedor Full-Stack",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Desenvolvimento de soluções web personalizadas para diversos clientes. Trabalho com múltiplas tecnologias e frameworks.",
    achievements: [
      "Entregou +15 projetos com sucesso",
      "Implementou CI/CD pipelines",
      "Melhorou performance de aplicações legadas",
    ],
  },
  {
    title: "Desenvolvedor Junior",
    company: "Startup XYZ",
    period: "2018 - 2020",
    description:
      "Desenvolvimento frontend e backend de aplicações web. Aprendizado contínuo e trabalho em equipe ágil.",
    achievements: [
      "Contribuiu para produto principal da empresa",
      "Participou de decisões de arquitetura",
      "Desenvolveu features end-to-end",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experiência</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold">Principais conquistas:</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">▪</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
