 
export function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Ching</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Dedicated to helping teams streamline their workflow and enhance productivity since Ching.
          </p>
        </div>
        <img
          alt="Team photo"
          className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height={600}
          src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-60126,resizemode-75,msid-46730038/magazines/panache/how-albert-einstein-engaged-with-india-why-some-indian-scientists-are-reimagining-his-notion-of-gravity.jpg"
          width={1200}
        />
      </div>
    </section>
  )
}

