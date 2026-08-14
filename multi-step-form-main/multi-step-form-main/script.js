(function () {
  "use strict";


  const state = {
    step: 1,
    billing: "monthly", 
    plan: null,
    addons: new Set(),
  };

  const PLAN_NAMES = { arcade: "Arcade", advanced: "Advanced", pro: "Pro" };
  const ADDON_NAMES = {
    online: "Online service",
    storage: "Larger storage",
    profile: "Customizable profile",
  };


  const stepSections = document.querySelectorAll(".step");
  const stepListItems = document.querySelectorAll(".steps__item");

  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const form = document.getElementById("msForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const planCards = document.querySelectorAll(".plan-card");
  const planError = document.getElementById("planError");
  const billingSwitch = document.getElementById("billingSwitch");

  const addonCards = document.querySelectorAll(".addon-card");

  const changePlanBtn = document.getElementById("changePlanBtn");
}
)