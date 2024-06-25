import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function HomePage() {
  return (
    (<div>
      <section
        className="relative h-[80vh] bg-[url('/bg.webp')] bg-cover bg-center">

        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div
          className="container h-full flex flex-col justify-center items-start gap-6 px-4 md:px-6">
          <div className="max-w-2xl space-y-4">
            <h1
              className="text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl ">
              Discover the Best Events with EventEase
            </h1>
            <p className="text-lg text-primary-foreground/90 md:text-xl">
              Your personal assistant for finding and booking the perfect events.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About EventEase</h2>
              <p
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                EventEase is a cutting-edge platform that simplifies the process of finding and booking tickets for
                events. Our intelligent algorithm analyzes your preferences and provides personalized recommendations,
                ensuring you never miss out on the events that matter most to you.
              </p>
              <p
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With EventEase, you can easily browse through a wide range of events, from concerts and festivals to
                conferences and workshops. Our user-friendly interface and secure payment options make the booking
                process a breeze, so you can focus on enjoying the experience.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Explore Events
              </Link>
            </div>
            <img
              src="/second.webp"
              width="600"
              height="400"
              alt="EventEase Platform"
              className="rounded-xl object-cover" />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Events</h2>
              <p
                className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the hottest events in your area and beyond.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img
                  src="/fest.jpg"
                  width="400"
                  height="300"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[4/3]" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">Music Festival</h3>
                  <p className="text-muted-foreground">Experience the best of live music and entertainment.</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-primary font-medium">$99</div>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      Buy Tickets
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/tech.jpg"
                  width="400"
                  height="300"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[4/3]" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">Tech Conference</h3>
                  <p className="text-muted-foreground">
                    Explore the latest innovations and network with industry leaders.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-primary font-medium">$199</div>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      Buy Tickets
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/art.jpg"
                  width="400"
                  height="300"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[4/3]" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">Art Exhibition</h3>
                  <p className="text-muted-foreground">Immerse yourself in the world of contemporary art.</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-primary font-medium">$25</div>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      Buy Tickets
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/standup.jpg"
                  width="400"
                  height="300"
                  alt="Event Image"
                  className="rounded-t-lg object-cover w-full aspect-[4/3]" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">Comedy Show</h3>
                  <p className="text-muted-foreground">Laugh the night away with the best stand-up comedians.</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-primary font-medium">$35</div>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      Buy Tickets
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-muted/40 py-8">
        <div
          className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-semibold">EventEase</span>
          </div>
          <div className="text-sm text-muted-foreground">&copy; 2024 EventEase. All rights reserved.</div>
        </div>
      </footer>
    </div>)
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
