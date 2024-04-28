"use client";
import FeaturedCourses from "@/components/homepage/FeaturedCourses";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/homepage/Navbar";
import NewsLetter from "@/components/homepage/NewsLetter";
import PricingSection from "@/components/homepage/PricingSection";
import Stats from "@/components/homepage/Stats";
import Testimonials from "@/components/homepage/Testimonials";
import WhoWeAre from "@/components/homepage/WhoWeAre";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="w-full ">
      <div className="l-container">
        <div className="w-full">
          {/* NAVBAR */}
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>

          {/* HERO SECTION */}
          <div className="">
            <Hero />
          </div>

          {/* STATS SECTION */}
          <div className="">
            <Stats />
          </div>

          {/* WHO WE ARE SECTION */}
          <div className="">
            <WhoWeAre />
          </div>

          {/*FEATURED COURSES SECTION */}
          <div className="">
            <FeaturedCourses />
          </div>

          {/*FEATURED COURSES SECTION */}
          <div className="">
            <PricingSection />
          </div>

        </div>
      </div>


      {/*WHAT PEOPLE THINK */}
      <div className="">
        <Testimonials />
      </div>

      {/* SUBSCRIBE */}
      <div className="">
        <NewsLetter />
      </div>


      {/* SUBSCRIBE */}
      <div className="">
        <Footer />
      </div>


    </main>
  );
}
