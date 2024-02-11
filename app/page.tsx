"use client";
import Image from "next/image";
import CustomCard from "@/components/Card";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import GraduationCapIcon from "@/components/GraduationCapIcon";
import BriefcaseIcon from "@/components/BriefcaseIcon";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row pt:8 lg:pt-32 px-8 lg:px-60 2xl:px-80">
      <div className="flex-1 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex lg:flex-col gap-6 lg:px-16 from-red-600 via-green-600 to-orange-400 rounded-3xl pt-8"
        >
          <Card
            isBlurred
            className="border-none bg-background/60 h-full w-full"
            shadow="sm"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
              className="flex flex-start rounded-2xl shadow-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] w-fit py-8 px-16"
            >
              <Image
                src={"https://i.imgur.com/tanpLoZ.jpeg"}
                alt="Lubasi"
                height={250}
                width={250}
                className="rounded-full aspect-square object-cover shadow-xl"
              />
            </motion.div>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 w-full lg:w-4/5 pt-8 lg:pt-20">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Hey it&apos;s Lubasi
              </h1>
              <h2 className="text-3xl font-medium italic uppercase">
                Pre-<span className="text-orange-400">Law</span>
              </h2>
              <p className="text-lg text-gray-600 text-center lg:text-left">
                I am a Goal-oriented student with a strong interest in Criminal
                Justice aiming to build a career rooted in advocacy and ethical
                practice.
              </p>
            </div>
            <motion.div className="flex justify-center lg:justify-start gap-4 pt-8">
              <SocialIcon bgColor="gray" url="https://linkedin.com" />
              <SocialIcon bgColor="gray" url="https://instagram.com" />
              <SocialIcon bgColor="gray" url="https://x.com" />
            </motion.div>
          </Card>
        </motion.div>
      </div>
      <div className="flex-1 flex flex-col pt-20 lg:pt-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-row justify-center lg:justify-start gap-3"
        >
          <GraduationCapIcon className="h-9 w-9 text-red-600" />
          <h3 className="text-3xl font-semibold pb-8 uppercase">Education</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          <CustomCard
            src={"https://i.imgur.com/2luP2tr.jpeg"}
            title="Andrews University"
            description="Honors graduate with a B.A Political Science"
          />
          <CustomCard
            src={"https://i.imgur.com/UDDdZ75.jpeg"}
            title="Forest Lake Academy"
            description="High Honors graduate"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="flex flex-row justify-center lg:justify-start gap-3 pb-8 pt-16"
        >
          <BriefcaseIcon className="h-9 w-9 text-amber-900" />
          <h3 className="text-3xl font-semibold uppercase">Experience</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          <CustomCard
            src={"https://i.imgur.com/BgPBFcL.jpeg"}
            title="Berrien County Circuit Court"
            description="Youth Specialist"
          />
          <CustomCard
            src={"https://i.imgur.com/JhHRAqU.jpeg"}
            title="Fox Valley Christian Action"
            description="Legal Intern"
          />
        </motion.div>
      </div>
    </main>
  );
}
