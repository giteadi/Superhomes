import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of receipt for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping usually takes 5-7 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to select countries worldwide.",
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking link via email once your order is shipped.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="mt-16 px-10 text-center">
      <h2 className="text-4xl font-bold text-black">
        <span className="italic text-yellow-500">Have</span> QUESTIONS?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md overflow-hidden transition-all"
          >
            <div
              className="flex justify-between items-center h-12 px-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-yellow-500" />
              ) : (
                <FaChevronDown className="text-yellow-500" />
              )}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-40 p-4' : 'max-h-0 p-0'
              } overflow-hidden`}
            >
              <p className="text-left">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
