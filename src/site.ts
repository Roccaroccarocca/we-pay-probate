// Central controls for content, search visibility, and analytics.
export const site = {
  name: "We Pay Probate",
  phone: "954-320-6336",
  phoneHref: "tel:+19543206336",
  productionUrl: "https://wepayprobate.com",
  // Keep the separate review build out of search. Set PUBLIC_INDEXABLE=true only at launch.
  indexable: import.meta.env.PUBLIC_INDEXABLE === "true",
  gaId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "",
  counties: ["Miami-Dade", "Broward", "Palm Beach"],
};
