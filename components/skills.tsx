import { Card } from "@/components/ui/card"
import { Code2, Database, Globe, Server, Boxes, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "Java", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Prisma"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Git", "Docker", "CI/CD", "Linux", "AWS"],
  },
  {
    title: "Arquitetura",
    icon: Boxes,
    skills: ["Microsserviços", "Design Patterns", "Clean Code", "TDD", "Agile"],
  },
  {
    title: "Linguagens",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
