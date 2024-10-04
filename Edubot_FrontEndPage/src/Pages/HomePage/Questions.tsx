import React, { useState } from 'react';


interface FaqItemProps {
  question: string;
  answer: string;
}


const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="border-b border-[#9D9FA1] bg-[#FDF4E0] p-1"> 
      <button
        className="w-full text-left py-4 flex justify-between items-center transition-transform duration-500"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <span className="font-medium text-lg ">{question}</span>
        <span className={`transform ${isOpen ? '-translate-x-2' : ''} text-yellow-500 lg:translate-x-[-30px] text-4xl transition-transform duration-300`}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="text-gray-600 py-2">{answer}</p>
      </div>
    </div>
  );
};


const Questions: React.FC = () => {

  const faqs = [
    {
      question: 'How can I start learning from the platform?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.',
    },
    {
      question: 'Can I send do all my practical at a time?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
    {
      question: 'How do I ask for help and guidance?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam.',
    },
    {
      question: 'Why is it important to learn with trend and technology?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    },
  ];

  return (
    <div className="container mx-auto px-4 ">
  
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Got Questions?{' '}
        <span className="text-yellow-500">We’ve got all<br/> your answers!</span>
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 bg-[#FDF4E0] rounded-tl-3xl rounded-br-3xl">
        <div className="border border-[#FDF4E0] rounded-tl-3xl rounded-br-3xl p-6">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
