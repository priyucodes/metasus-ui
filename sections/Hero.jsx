'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import coverImage from '../public/cover.png';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          className={`${styles.heroHeading}`}
          variants={textVariant(1.1)}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}>Ma</h1>
          {/* border helps it make it longer D, rounded r high */}
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src={coverImage}
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          alt="cover"
        />
        {/* https://nextjs.org/docs/api-reference/next/link */}
        {/* https://stackoverflow.com/questions/71398373/next-js-is-it-possible-to-scroll-to-an-id-on-the-page-without-changing-the-url */}
        {/* Cannot find to add that smooth scroll to section ID(#) without messing up with router or vanilla js in useEffect */}
        {/* <Link href="#explore" scroll={false} passHref> */}
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              width={155}
              height={155}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
