'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Suprodip Bhattacharjee, a fullstack developer from India.
          I&apos;ve been learning programming for a few years and I enjoy
          building scalable and modern applications. My favorite part of
          programming is solving problems and turning ideas into working
          solutions. Over time, I&apos;ve worked on both personal and
          collaborative projects that helped me strengthen my skills. My core
          stack includes React, Next.js, Node.js, Express.js, Tailwind CSS,
          MongoDB, and SQL. I also have a strong foundation in C, C++,
          JavaScript, and Bash.
        </p>
        <p>
          I&apos;m always eager to learn new technologies and open to
          opportunities where I can contribute, grow, and build impactful
          software. If you have an opportunity that matches my skills and
          interests, feel free to reach out.
        </p>
      </div>

      <Skills />
    </motion.section>
  );
};
