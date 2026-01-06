import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Analista de Dados",
    company: "Thyssenkrupp Marine System Brasil e Sul - Itajaí/SC",
    period: "2025 - Presente",
    description:
      " Atuação na organização, análise e interpretação de dados, utilizando Excel como principal ferramenta para tratamento de informações, criação de planilhas estruturadas, relatórios e indicadores. Experiência com fórmulas, tabelas dinâmicas, gráficos e automações básicas em VBA, com foco em otimizar processos e reduzir tarefas manuais.",
    achievements: [
      "Criação de Arquivo Macro para Manipulação de Dados entre arquivos e automações de Tarefas",
      "Criação de Arquivo Macro para Apresentação de Dados Query filtrados de outros arquivos com gráficos",
      "Desenvolvimento de comunicação clara e objetiva para discussão de dados, alinhamento de projetos de automação e participação em reuniões técnicas com a equipe.",
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
