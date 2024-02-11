"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomCard(props: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col w-full lg:w-[50%] lg:max-w-[50%] border border-gray-50 rounded-2xl shadow-md"
    >
      <h3 className="text-xl pt-8 font-bold px-8">
        {props.title ?? "Andrews University"}
      </h3>
      <p className="px-8 text-gray-600">{props.description ?? "Test"}</p>
      <div className="px-4 py-4 m-auto h-[70%] w-[100%] aspect-video relative">
        <Image
          src={props.src}
          alt=""
          // fill
          // objectFit="cover"
          width={200}
          height={200}
          style={{ width: "100%", height: "100%" }}
          className="rounded-lg shadow-sm"
        />
      </div>
    </motion.div>
  );
}