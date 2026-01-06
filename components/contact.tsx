"use client"

import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Informações de Contato
          </h2>
          <p className="text-muted-foreground">
            Você pode me encontrar pelos canais abaixo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">
                  kaiorichard1145@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">
                  +55 (47) 98453-8664
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Localização</h3>
                <p className="text-sm text-muted-foreground">
                  Itajaí-SC, Brasil
                </p>
              </div>
            </div>
          </Card>
        </div>

        <footer className="mt-20 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 Kaio Richard Amaral Lisboa. Todos os direitos reservados.</p>
        </footer>
      </div>
    </section>
  )
}
