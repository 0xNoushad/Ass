
import { JSX, SVGProps } from "react"
import { Button } from "./button"


export function Price() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 flex items-center justify-center">
    <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:grid-cols-3 lg:gap-8">
        <div className="grid gap-6 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-md">
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Basic</h3>
            <p className="text-gray-500 dark:text-gray-400">$9/month</p>
          </div>
          <div className="grid gap-4">
            <p>Essential features for individuals and small teams.</p>
            <ul className="grid gap-2 text-left">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Basic analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Community support
              </li>
            </ul>
          </div>
          <Button className="w-full">Get Started</Button>
        </div>
        <div className="grid gap-6 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-md">
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-gray-500 dark:text-gray-400">$29/month</p>
          </div>
          <div className="grid gap-4">
            <p>Advanced features for growing teams and businesses.</p>
            <ul className="grid gap-2 text-left">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Collaboration tools
              </li>
            </ul>
          </div>
          <Button className="w-full">Get Started</Button>
        </div>
        <div className="grid gap-6 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-md">
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-gray-500 dark:text-gray-400">Contact us</p>
          </div>
          <div className="grid gap-4">
            <p>Custom solutions for large teams and enterprises.</p>
            <ul className="grid gap-2 text-left">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-green-500" />
                Custom integrations
              </li>
            </ul>
          </div>
          <Button className="w-full">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
