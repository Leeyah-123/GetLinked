import privacyImage from '../assets/images/home/08 1.png';
import lock from '../assets/images/home/Vector.png';
import check from '../assets/images/home/list terms.png';
import { Button } from '../components/Buttons';
import SectionContainer from '../components/SectionContainer';

const Privacy = () => {
  return (
    <SectionContainer>
      <div className="text-center py-20 lg:text-left">
        <div className="grid lg:grid-cols-2 gap-[50px]">
          <section className="max-w-2xl">
            <div className="text-white relative mb-14">
              <h5 className="text-[6vw] font-medium clash-display lg:font-semibold lg:mb-5 lg:text-4xl">
                Privacy Policy and <br />
                <span className="text-[var(--color-3)]">Terms</span>
              </h5>
              <small className="opacity-80 lg:opacity-1 lg:font-medium">
                Last updated on September 12, 2023
              </small>

              <p className="text-[3.4vw] mt-10 font-medium lg:text-sm">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>

            <div className="font-medium border-[1px] border-[var(--color-3)] bg-white/[0.02] w-full max-w-[569px] py-[59px] rounded-[5px]">
              <p className="text-white text-[3.4vw] px-[15px] lg:text-sm lg:px-[72px] leading-[30px] pb-[24px]">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="pl-[22px] lg:pl-[72px] pr-[22px] lg:pr-[39px]">
                <h1 className="text-left text-[4vw] lg:text-lg relative z-2 text-[var(--color-3)] font-bold">
                  Licensing Policy{' '}
                </h1>
                <p className="text-left text-white text-[3.5vw] lg:text-sm font-semibold leading-[30px]">
                  Here are terms of our Standard License:
                </p>
                <ul className="flex flex-col gap-4 pt-5 pb-6 text-left text-[3.4vw] lg:text-sm">
                  <li className="flex gap-4">
                    <img
                      src={check}
                      alt="Checked"
                      className="w-[17px] h-[17px] mt-2"
                    />
                    <p className="text-white leading-[30text-[14px]px]">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <img
                      src={check}
                      alt="Checked"
                      className="w-[17px] h-[17px] mt-2"
                    />
                    <p className="text-white leading-[30text-[14px]px]">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </li>
                </ul>
                <Button className="mx-auto">Read More</Button>
              </div>
            </div>
          </section>
          <section>
            <figure className="flex relative h-full">
              <img src={privacyImage} alt="Privacy" className="self-end" />
              <img src={lock} alt="Safeguard" className="absolute top-0" />
            </figure>
          </section>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Privacy;
