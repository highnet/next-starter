import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-12 py-24 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to your Next.js Starter</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A modern starter with Next.js, Tailwind CSS v4, shadcn/ui, and React 19
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/about">About Page</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
            shadcn/ui Documentation
          </a>
        </Button>
      </div>
    </div>
  )
}
