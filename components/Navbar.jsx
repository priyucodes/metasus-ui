'use client';

// our dependency(like framer motion) uses react client side components like useState or more so need to make the whole component client side
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
// import SearchSvg from '../public/search.svg';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0  gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        width={21}
        height={21}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METARSUS
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        className="w-6 h-6 object-contain"
        width={24}
        height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;
