import { useState } from 'react'
import faq_image from '../assets/images/cwok_casual_21 1.png'
import { faqs } from '../utils/utils'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

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
    <section className="flex flex-col lg:flex-row pb-10 items-center justify-around space-y-10 md:space-y-0 min-h-[700px]">
      {/*  */}
      <div className="grow space-y-5 max-w-xl text-center md:text-left">
        <h5 className="text-4xl font-semibold">
          Frequently Asked
          <br />
          <span className="text-magenta">Questions</span>
        </h5>
        <p>
          We got answers to the questions that you might want to ask about{' '}
          <span className="font-semibold">getlinked Hackathon 1.0</span>
        </p>

        <div className="">
          {faqs.map(({ answer, question }, index) => (
            <div key={index} className="my-10">
              <div
                className="flex justify-between border-b border-magenta pb-3 cursor-pointer"
                onClick={() => handleFaq(index)}
              >
                <p className="leading-tight">{question}</p>
                <span className="text-magenta">
                  {index === activeFaq ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>

              <AnimatePresence>
                {index === activeFaq ? (
                  <motion.div
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
    </section>
  )
}

export default Faqs
