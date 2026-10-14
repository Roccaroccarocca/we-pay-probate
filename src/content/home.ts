// Public copy lives here for later revisions. Owner claims and testimonials are
// published only after verified details and permission have been supplied.
export const concerns = [
  {
    icon: "home",
    title: "An inherited home",
    text: "You’re not sure where to start or what to do with the property.",
  },
  {
    icon: "document",
    title: "Probate holding things up",
    text: "Estate or legal issues need to be resolved before the home can sell.",
  },
  {
    icon: "pin",
    title: "A home far from home",
    text: "You live elsewhere, but the inherited property is in South Florida.",
  },
  {
    icon: "key",
    title: "Repairs and belongings",
    text: "The house needs work or still holds a lifetime of possessions.",
  },
];
export const faqs = [
  [
    "Can I call before probate starts?",
    "Yes. Tell us about the home and where you are in the process. You don’t need to have every answer to begin a conversation. The estate’s status and the legal authority to sell must be reviewed before a sale can move forward.",
  ],
  [
    "What if I live outside Florida?",
    "You can start by phone from wherever you live. The home must be in Miami-Dade, Broward, or Palm Beach County. Depending on the estate and transaction, later steps may require signatures, notarization, or travel.",
  ],
  [
    "Do I need to repair or empty the house?",
    "We consider buying homes as-is, including homes needing repairs or containing belongings. You can discuss the property’s condition and any cleanout needs on the first call. What will be handled, and by whom, must be agreed before a purchase.",
  ],
  [
    "What does covering probate costs mean?",
    "Depending on the property and estate, an arrangement may be available to cover certain probate-related legal, court, or other costs. Coverage is subject to review and written terms; it is not an unconditional promise to pay every expense. Ask which costs are covered, any limits, and whether any repayment or other obligations apply.",
  ],
  [
    "What is the first right to offer and purchase?",
    "Our approach asks for the first right to offer and purchase the property as part of the proposed arrangement. The exact rights, time limits, and your obligations must be explained in a written agreement. Ask what happens if you decline an offer or the purchase does not proceed, including what happens to covered costs. Review the terms with a qualified attorney before agreeing.",
  ],
  [
    "Does the initial call obligate me to sell?",
    "No. The initial phone consultation is free and carries no obligation to sell. A later assistance or purchase agreement may create obligations, so review its written terms and get the advice you need before signing.",
  ],
  [
    "How long could the process take?",
    "A first conversation can help clarify the next steps, but probate itself may take time. Timing depends on the estate, title, paperwork, and required approvals. Once legal conditions are satisfied, we can discuss a closing date that works for you. No probate outcome or closing timeline is guaranteed.",
  ],
  [
    "Is this a law firm?",
    "No. We Pay Probate is a prospective property buyer. We discuss property assistance in connection with a possible purchase; we do not provide independent legal advice or act as a neutral adviser on every selling option. For probate questions and agreement review, consult a qualified Florida probate attorney.",
  ],
];

export interface VerifiedCredibility {
  ownerName: string;
  biography: string;
  photo: string;
  photoAlt: string;
  testimonials?: { quote: string; attribution: string }[];
}
// Populate only after the owner approves the facts, photo, and testimonial use.
export const credibility: VerifiedCredibility | null = null;
