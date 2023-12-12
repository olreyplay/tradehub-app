import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold text-white">
        404 Error: Page Unavailable
      </h2>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-sky-700 px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-neutral-900"
      >
        Go Back
      </Link>
    </main>
  );
}
