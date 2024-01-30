import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful times from 69+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Browse events</Link>
            </Button>
          </div>
          <Image
            className="max-h-[70vh] object-contain objet-center 2xl:max-h-[50vh]"
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold ">
          Trusted by <br />
          Thousands of events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search Category Filter
        </div>
      </section>
    </>
  );
};

export default page;
