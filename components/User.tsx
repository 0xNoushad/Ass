// components/Users.jsx
export function Users() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container grid items-center justify-items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Hear from our satisfied customers about their experience with our product.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px]">
          <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “The customer service I received was exceptional. The support team went above and beyond to address my
              concerns.”
            </blockquote>
            <div>
              <div className="font-semibold">Jules Winnfield</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “I've been using this product for months and it's been a game-changer for my business. The features are
              top-notch and the user experience is seamless.”
            </blockquote>
            <div>
              <div className="font-semibold">Mia Khalifa</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CMO, Globex Corporation</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950">
            <blockquote className="text-lg font-semibold leading-snug">
              “This is the best product I've used in years. The team is responsive and the updates are always on point.
              Highly recommended!”
            </blockquote>
            <div>
              <div className="font-semibold">John Wick</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Founder, Tarasov Enterprises</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
