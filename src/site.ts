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
  // Set real asset paths when the supplied media files are available.
  media: {
    ownerPhoto: null as string | null,
    introVideo: {
      src: null as string | null,
      poster: null as string | null,
      captions: null as string | null,
      youtubeId: null as string | null,
      start: 0,
      end: 45,
    },
  },
};
