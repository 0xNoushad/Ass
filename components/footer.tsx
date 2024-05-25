 
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

 
  export function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-200 transition-colors" href="#">
                  info@example.com
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 transition-colors" href="#">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span>123 Main St, Anytown USA</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Social</h4>
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-200 transition-colors" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Newsletter</h4>
            <p>Subscribe to our newsletter for updates and news.</p>
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </footer>
    )
  }
  

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
