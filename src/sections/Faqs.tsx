import { useState } from 'react';
import faq_image from '../assets/images/home/cwok_casual_21 1.svg';
import { faqs } from '../utils/utils';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFaq = (index: number) => {
    if (index === activeFaq) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <SectionContainer id="faqs" position="right">
      {/*  */}
      <div className="text-[3.4vw] grow space-y-5 max-w-xl text-center md:text-left lg:text-sm">
        <h5 className="text-xl font-bold clash-display lg:text-3xl">
          Frequently Asked
          <br />
          <span className="text-[var(--color-3)]">Questions</span>
        </h5>
        <p>
          We got answers to the questions that you might want to ask about{' '}
          <span className="font-semibold">getlinked Hackathon 1.0</span>
        </p>

        <div>
          {faqs.map(({ answer, question }, index) => (
            <div key={index} className="my-10">
              <button
                aria-controls={`panel${index + 1}-content`}
                aria-expanded={index === activeFaq}
                className="flex w-full justify-between border-b border-[var(--color-3)] pb-3 cursor-pointer"
                onClick={() => handleFaq(index)}
              >
                <p id={`panel${index + 1}-heading`} className="leading-tight">
                  {question}
                </p>
                <span className="text-[var(--color-3)] ml-2" aria-hidden="true">
                  {index === activeFaq ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </button>

              <AnimatePresence>
                {index === activeFaq ? (
                  <motion.div
                    id={`panel${index + 1}-content`}
                    role="region"
                    aria-hidden={false}
                    aria-labelledby={`panel${index + 1}-heading`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3"
                    transition={{ duration: 0.5 }}
                  >
                    {answer}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <img src={faq_image} alt="" className="h-full w-[700px]" />
    </SectionContainer>
  );
};

export default Faqs;
