'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <h1>Lets build my website 2.0</h1>
      <div className="flex flex-wrap justify-between items-center p-10 ">
        <div className="w-6/12">
          <p className="text-3xl font-bold">Santiago Giraldo</p>
          <p className="text-xl font-semibold">
            Student, Orientation Leader (NSE), Dean&apos;s Leader (School of
            Computing)
          </p>
          <p className="text-lg">
            Hi! My name is Santiago Giraldo, and I am a Junior Computer Science
            major with a Mathematics and Spanish minor here at the University of
            Nebraska-Lincoln. I am originally from Medellin, Colombia, and moved
            to the small town of Cambridge, Nebraska at the age of ten. This
            move was a substantial part of my life and at times I was unsure
            about the moving process, learning a brand new language, and
            attending a new school. Thankfully, I was welcomed into the
            community and could teach myself English in what some would consider
            “incredibly fast”. Now, I am to the point where new people I meet
            cannot believe that I am not from the United States due to my lack
            of accent. However, I have been able to maintain my fluency in
            Spanish and continue to improve my English vocabulary more and more.
            I graduated from Cambridge High School with a class size of thirty
            and was super excited about continuing my education at Nebraska.
          </p>
        </div>
        <div className="w-6/12">
          <Image
            src="/assets/images/santiHeadshot.jpg"
            alt="Santiago Giraldo"
            className="myHeadStyle"
            width={1000}
            height={300}
          />
          <p className="mt-0 text-base text-center p-2 bg-gray-200">
            Santiago Giraldo | Photos taken for NSE
          </p>
        </div>
        {/* <div className="main-bottom"> */}
        <div className="w-full mt-5 ml-10">
          <p className="text-2xl font-bold">
            Courses Taken & Scheduled to Take
          </p>
          <p className="text-lg font-semibold">
            Not sure what these mean?&nbsp;
            <a
              href="https://catalog.unl.edu/undergraduate/courses/csce/"
              target="_blank"
              rel="noreferrer"
            >
              Click here!
            </a>
          </p>
          <ul>
            <li>
              Fall 2020 - CSCE 155, CSCE 10, MATH 106, ENGL 277, ECON 200, CASC
              191
            </li>
            <li>
              Spring 2021 - CSCE 156, CSCE 235, MATH 107, MATH 191, CASC 191
            </li>
            <li>Fall 2021 - CSCE 310, CSCE 251, GEOG 155, CASC 191</li>
            <li>
              Spring 2022 - CSCE 231, CSCE 310, MATH 314, SPAN 300A, UGEP 102,
              CASC 191
            </li>
            <li>
              Fall 2022 - CSCE 361, CSCE 428, MATH 380, SPAN 306, CASC 191
            </li>
            <li>
              Spring 2023 - CSCE 322, CSCE 464, GEOL 101, SPAN 621, CASC 191
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
