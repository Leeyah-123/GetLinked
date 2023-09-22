import { RiTwitterXFill } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const criterias = [
  {
    title: 'innovation and creativity',
    description:
      'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
  },
  {
    title: 'Functionality',
    description:
      'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.',
  },
  {
    title: 'Impact and Relevance',
    description:
      'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
  },
  {
    title: 'Technical Complexity',
    description:
      'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.',
  },
  {
    title: 'Adherence to Hackathon Rules',
    description:
      'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.',
  },
];

export const faqs = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
  {
    question: 'Can I join a team or do I have to come with one?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
  {
    question: 'What happens after the hackathon ends',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odio voluptatibus recusandae, quos a, laborum at tempore sunt ipsum eos aliquid vero facere! Veniam totam natus distinctio quod reprehenderit nihil!',
  },
];

export const timelines = [
  {
    title: 'Hackathon Announcement',
    description:
      'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    date: 'November 18, 2023',
  },
  {
    title: 'Teams Registration begins',
    description:
      'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    date: 'November 18, 2023',
  },
  {
    title: 'Teams Registration beginsTeams Registration ends',
    description: 'Interested Participants are no longer Allowed to register',
    date: 'November 18, 2023',
  },
  {
    title: 'Announcement of the accepted teams and ideas',
    description:
      'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    date: 'November 18, 2023',
  },
  {
    title: 'Getlinked Hackathon 1.0 Offically Begins',
    description:
      'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    date: 'November 18, 2023',
  },
  {
    title: 'Demo Day',
    description:
      'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
    date: 'November 18, 2023',
  },
];

export const socialLinks = [
  {
    link: '',
    Icon: FaInstagram,
  },
  {
    link: '',
    Icon: RiTwitterXFill,
  },
  {
    link: '',
    Icon: FaFacebookF,
  },
  {
    link: '',
    Icon: FaLinkedinIn,
  },
];

export const getFocusableElements = (
  parent?: HTMLElement | null
): HTMLElement[] => {
  if (!parent) return [];

  return (
    Array.from(
      parent.querySelectorAll(
        'a[href], button, input, textarea, select, details,[tabindex]'
      )
    )
      .filter(
        (el) =>
          el.getAttribute('tabindex') !== '-1' &&
          !el.hasAttribute('disabled') &&
          !el.getAttribute('aria-hidden')
      )
      // sort tabindexes
      .sort((a, b) => {
        const aIndex = Number(a.getAttribute('tabindex')) ?? 0; // no `tabindex` means `tabindex=0` on a focusable element
        const bIndex = Number(b.getAttribute('tabindex')) ?? 0;
        if (aIndex === bIndex) return 0;
        if (aIndex === 0) return 1;
        if (bIndex === 0) return -1;
        return aIndex < bIndex ? -1 : 1;
      }) as HTMLElement[]
  );
};

export const nextFocusable = (elements: HTMLElement[], forward = true) => {
  const currentIndex = elements.findIndex((e) => e === document.activeElement);
  let nextIndex = 0;

  if (currentIndex > -1) {
    if (forward) {
      nextIndex = currentIndex < elements.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : elements.length - 1;
    }
  }

  elements[nextIndex]?.focus();
};
