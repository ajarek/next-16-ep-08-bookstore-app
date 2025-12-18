import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
	return (
		<main className="max-w-5xl mx-auto px-5 py-20 min-h-[60vh] flex items-center justify-center">
			<div className="w-full flex flex-col items-center text-center gap-6">
				<div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center shadow-md">
					<Image
						src="/images/milk_honey.avif"
						alt="Zgubiona książka - obrazek humorystyczny"
						width={160}
						height={160}
						className="object-cover rounded-md"
					/>
				</div>

				<h1 className="text-4xl font-serif text-primary">Oops - page not found</h1>

				<p className="max-w-xl text-muted-foreground">
					It appears this page is unavailable or the address is incorrect. Try returning to the store or verifying the URL.
				</p>

				<div className="flex gap-3">
					<Link href="/">
						<Button>Return to store</Button>
					</Link>
					<Link href="/library">
						<Button variant="outline">Browse library</Button>
					</Link>
				</div>

				<p className="text-xl text-muted-foreground">Code 404 - don&apos;t worry, the books will come back.</p>
			</div>
		</main>
	)
}

