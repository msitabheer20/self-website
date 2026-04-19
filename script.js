var technicalSkillsData = [
  {
    heading: "FRONTEND:",
    items: [
      { label: "HTML5", icon: "assets/stack/html.png" },
      { label: "CSS3", icon: "assets/stack/css.jpeg" },
      { label: "JAVASCRIPT", icon: "assets/stack/js.svg" },
      { label: "REACT.JS", icon: "assets/stack/react.png" },
      { label: "NEXT.JS", icon: "assets/stack/nextjs.svg" },
      { label: "TYPESCRIPT", icon: "assets/stack/typescript.png" },
      { label: "TAILWIND CSS", icon: "assets/stack/tailwind.png" }
    ]
  },
  {
    heading: "BACKEND:",
    items: [
      { label: "NODEJS", icon: "assets/stack/nodejs.png" },
      { label: "EXPRESS.JS", icon: "assets/stack/expressjs.jpg" },
      { label: "PYTHON", icon: "assets/stack/python.png" },
      { label: "FASTAPI", icon: "assets/stack/fastapi.svg" },
      { label: "REST APIS", icon: "assets/stack/js.svg" },
      { label: "WEBSOCKETS", icon: "assets/stack/websocket.svg" }
    ]
  },
  {
    heading: "AI / ML:",
    items: [
      { label: "OPENAI API", icon: "assets/stack/openai.webp" },
      { label: "AWS BEDROCK", icon: "assets/stack/bedrock.png" },
      { label: "RAG PIPELINES", icon: "assets/stack/js.svg" },
      { label: "LANGCHAIN", icon: "assets/stack/langchain.png" },
      { label: "PROMPT ENGINEERING", icon: "assets/stack/js.svg" }
    ]
  },
  {
    heading: "DATABASES & TOOLS:",
    items: [
      { label: "POSTGRESQL", icon: "assets/stack/postgres.png" },
      { label: "MONGODB", icon: "assets/stack/mongodb.svg" },
      { label: "MYSQL", icon: "assets/stack/mysql.png" },
      { label: "PRISMA ORM", icon: "assets/stack/prisma.jpg" },
      { label: "GIT", icon: "assets/stack/git.png" },
      { label: "DOCKER", icon: "assets/stack/docker.png" },
      { label: "CI/CD", icon: "assets/stack/js.svg" },
      { label: "CURSOR AI", icon: "assets/stack/cusorai.jpeg" }
    ]
  }
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderTechnicalSkills() {
  var skillsRoot = document.getElementById("skills-groups");
  if (!skillsRoot) return;

  skillsRoot.innerHTML = technicalSkillsData.map(function (group) {
    var itemsMarkup = group.items.map(function (item) {
      return [
        '<div class="skill-item">',
        '  <img src="' + escapeHtml(item.icon) + '" alt="" class="skill-icon" aria-hidden="true" />',
        '  <span class="skill-label">' + escapeHtml(item.label) + "</span>",
        "</div>"
      ].join("");
    }).join("");

    return [
      '<div class="skill-group">',
      '  <h3 class="skill-group-heading">' + escapeHtml(group.heading) + "</h3>",
      '  <div class="skill-grid">' + itemsMarkup + "</div>",
      "</div>"
    ].join("");
  }).join("");
}

renderTechnicalSkills();

// --- GSAP animations (respect prefers-reduced-motion) ---
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // First screen: subtle load animation
  var firstScreen = document.querySelector(".first-screen");
  if (firstScreen) {
    gsap.from(".header .logo", {
      opacity: 0,
      y: -12,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.1
    });
    gsap.from(".nav a, .nav-toggle", {
      opacity: 0,
      y: -12,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.15,
      stagger: 0.05
    });
    gsap.from(".hero-photo-img", {
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2
    });
    gsap.from(".hero-greeting", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.35
    });
    gsap.from(".hero-name", {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.45
    });
    gsap.from(".hero-title", {
      opacity: 0,
      y: 12,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.55
    });
    gsap.from(".hero-social .social-btn", {
      opacity: 0,
      y: 12,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.65,
      stagger: 0.06
    });
    gsap.from(".footer", {
      opacity: 0,
      y: 8,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.5
    });
  }

  // About section: scroll-triggered enter animations
  gsap.from(".about .about-title", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.6,
    ease: "power2.out"
  });
  gsap.from(".about .about-desc", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.1
  });
  gsap.from(".about .about-explore", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 16,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.2
  });
  gsap.from(".about .about-sep", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.98,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.3
  });
  gsap.from(".about .service-card", {
    scrollTrigger: {
      trigger: ".about-services",
      start: "top 58%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 28,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1,
    delay: 0.15
  });
  gsap.from(".about .about-sep-bottom", {
    scrollTrigger: {
      trigger: ".about-services",
      start: "top 58%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
    delay: 0.5
  });

  // Skills section: scroll-triggered enter animations
  gsap.from(".skills-section .skills-title", {
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.55,
    ease: "power2.out"
  });
  gsap.from(".skills-section .skill-group", {
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.12,
    delay: 0.1
  });
  gsap.from(".skills-section .skill-item", {
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 58%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.92,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.04,
    delay: 0.2
  });

  // Portfolio section: scroll-triggered enter animations
  gsap.from(".portfolio-section .portfolio-title", {
    scrollTrigger: {
      trigger: ".portfolio-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.55,
    ease: "power2.out"
  });
  gsap.from(".portfolio-section .portfolio-intro", {
    scrollTrigger: {
      trigger: ".portfolio-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.08
  });
  gsap.from(".portfolio-section .portfolio-card", {
    scrollTrigger: {
      trigger: ".portfolio-section",
      start: "top 58%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1,
    delay: 0.12
  });

  // Experience section: scroll-triggered enter animations
  gsap.from(".experience-section .experience-title", {
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.55,
    ease: "power2.out"
  });
  gsap.from(".experience-section .experience-item", {
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.12,
    delay: 0.1
  });

  gsap.from(".experience-section .experience-tabs", {
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 18,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.08
  });

  // Contact section: scroll-triggered enter animations
  gsap.from(".contact-section .contact-title", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 24,
    duration: 0.55,
    ease: "power2.out"
  });
  gsap.from(".contact-section .contact-intro", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.08
  });
  gsap.from(".contact-section .contact-sep", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.98,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.15
  });
  gsap.from(".contact-section .contact-field", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 16,
    duration: 0.45,
    ease: "power2.out",
    stagger: 0.08,
    delay: 0.2
  });
  gsap.from(".contact-section .contact-submit", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 55%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 12,
    duration: 0.45,
    ease: "power2.out",
    delay: 0.5
  });
}

var copyPageBtn = document.querySelector(".copy-page-btn");
if (copyPageBtn) {
  var copyPageLabel = copyPageBtn.querySelector(".copy-page-btn__label");
  var copyPageStatus = copyPageBtn.querySelector(".copy-page-btn__status");
  var copyPageIcon = copyPageBtn.querySelector(".copy-page-btn__icon");
  var copyPagePulse = copyPageBtn.querySelector(".copy-page-btn__pulse");
  var copyResetTimer = null;

  function cleanText(text) {
    return text ? text.replace(/\s+/g, " ").trim() : "";
  }

  function getText(selector, root) {
    var scope = root || document;
    var el = scope.querySelector(selector);
    return el ? cleanText(el.textContent) : "";
  }

  function getTexts(selector, root) {
    var scope = root || document;
    return Array.from(scope.querySelectorAll(selector))
      .map(function (el) { return cleanText(el.textContent); })
      .filter(Boolean);
  }

  function buildPortfolioCopy() {
    var lines = [];
    var skillGroups = Array.from(document.querySelectorAll(".skill-group")).map(function (group) {
      var heading = getText(".skill-group-heading", group);
      var items = getTexts(".skill-label", group);
      return heading && items.length ? heading + " " + items.join(", ") : "";
    }).filter(Boolean);

    var projectCards = Array.from(document.querySelectorAll(".portfolio-card")).map(function (card) {
      var title = getText(".portfolio-card-title", card);
      var meta = getText(".portfolio-card-meta", card);
      var desc = getText(".portfolio-card-desc", card);
      var tags = getTexts(".experience-tag", card);
      return [
        title ? "- " + title : "",
        meta ? "  Type: " + meta : "",
        desc ? "  Summary: " + desc : "",
        tags.length ? "  Stack: " + tags.join(", ") : ""
      ].filter(Boolean).join("\n");
    }).filter(Boolean);

    function buildExperienceBlock(panelId, sectionTitle) {
      var panel = document.getElementById(panelId);
      if (!panel) return "";
      var items = Array.from(panel.querySelectorAll(".experience-item")).map(function (item) {
        var role = getText(".experience-role", item);
        var meta = getText(".experience-meta", item);
        var desc = getText(".experience-desc", item);
        var tags = getTexts(".experience-tag", item);
        return [
          role ? "- " + role : "",
          meta ? "  Meta: " + meta : "",
          desc ? "  Summary: " + desc : "",
          tags.length ? "  Tech: " + tags.join(", ") : ""
        ].filter(Boolean).join("\n");
      }).filter(Boolean);
      return items.length ? sectionTitle + "\n" + items.join("\n\n") : "";
    }

    lines.push("ABHEER DEY PORTFOLIO");
    lines.push("");
    lines.push("Hero");
    lines.push("Name: " + getText(".hero-name"));
    lines.push("Role: " + getText(".hero-title"));
    lines.push("Summary: " + getText(".footer-desc"));
    lines.push("");
    lines.push("About");
    lines.push(getText(".about-desc"));
    lines.push("");
    lines.push("Skills");
    lines.push(skillGroups.join("\n"));
    lines.push("");
    lines.push("Projects");
    lines.push(projectCards.join("\n\n"));
    lines.push("");
    lines.push(buildExperienceBlock("experience-panel", "Experience"));
    lines.push("");
    lines.push(buildExperienceBlock("certification-panel", "Certifications"));
    lines.push("");
    lines.push("Contact");
    lines.push(getText(".contact-intro"));

    return lines.filter(Boolean).join("\n");
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    var success = false;
    try {
      success = document.execCommand("copy");
    } catch (err) {
      success = false;
    }
    document.body.removeChild(textarea);
    return success ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return fallbackCopy(text);
  }

  function resetCopyState() {
    copyPageBtn.classList.remove("is-copied");
    if (copyPageLabel) copyPageLabel.textContent = "Copy page";
    if (copyPageStatus) copyPageStatus.textContent = "Ready";
  }

  if (!prefersReducedMotion && typeof gsap !== "undefined") {
    gsap.from(copyPageBtn, {
      opacity: 0,
      duration: 0.55,
      delay: 0.9,
      ease: "power2.out"
    });

    if (copyPagePulse) {
      gsap.to(copyPagePulse, {
        scale: 1.25,
        opacity: 0.5,
        duration: 1.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    if (copyPageIcon) {
      gsap.to(copyPageIcon, {
        scale: 1.07,
        duration: 1.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }

  copyPageBtn.addEventListener("click", function () {
    var textToCopy = buildPortfolioCopy();
    if (copyPageStatus) copyPageStatus.textContent = "Copying";

    copyText(textToCopy)
      .then(function () {
        copyPageBtn.classList.add("is-copied");
        if (copyPageLabel) copyPageLabel.textContent = "Copied";
        if (copyPageStatus) copyPageStatus.textContent = "Copied";

        if (!prefersReducedMotion && typeof gsap !== "undefined" && copyPageIcon) {
          gsap.fromTo(copyPageIcon,
            { scale: 0.92, rotate: -12 },
            {
              scale: 1.12,
              rotate: 0,
              duration: 0.28,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
              clearProps: "scale,rotate"
            }
          );
        }

        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(resetCopyState, 2200);
      })
      .catch(function () {
        if (copyPageLabel) copyPageLabel.textContent = "Try again";
        if (copyPageStatus) copyPageStatus.textContent = "Failed";
        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(resetCopyState, 2200);
      });
  });
}

var experienceTabs = document.querySelectorAll(".experience-tab");
var experiencePanels = document.querySelectorAll(".experience-panel");

if (experienceTabs.length && experiencePanels.length) {
  function showExperiencePanel(panelId) {
    var nextPanel = document.getElementById(panelId);
    if (!nextPanel) return;

    experienceTabs.forEach(function (tab) {
      var isActive = tab.getAttribute("data-tab-target") === panelId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    experiencePanels.forEach(function (panel) {
      var isActive = panel.id === panelId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });

    if (typeof gsap !== "undefined") {
      gsap.fromTo(nextPanel.querySelectorAll(".experience-item"),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.08,
          clearProps: "all"
        }
      );
    }
  }

  experienceTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      showExperiencePanel(tab.getAttribute("data-tab-target"));
    });
  });
}

// Contact form: validation + submit via Formspree (no redirect), show success/error
var contactForm = document.querySelector(".contact-form");
if (contactForm) {
  var statusEl = contactForm.querySelector(".contact-form-status");

  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  var phoneRegex = /^[\d\s\-+().]*$/;

  var blockedWords = [
    "fuck", "shit", "asshole", "bastard", "bitch", "crap", "dick", "pussy", "cock",
    "whore", "slut", "nigger", "nigga", "fag", "faggot", "retard", "retarded",
    "scam", "phishing", "fuck you", "shit you", "asshole you", "bastard you", "bitch you", "crap you", "dick you", "pussy you", "cock you", "foolish", "stupid", "idiot", "dumb", "lazy", "lazy ass", "lazy bitch", "lazy asshole", "lazy bastard", "lazy bitch", "lazy asshole", "lazy bastard", "lazy bitch", "lazy asshole", "lazy bastard", "whore you", "slut you", "nigger you", "nigga you", "fag you", "faggot you", "retard you", "retarded you",
    "scam you", "phishing you", "fuck you", "shit you", "asshole you", "bastard you", "bitch you", "crap you", "dick you", "pussy you", "cock you",
    "whore you", "slut you", "nigger you", "nigga you", "fag you", "faggot you", "retard you", "retarded you", "scam you", "phishing you", "fuck you", "shit you", "asshole you", "bastard you", "bitch you", "crap you", "dick you", "pussy you", "cock you",
    "whore you", "slut you", "nigger you", "nigga you", "fag you", "faggot you", "retard you", "retarded you", "scam you", "phishing you", "fuck you", "shit you", "asshole you", "bastard you", "bitch you", "crap you", "dick you", "pussy you", "cock you",
  ];

  function containsBlockedWord(text) {
    if (!text || typeof text !== "string") return false;
    var lower = text.toLowerCase().replace(/\s+/g, " ");
    var i;
    for (i = 0; i < blockedWords.length; i++) {
      var word = blockedWords[i];
      var re = new RegExp("\\b" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
      if (re.test(lower)) return true;
    }
    return false;
  }

  var phoneInputEl = contactForm.querySelector("#contact-phone");
  if (phoneInputEl) {
    phoneInputEl.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d\s\-+().]/g, "");
    });
    phoneInputEl.addEventListener("paste", function (e) {
      var pasted = (e.clipboardData || window.clipboardData).getData("text");
      var filtered = pasted.replace(/[^\d\s\-+().]/g, "");
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
      this.value = this.value.slice(0, start) + filtered + this.value.slice(end);
      this.setSelectionRange(start + filtered.length, start + filtered.length);
    });
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameInput = this.querySelector("#contact-name");
    var emailInput = this.querySelector("#contact-email");
    var phoneInput = this.querySelector("#contact-phone");
    var messageInput = this.querySelector("#contact-message");
    var name = nameInput && nameInput.value ? nameInput.value.trim() : "";
    var email = emailInput && emailInput.value ? emailInput.value.trim() : "";
    var phone = phoneInput && phoneInput.value ? phoneInput.value.trim() : "";
    var message = messageInput && messageInput.value ? messageInput.value.trim() : "";

    if (statusEl) statusEl.hidden = true;
    if (!name) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter your name.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (nameInput) nameInput.focus();
      return;
    }
    if (!email) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter your email.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (emailInput) emailInput.focus();
      return;
    }
    if (!emailRegex.test(email)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (emailInput) emailInput.focus();
      return;
    }
    if (!message) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter your message.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (messageInput) messageInput.focus();
      return;
    }
    if (containsBlockedWord(name)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please remove inappropriate language from your name.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (nameInput) nameInput.focus();
      return;
    }
    if (phone && !phoneRegex.test(phone)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Phone number should contain only numbers (and + - space parentheses if needed).";
        statusEl.style.color = "var(--text-dark)";
      }
      if (phoneInput) phoneInput.focus();
      return;
    }
    if (containsBlockedWord(message)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please remove inappropriate language from your message.";
        statusEl.style.color = "var(--text-dark)";
      }
      if (messageInput) messageInput.focus();
      return;
    }

    var action = this.getAttribute("action");
    if (!action || action.indexOf("YOUR_FORM_ID") !== -1) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please set your Formspree form ID in the form action (see comment in HTML).";
        statusEl.style.color = "var(--text-dark)";
      }
      return;
    }
    var submitBtn = this.querySelector(".contact-submit");
    if (submitBtn) submitBtn.disabled = true;
    var body = new FormData(this);
    fetch(action, {
      method: "POST",
      body: body,
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (res.ok) {
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent = "Thanks! Your message has been sent.";
            statusEl.style.color = "var(--text-dark)";
          }
          contactForm.reset();
        } else {
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent = "Something went wrong. Please try again or email directly.";
            statusEl.style.color = "var(--text-dark)";
          }
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.hidden = false;
          statusEl.textContent = "Something went wrong. Please try again or email directly.";
          statusEl.style.color = "var(--text-dark)";
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}

// Smooth scroll for anchor links; close mobile nav when a nav link is clicked
var navToggle = document.querySelector(".nav-toggle");
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");

function closeMobileNav() {
  if (header && header.classList.contains("is-open")) {
    header.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (href === "#" || href === "#top") {
      e.preventDefault();
      closeMobileNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      closeMobileNav();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

if (navToggle && header && nav) {
  navToggle.addEventListener("click", function () {
    var open = header.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open);
  });
}
