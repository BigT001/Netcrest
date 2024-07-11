import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MaxWidthWrapper from "./MaxWidthWrapper"

export function Newsletter() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center mt-40 mb-10">
        <h1 className="font-bold text-2xl">Subcribe to our News letter</h1>
        <p  className="text-center mb-5">for weekly tech and business insight.</p>
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="relative px-6 py-3 ml-2 text-lg border-2 
                  border-blue-900 bg-blue-800 text-white"
                >
                  <a href="/#">
                    Subscribe
                  </a>
                </Button>
    </div>
    </MaxWidthWrapper>
  )
}
