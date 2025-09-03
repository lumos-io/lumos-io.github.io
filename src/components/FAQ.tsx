"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What happens if I reduce my nodes?",
    answer:
      "Your bill automatically adjusts — if you scale down, your costs go down with it.",
  },
  {
    question: "Do I need a plan if I just want the basics?",
    answer:
      "No, the Basic plan is free. You’ll only pay the per-node cost for your agents.",
  },
  {
    question: "Can I try before committing?",
    answer:
      "Yes! Start with the free Basic plan and scale up whenever you're ready.",
  },
  {
    question: "What if I need more than 1,000 nodes?",
    answer:
      "You can upgrade to the Enterprise plan for unlimited nodes and dedicated support.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
