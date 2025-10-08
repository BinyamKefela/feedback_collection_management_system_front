"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from '../../../../public/images/Rectangle 2.png'
import { useState } from 'react'
const Hero = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row  items-center justify-between px-10 md:px-40 py-16 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='max-w-lg space-y-4'>
                    <h1 className="text-5xl font-extrabold text-pink-600 leading-tight">
                        Rate Improve<br />Review<br />
                    </h1>
                    <p className="text-gray-600">
                        Your feedback collection shows us what works and what to improve.
                        Each review makes banking smoother and more personal.
                        Together, we create the future of better banking.
                    </p>
                </motion.div>
                <motion.div 
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.8}}
                 className='max-w-lg space-y-4'>
                    <Image src={HeroImage} alt="Feedback illustration"className="w-[380px] md:w-[480px]" priority></Image>
                 </motion.div>
            </section>
        </>
    )
}

export default Hero