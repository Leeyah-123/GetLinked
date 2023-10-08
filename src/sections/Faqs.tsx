import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import faq_image from '../assets/images/home/cwok_casual_21 1.svg'
import SectionContainer from '../components/SectionContainer'
import { faqs } from '../utils/utils'

import star1 from '../assets/images/home/star1.svg'
import star2 from '../assets/images/home/star2.svg'
import star3 from '../assets/images/home/star3.svg'
import question from '../assets/images/home/_.png'

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleFaq = (index: number) => {
    if (index === activeFaq) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  return (
    <SectionContainer id="faqs" position="right">
      {/*  */}
      <div className="space-y-5 max-w-xl text-center md:text-left relative">
        <img
          src={star3}
          aria-hidden="true"
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-0 -left-20 mix-blend-hard-light -z-10"
        />
        <h5>
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
                    aria-hidden="false"
                    aria-labelledby={`panel${index + 1}-heading`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3"
                    transition={{ duration: 0.3 }}
                  >
                    {answer}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="relative pt-10">
        <div className="absolute -top-5 left-1/4 flex space-x-10 items-end">
          <img src={question} className="h-16" alt="" />
          <img src={question} className="w-16" alt="" />
          <img src={question} className="h-16" alt="" />
        </div>

        <img
          src={star3}
          aria-hidden="true"
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-28 left-20 mix-blend-hard-light -z-10"
        />
        <img
          src={star3}
          aria-hidden="true"
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-2 left-1/2 mix-blend-hard-light -z-10"
        />
        <img
          src={star2}
          aria-hidden="true"
          className="w-[3vw] lg:w-auto absolute pointer-events-none top-1/2 left-0 mix-blend-hard-light -z-10"
        />
        <img
          src={star1}
          aria-hidden="true"
          className="w-[3vw] lg:w-auto absolute pointer-events-none bottom-4 right-48 mix-blend-hard-light -z-10"
        />
        <img src={faq_image} alt="" className="h-full w-[700px]" loading="lazy" />
      </div>
    </SectionContainer>
  )
}

export default Faqs
