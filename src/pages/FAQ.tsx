
import React from 'react';
import Navigation from '@/components/Navigation';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is MPA Launcher?",
      answer: "MPA Launcher is a dedicated application designed to help players easily connect to IGI 2 multiplayer servers. It provides a seamless experience for finding games, downloading maps, and connecting with the community."
    },
    {
      question: "How do I install MPA Launcher?",
      answer: "Simply download the launcher from our downloads page, run the installer, and follow the on-screen instructions. The launcher will guide you through the setup process including game installation if needed."
    },
    {
      question: "Is MPA Launcher free to use?",
      answer: "Yes, MPA Launcher is completely free to download and use. We are a community-driven project dedicated to keeping the IGI 2 multiplayer experience alive and accessible to all."
    },
    {
      question: "What are the system requirements?",
      answer: "MPA Launcher requires Windows 7 or newer, 2GB RAM, 500MB disk space for the launcher itself, and a stable internet connection. The game may have additional requirements."
    },
    {
      question: "How do I report bugs or issues?",
      answer: "You can report bugs through our Discord server or by visiting the 'Support' section in the launcher. Please provide as much detail as possible about the issue you're experiencing."
    },
    {
      question: "Can I host my own server?",
      answer: "Yes, MPA Launcher includes tools for hosting your own server. Check out the server hosting guide in the launcher's help section for detailed instructions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mpa-darker to-black/90 -z-10 fixed"></div>
      
      <div className="container mx-auto px-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center py-12">
          <h1 className="text-4xl font-bold mb-10"><span className="text-mpa-blue">FAQ</span></h1>
          <div className="max-w-3xl w-full bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-0">
                  <AccordionTrigger className="text-white text-left py-4 hover:text-mpa-blue flex justify-between">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
