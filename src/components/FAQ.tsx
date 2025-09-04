"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "What happens if I reduce my nodes?",
    answer: (
      <p>
        Your bill automatically adjusts — if you scale down, your costs go down
        with it.
      </p>
    ),
  },
  {
    question: "How does the “highest number of nodes per month” billing work?",
    answer: (
      <div>
        <p>
          We designed our billing to be <strong>fair and predictable</strong>{" "}
          while still reflecting the real usage of your Kubernetes clusters.
        </p>
        <ul className="mt-3 ml-5 list-disc">
          <li>
            At any given time, we measure the number of nodes where our agent is
            running.
          </li>
          <li>
            Instead of charging for every peak or fluctuation, we apply a{" "}
            <strong>24-hour smoothing window</strong>.
          </li>
          <li>
            If your cluster briefly spikes to a higher node count but drops back
            within a day, you won’t be billed for that spike.
          </li>
          <li>
            At the end of the month, we look at the{" "}
            <strong>highest sustained node count (after smoothing)</strong>.
          </li>
          <li>Your monthly bill is calculated as:</li>
          <ul className="mt-2 ml-5 list-disc">
            <li>
              <strong>0–10 nodes:</strong> $0 / month
            </li>
            <li>
              <strong>11–1000 nodes:</strong> $25 × (highest sustained node
              count)
            </li>
            <li>
              <strong>1000+ nodes:</strong> Custom pricing
            </li>
          </ul>
        </ul>

        <div className="mt-3">
          <strong>Example:</strong>
          <ul className="mt-2 ml-5 list-disc">
            <li>
              For most of the month, you run <strong>200 nodes</strong>.
            </li>
            <li>
              For 6 hours one day, you scale up to <strong>400 nodes</strong> to
              handle a traffic spike.
            </li>
            <li>
              Because the spike lasted less than 24 hours, your bill is
              calculated based on <strong>200 nodes</strong>, not 400.
            </li>
          </ul>
        </div>

        <p className="mt-3">
          This ensures you’re charged fairly for the capacity you actually rely
          on, while giving you flexibility for short-term scaling events.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need a plan if I just want the basics?",
    answer: (
      <p>
        No, the <strong>Basic plan is free</strong>. You’ll only pay the
        per-node cost for your agents.
      </p>
    ),
  },
  {
    question: "Can I try before committing?",
    answer: (
      <p>
        Yes! Start with the free <strong>Basic plan</strong> and scale up
        whenever you're ready.
      </p>
    ),
  },
  {
    question: "Do I need a credit card to start?",
    answer: (
      <div>
        <p>
          No — you can begin with the <strong>Basic plan (free forever)</strong>{" "}
          without adding a credit card.
        </p>
        <p className="mt-2">
          When you're ready to scale beyond 10 nodes or unlock premium features,
          you can upgrade at any time.
        </p>
      </div>
    ),
  },
  {
    question: "Can I switch plans anytime?",
    answer: (
      <div>
        <p>
          Yes. You can <strong>upgrade or downgrade</strong> your plan at any
          time.
        </p>
        <p className="mt-2">
          Changes are applied immediately, and billing adjusts automatically.
        </p>
      </div>
    ),
  },
  {
    question: "What support options do you provide?",
    answer: (
      <ul className="ml-5 list-disc">
        <li>
          <strong>Basic:</strong> Email support with a 48h response time.
        </li>
        <li>
          <strong>Starter:</strong> Faster response times + access to our
          knowledge base.
        </li>
        <li>
          <strong>Pro:</strong> Priority email support and private Slack access.
        </li>
        <li>
          <strong>Enterprise:</strong> Dedicated account manager and 24/7
          support SLA.
        </li>
      </ul>
    ),
  },
  {
    question: "What happens if my usage goes above 1000 nodes?",
    answer: (
      <div>
        <p>
          At that scale, we move into <strong>custom enterprise pricing</strong>
          .
        </p>
        <p className="mt-2">
          You’ll get a tailored package that includes unlimited nodes, advanced
          features, and dedicated support.
        </p>
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
