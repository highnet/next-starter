import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-12 py-24 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          This is the about page of your Next.js starter project.
        </p>
      </div>
      <div>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
