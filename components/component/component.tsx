import Link from "next/link"
import { Input } from "@/components/ui/input"
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <p className="text-sm font-medium hover:underline underline-offset-4">Ian</p>
          <span className="sr-only">Ian Ale Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Ian Ale Hansyah</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Im a backend developer with a passion for creating a web applications.
                </p>
                <Link
  href="/CV.pdf"
  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  prefetch={false}
  download
>
  Download CV
</Link>

              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/snapedit_1720212564037.jpg~2.png"
                width="400"
                height="400"
                alt="John Doe"
                className="rounded-full w-[300px] h-[300px] object-cover"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Background</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise lies in languages such as PHP and JavaScript, and I have extensive experience working with frameworks like Laravel and NextJs. I am adept at designing and implementing RESTful APIs, optimizing database queries, and ensuring seamless communication between the frontend and backend.
              During my academic journey and professional experiences, I have developed a keen understanding of best practices in software development, including writing clean, maintainable code and conducting comprehensive testing to ensure the reliability and efficiency of the applications I work on. My approach to development is grounded in a strong foundation of theory and practice, which I continually enhance by staying updated with the latest industry trends and technologies.
              </p>
            </div>
            <div className="space-y-4">
              
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What I Can Do</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Front-end</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Next Js</li>
                    <li>Tailwind Css</li>
                    <li>HTML/CSS</li>
                    <li>Boostrap</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Back-end</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Laravel</li>
                    <li>Express Js</li>
                    <li>Next Js</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Databases</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Tools</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Github</li>
                    <li>Canva</li>
                    <li>AWS</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Portfolio</h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent projects that showcase my skills and creativity.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105">
                <img
                  src="/new .png"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">E-Commerce Coffe Shop</h3>
                  <p className="text-muted-foreground">
                  Coffee ordering website using Laravel and MySql
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/ianbom/coffe-shop.git"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105">
                <img
                  src="/rental.png"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Rent a Vechile</h3>
                  <p className="text-muted-foreground">
                  A website for vehicle rental reservations and vehicle management using Next Js and Vercel PostgreSql
                  </p>
                  <div className="flex gap-4">
                  <Link
                      href="https://rental-nextjs.vercel.app/"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="https://github.com/ianbom/rental-nextjs.git"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105">
                <img
                  src="/Picsart_24-07-16_00-53-21-426.jpg"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">E-Clinic PENS</h3>
                  <p className="text-muted-foreground">
                  PENS clinic and patient management mobile application using Flutter and Laravel
                  </p>
                  <div className="flex gap-4">

                    <Link
                      href="https://github.com/ianbom/klinik-pens.git"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let`s Work Together</h2>
      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        I`m always excited to take on new projects and collaborate with talented individuals. Feel free to reach
        out to me through the form below or via email.
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Email Me
        </Link>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/ianale._/" className="text-muted-foreground hover:underline" prefetch={false}>
            <InstagramLogoIcon className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/ianbom" className="text-muted-foreground hover:underline" prefetch={false}>
            <GitHubLogoIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <strong>Phone Number:</strong> +62 812 3391 4116 
        </p>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <strong>Domicile:</strong> Surabaya, Indonesia
        </p>
      </div>
    </div>
    <div className="bg-background rounded-lg shadow-sm p-6">
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message" rows={4} required />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  </div>
</section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Ian Ale. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage;


