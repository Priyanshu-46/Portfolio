import { RiReactjsLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

import { FaBootstrap } from "react-icons/fa6";
import {  motion } from "motion/react";

const iconVariants = (duration,y) => ({
	initial: { y: -10 },
	animate: {
		y: [y,-y],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});


const Technologies = ({isDarkMode}) => {
	return (
		<div className=" border-neutral-800 pb:24">
			<motion.h1 whileInView={{ opacity: 1,y:0 }} initial={{ opacity: 0,y:-100 }} transition={{ duration: 1.5 }} className="text-center text-4xl my-20">Technology</motion.h1>
			<motion.div whileInView={{ opacity: 1 ,x:0}} initial={{ opacity: 0 ,x:-100}}  transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
				<motion.div variants={iconVariants(2.1,10)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<TiHtml5 size={50} className="text-7xl text-[#E34F26]" />
				</motion.div>
				<motion.div variants={iconVariants(2.4,8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<IoLogoCss3 size={50} className="text-7xl text-[#1572B6]" />
				</motion.div>
				<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>	<motion.div variants={iconVariants(2.5,15)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiJavascript size={50} className="text-7xl text-[#F7DF1E]" />
				</motion.div>
				
			</motion.div>
		</div>
	);
};
export default Technologies;
