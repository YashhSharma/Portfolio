import {RiReactjsLine} from "react-icons/ri"
import { TbBrandRedux } from "react-icons/tb";
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { animate, motion } from "framer-motion"
const iconVariants=(duration)=>({
  inital:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})
const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5 }}
       className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" 
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <TbBrandRedux className="text-7xl text-purple-500"></TbBrandRedux>
        </motion.div>


        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-500"></SiMongodb>
        </motion.div>


        <motion.div
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-red-700"></FaHtml5>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaCss3Alt className="text-7xl text-blue-700"></FaCss3Alt>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
