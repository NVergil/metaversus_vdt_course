'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-full"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-[20%] right-[10%] w-[7%] h-auto p-[0.3%]">
          <img src="people-01.png" alt="people" className="w-full h-full blur-lg" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] w-[7%] h-auto p-[0.3%] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[7%] left-[7%] w-[7%] h-auto p-[0.3%]">
          <img src="people-02.png" alt="people" className="w-full h-full blur-lg" />
        </div>
        <div className="absolute top-[7%] left-[7%] w-[7%] h-auto p-[0.3%] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[30%] left-[45%] w-[7%] h-auto p-[0.3%]">
          <img src="people-03.png" alt="people" className="w-full h-full blur-lg" />
        </div>
        <div className="absolute bottom-[30%] left-[45%] w-[7%] h-auto p-[0.3%] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
