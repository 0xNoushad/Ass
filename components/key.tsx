 
import Link from "next/link"

export function Key() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 flex items-center justify-center">
    <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Ching?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the features that make Ching the ultimate solution for your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Intuitive Dashboard</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your projects with an easy-to-navigate interface.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Seamless Collaboration</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Collaborate in real-time with team members, clients, and stakeholders.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Advanced Analytics</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Gain insights with powerful analytics and reporting tools.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Custom Integrations</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Integrate with your favorite tools and apps effortlessly.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Secure and Reliable</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Keep your data safe with our top-notch security measures.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
