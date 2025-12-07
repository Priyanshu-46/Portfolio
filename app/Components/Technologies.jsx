import { RiJavaFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { 
  SiAnsible, SiApachekafka, SiDocker, SiGit, SiJavascript, SiJenkins,
  SiJira, SiKubernetes, SiLinux, SiMysql, SiRedis, SiSpringboot,
  SiTerraform
} from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration, y) => ({
  initial: { y: -10 },
  animate: {
    y: [y, -y],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = ({ isDarkMode }) => {
  return (
    <div className=" border-neutral-800 pb:24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl my-20"
      >
        Technology
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVariants(2.1, 10)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TiHtml5 size={50} className="text-7xl text-[#E34F26]" />
        </motion.div>

        <motion.div variants={iconVariants(2.4, 8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 size={50} className="text-7xl text-[#1572B6]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill size={50} className="text-7xl text-[#007396]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker size={50} className="text-7xl text-[#2496ED]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes size={50} className="text-7xl text-[#326CE5]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJenkins size={50} className="text-7xl text-[#D33833]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTerraform size={50} className="text-7xl text-[#844FBA]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAnsible size={50} className="text-7xl text-[#EE0000]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJira size={50} className="text-7xl text-[#2684FF]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit size={50} className="text-7xl text-[#F05032]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLinux size={50} className="text-7xl text-[#FCC624]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot size={50} className="text-7xl text-[#6DB33F]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedis size={50} className="text-7xl text-[#DC382D]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachekafka size={50} className="text-7xl text-[#000000]" />
        </motion.div>

        <motion.div variants={iconVariants(2.5, 15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql size={50} className="text-7xl text-[#4479A1]" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technologies;