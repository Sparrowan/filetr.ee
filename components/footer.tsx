import Link from "next/link";

export function Footer() {
	return (
		<footer className="mt-auto border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
			<div className="mx-auto max-w-7xl px-4 py-6">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-sm text-neutral-500 dark:text-neutral-400">
						© 2025 🌳Filetr.ee. All rights reserved.
					</p>
					<div className="flex gap-6">
						<Link
							href="/privacy"
							className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
						>
							Terms
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
