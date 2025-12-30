// ===== BOOT SCREEN SIMULATION =====
const bootScreen = document.getElementById("boot-screen");
const bootProgressBar = document.getElementById("boot-progress-bar");
const bootStatusLine = document.getElementById("boot-status-line");

// Simple fake loading sequence
let bootProgress = 0;
const bootSteps = [
  "> status: LOADING_MODULES …",
  "> loading: CLOUD_STACK [AZURE / AWS / GCP]",
  "> loading: DATA_PIPELINES [ADF / DATABRICKS / SNOWFLAKE]",
  "> loading: DEVOPS [AZURE_DEVOPS / TERRAFORM / ANSIBLE]",
  "> status: SYSTEM_READY"
];

let bootStepIndex = 0;

const bootInterval = setInterval(() => {
  bootProgress += Math.random() * 18 + 8; // move 8–26% each tick
  if (bootProgress > 100) bootProgress = 100;
  bootProgressBar.style.width = bootProgress + "%";

  if (bootStepIndex < bootSteps.length) {
    bootStatusLine.textContent = bootSteps[bootStepIndex];
    bootStepIndex++;
  }

  if (bootProgress >= 100) {
    clearInterval(bootInterval);
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      bootScreen.style.pointerEvents = "none";
      setTimeout(() => {
        bootScreen.style.display = "none";
      }, 400);
    }, 400);
  }
}, 500);

// ===== OS CLOCK =====
const osClock = document.getElementById("os-clock");

function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  osClock.textContent = `${hh}:${mm}`;
}

setInterval(updateClock, 1000);
updateClock();

// ===== DOCK NAVIGATION (SMOOTH SCROLL) =====
const dockItems = document.querySelectorAll(".dock-item");

dockItems.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetSelector = btn.getAttribute("data-target");
    if (!targetSelector) {
      // normal link between pages, let browser handle it
      return;
    }
    e.preventDefault();
    const target = document.querySelector(targetSelector);
    if (!target) return;
    dockItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});



// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ===== HERO ROTATING TEXT =====
const rotatingText = document.getElementById("hero-rotating-text");
const roles = [
  "AZURE CLOUD SOLUTIONS ARCHITECT",
  "MULTI-CLOUD & DATA ENGINEER",
  "UNIX / VMWARE / IBM POWER SME",
  "TRANSFORMATION & MIGRATION LEAD"
];

let roleIndex = 0;

function updateRole() {
  if (!rotatingText) return;
  rotatingText.style.opacity = "0";
  setTimeout(() => {
    rotatingText.textContent = roles[roleIndex];
    rotatingText.style.opacity = "1";
    roleIndex = (roleIndex + 1) % roles.length;
  }, 200);
}

setInterval(updateRole, 2600);
updateRole();

// ===== MINI TERMINAL APPEND LOGS =====
const miniTermBody = document.getElementById("mini-term-body");
const miniLogs = [
  "> loading: HCS_AZURE_PLATFORM … OK",
  "> loading: MIGRATION_PLAYBOOKS … OK",
  "> loading: DATA_PIPELINE_LIBRARY … OK",
  "> ready: ACCEPTING_ENTERPRISE_CHALLENGES"
];

let miniLogIndex = 0;

setInterval(() => {
  if (!miniTermBody) return;
  if (miniLogIndex >= miniLogs.length) return;
  const line = document.createElement("div");
  line.textContent = miniLogs[miniLogIndex];
  miniTermBody.appendChild(line);
  miniTermBody.scrollTop = miniTermBody.scrollHeight;
  miniLogIndex++;
}, 3200);

// ===== CONTACT FORM (PREVENT REAL SUBMIT) =====
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been recorded in ARCH_23 OS.");
    contactForm.reset();
  });
}

// ===== FOOTER YEAR =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
