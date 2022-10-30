/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
  "particles-js",
  "../../assets/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

const homePageTL = gsap.timeline({ delay: 0.5 });
homePageTL.to(".header-1", { duration: 1, ease: "expo.out", y: 0, opacity: 1 });
homePageTL.to(
  ".header-2",
  { duration: 1, ease: "expo.out", y: 0, opacity: 1 },
  "-=0.8"
);
homePageTL.to(
  ".header-3",
  { duration: 1, ease: "expo.out", y: 0, opacity: 1 },
  "-=0.8"
);
homePageTL.to(
  ".header-4",
  { duration: 1, ease: "expo.out", y: 0, opacity: 1 },
  "-=0.9"
);
homePageTL.to(
  ".header-5",
  { duration: 1, ease: "back.out", y: 0, opacity: 1 },
  "-=0.9"
);

const projectsTL = gsap.timeline({ delay: 0.5 });
projectsTL.to(".project-header", {
  duration: 1,
  ease: "expo.out",
  y: 0,
  opacity: 1,
});
projectsTL.to(
  ".project-card-1",
  {
    duration: 0.5,
    ease: "back.out",
    y: 0,
    opacity: 1,
  },
  "-=0.5"
);
projectsTL.to(
  ".project-card-2",
  { duration: 0.5, ease: "back.out", y: 0, opacity: 1 },
  "-=0.4"
);
projectsTL.to(
  ".project-card-3",
  { duration: 0.5, ease: "back.out", y: 0, opacity: 1 },
  "-=0.4"
);
