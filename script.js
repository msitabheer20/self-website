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
      { label: "RAG PIPELINES", lucide: "git-merge" },
      { label: "LANGCHAIN", icon: "assets/stack/langchain.png" },
      { label: "MACHINE LEARNING", lucide: "brain-circuit" }
    ]
  },
  {
    heading: "DATA & ANALYTICS:",
    items: [
      { label: "PYTHON (PANDAS)", icon: "assets/stack/python.png" },
      { label: "SQL", lucide: "database" },
      { label: "TABLEAU", lucide: "bar-chart-3" },
      { label: "POWER BI", lucide: "pie-chart" },
      { label: "EXCEL", lucide: "table-2" },
      { label: "STATISTICS", lucide: "trending-up" }
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
      { label: "CURSOR AI", icon: "assets/stack/cusorai.jpeg" },
      { label: "CLAUDE CODE", icon: "assets/stack/claude-code.png"}
    ]
  }
];

/* The skill data is authored in caps; render proper product casing instead. */
var SKILL_LABELS = {
  "HTML5": "HTML5", "CSS3": "CSS3", "JAVASCRIPT": "JavaScript",
  "REACT.JS": "React.js", "NEXT.JS": "Next.js", "TYPESCRIPT": "TypeScript",
  "TAILWIND CSS": "Tailwind CSS", "NODEJS": "Node.js", "EXPRESS.JS": "Express.js",
  "PYTHON": "Python", "FASTAPI": "FastAPI", "REST APIS": "REST APIs",
  "WEBSOCKETS": "WebSockets", "OPENAI API": "OpenAI API", "AWS BEDROCK": "AWS Bedrock",
  "RAG PIPELINES": "RAG pipelines", "LANGCHAIN": "LangChain",
  "MACHINE LEARNING": "Machine learning", "PYTHON (PANDAS)": "Python (pandas)",
  "SQL": "SQL", "TABLEAU": "Tableau", "POWER BI": "Power BI", "EXCEL": "Excel",
  "STATISTICS": "Statistics", "POSTGRESQL": "PostgreSQL", "MONGODB": "MongoDB",
  "MYSQL": "MySQL", "PRISMA ORM": "Prisma ORM", "GIT": "Git", "DOCKER": "Docker",
  "CI/CD": "CI/CD", "CURSOR AI": "Cursor AI", "CLAUDE CODE": "Claude Code"
};

function displaySkillLabel(label) {
  return SKILL_LABELS[label] || label;
}

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
      var iconMarkup = item.lucide
        ? '  <span class="skill-icon skill-icon--lucide" aria-hidden="true"><i data-lucide="' + escapeHtml(item.lucide) + '"></i></span>'
        : '  <img src="' + escapeHtml(item.icon) + '" alt="" class="skill-icon" aria-hidden="true" />';
      return [
        '<div class="skill-item">',
        iconMarkup,
        '  <span class="skill-label">' + escapeHtml(displaySkillLabel(item.label)) + "</span>",
        "</div>"
      ].join("");
    }).join("");

    return [
      '<div class="skill-group">',
      '  <h3 class="skill-group-heading">' + escapeHtml(group.heading.replace(/:$/, "")) + "</h3>",
      '  <div class="skill-grid">' + itemsMarkup + "</div>",
      "</div>"
    ].join("");
  }).join("");
}

renderTechnicalSkills();

renderTechnicalSkills();

if (typeof lucide !== "undefined" && typeof lucide.createIcons === "function") {
  lucide.createIcons();
}

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- Reveal on scroll -----------------------------------------------------
   Replaces the old GSAP/ScrollTrigger stack. Items within one container are
   staggered by index so a section resolves as a group rather than all at once. */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  // Stagger siblings that share a parent.
  var seen = new Map();
  items.forEach(function (el) {
    var n = seen.get(el.parentNode) || 0;
    seen.set(el.parentNode, n + 1);
    el.style.setProperty("--reveal-delay", Math.min(n, 6) * 70 + "ms");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  items.forEach(function (el) { io.observe(el); });
})();

/* --- Header hairline appears once you leave the hero --- */
(function () {
  var header = document.querySelector(".header");
  if (!header) return;
  var ticking = false;
  function update() {
    header.classList.toggle("is-stuck", window.scrollY > 24);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }, { passive: true });
  update();
})();

/* --- Work index: image preview that follows the cursor -------------------
   Pointer-fine devices only; touch gets the inline thumbnail via CSS. */
(function () {
  var preview = document.querySelector(".work-preview");
  var list = document.querySelector(".work-list");
  if (!preview || !list) return;
  if (prefersReducedMotion) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var img = preview.querySelector(".work-preview-img");
  var targetX = 0, targetY = 0, curX = 0, curY = 0;
  var active = false, raf = null;

  function loop() {
    // Ease toward the pointer so the preview trails rather than snaps.
    curX += (targetX - curX) * 0.14;
    curY += (targetY - curY) * 0.14;
    preview.style.left = curX + "px";
    preview.style.top = curY + "px";
    raf = active ? window.requestAnimationFrame(loop) : null;
  }

  list.addEventListener("pointermove", function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  Array.prototype.forEach.call(list.querySelectorAll(".work-row"), function (row) {
    var src = row.getAttribute("data-preview");
    if (!src) return;

    row.addEventListener("pointerenter", function (e) {
      if (img.getAttribute("src") !== src) img.setAttribute("src", src);
      targetX = curX = e.clientX;
      targetY = curY = e.clientY;
      preview.style.left = curX + "px";
      preview.style.top = curY + "px";
      preview.classList.add("is-visible");
      if (!active) { active = true; loop(); }
    });

    row.addEventListener("pointerleave", hide);
  });

  function hide() {
    preview.classList.remove("is-visible");
    active = false;
    if (raf) { window.cancelAnimationFrame(raf); raf = null; }
  }

  // Leaving the list entirely (e.g. straight out the side) still hides it.
  list.addEventListener("pointerleave", hide);

  // Wheel-scrolling without moving the mouse fires no pointer event, so the
  // preview would otherwise linger over whatever scrolled underneath it.
  window.addEventListener("scroll", function () {
    if (!active) return;
    var under = document.elementFromPoint(targetX, targetY);
    var row = under && under.closest ? under.closest(".work-row") : null;
    if (!row) { hide(); return; }
    var src = row.getAttribute("data-preview");
    if (src && img.getAttribute("src") !== src) img.setAttribute("src", src);
  }, { passive: true });
})();

/* --- Copy page content for AI tools --- */
var copyPageBtn = document.querySelector(".copy-page-btn");
if (copyPageBtn) {
  var copyPageStatus = copyPageBtn.querySelector(".copy-page-btn__status");
  var copyResetTimer = null;
  var defaultCopyLabel = "Copy page content";

  function setCopyButtonLabel(label) {
    copyPageBtn.setAttribute("aria-label", label);
    copyPageBtn.setAttribute("title", label);
  }

  function cleanText(text) {
    return text ? text.replace(/\s+/g, " ").trim() : "";
  }

  function getText(selector, root) {
    var el = (root || document).querySelector(selector);
    return el ? cleanText(el.textContent) : "";
  }

  function getTexts(selector, root) {
    return Array.prototype.slice
      .call((root || document).querySelectorAll(selector))
      .map(function (el) { return cleanText(el.textContent); })
      .filter(Boolean);
  }

  function buildPortfolioCopy() {
    var lines = [];

    var skillGroups = getTexts(".skill-group-heading").map(function (_, i) {
      var group = document.querySelectorAll(".skill-group")[i];
      var heading = getText(".skill-group-heading", group);
      var items = getTexts(".skill-label", group);
      return heading && items.length ? heading + " " + items.join(", ") : "";
    }).filter(Boolean);

    var projects = Array.prototype.slice
      .call(document.querySelectorAll(".work-row"))
      .map(function (row) {
        var title = getText(".work-title", row);
        var kind = getText(".work-year", row);
        var desc = getText(".work-desc", row);
        var tags = getTexts(".work-tags li", row);
        var link = row.querySelector(".work-title a");
        return [
          title ? "- " + title.replace(/↗$/, "").trim() : "",
          kind ? "  Type: " + kind : "",
          desc ? "  Summary: " + desc : "",
          tags.length ? "  Stack: " + tags.join(", ") : "",
          link ? "  Link: " + link.href : ""
        ].filter(Boolean).join("\n");
      }).filter(Boolean);

    function buildEntries(panelId, sectionTitle) {
      var panel = document.getElementById(panelId);
      if (!panel) return "";
      var items = Array.prototype.slice
        .call(panel.querySelectorAll(".entry"))
        .map(function (item) {
          return [
            getText(".entry-role", item) ? "- " + getText(".entry-role", item) : "",
            getText(".entry-org", item) ? "  Where: " + getText(".entry-org", item) : "",
            getText(".entry-when", item) ? "  When: " + getText(".entry-when", item) : "",
            getText(".entry-desc", item) ? "  Summary: " + getText(".entry-desc", item) : "",
            getTexts(".entry-tags li", item).length ? "  Tech: " + getTexts(".entry-tags li", item).join(", ") : ""
          ].filter(Boolean).join("\n");
        }).filter(Boolean);
      return items.length ? sectionTitle + "\n" + items.join("\n\n") : "";
    }

    lines.push("ABHEER DEY — SOFTWARE ENGINEER");
    lines.push("");
    lines.push("Intro");
    lines.push(getText(".hero-title"));
    lines.push(getText(".hero-lead"));
    lines.push("");
    lines.push("About");
    lines.push(getText(".lead"));
    lines.push(getText(".about-body"));
    lines.push("");
    lines.push("Skills");
    lines.push(skillGroups.join("\n"));
    lines.push("");
    lines.push("Selected work");
    lines.push(projects.join("\n\n"));
    lines.push("");
    lines.push(buildEntries("experience-panel", "Experience"));
    lines.push("");
    lines.push(buildEntries("certification-panel", "Certifications"));
    lines.push("");
    lines.push("Contact");
    lines.push(getTexts(".contact-detail").join(" · "));

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
    if (copyPageStatus) copyPageStatus.textContent = "Ready";
    setCopyButtonLabel(defaultCopyLabel);
  }

  copyPageBtn.addEventListener("click", function () {
    var textToCopy = buildPortfolioCopy();
    if (copyPageStatus) copyPageStatus.textContent = "Copying";
    setCopyButtonLabel("Copying page content");

    copyText(textToCopy)
      .then(function () {
        copyPageBtn.classList.add("is-copied");
        if (copyPageStatus) copyPageStatus.textContent = "Copied";
        setCopyButtonLabel("Page content copied");
        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(resetCopyState, 2200);
      })
      .catch(function () {
        if (copyPageStatus) copyPageStatus.textContent = "Failed";
        setCopyButtonLabel("Copy failed, try again");
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

    // Re-run the reveal on the panel that just became visible.
    nextPanel.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-in");
    });
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
        statusEl.style.color = "var(--ink)";
      }
      if (nameInput) nameInput.focus();
      return;
    }
    if (!email) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter your email.";
        statusEl.style.color = "var(--ink)";
      }
      if (emailInput) emailInput.focus();
      return;
    }
    if (!emailRegex.test(email)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.style.color = "var(--ink)";
      }
      if (emailInput) emailInput.focus();
      return;
    }
    if (!message) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please enter your message.";
        statusEl.style.color = "var(--ink)";
      }
      if (messageInput) messageInput.focus();
      return;
    }
    if (containsBlockedWord(name)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please remove inappropriate language from your name.";
        statusEl.style.color = "var(--ink)";
      }
      if (nameInput) nameInput.focus();
      return;
    }
    if (phone && !phoneRegex.test(phone)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Phone number should contain only numbers (and + - space parentheses if needed).";
        statusEl.style.color = "var(--ink)";
      }
      if (phoneInput) phoneInput.focus();
      return;
    }
    if (containsBlockedWord(message)) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please remove inappropriate language from your message.";
        statusEl.style.color = "var(--ink)";
      }
      if (messageInput) messageInput.focus();
      return;
    }

    var action = this.getAttribute("action");
    if (!action || action.indexOf("YOUR_FORM_ID") !== -1) {
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent = "Please set your Formspree form ID in the form action (see comment in HTML).";
        statusEl.style.color = "var(--ink)";
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
            statusEl.style.color = "var(--ink)";
          }
          contactForm.reset();
        } else {
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent = "Something went wrong. Please try again or email directly.";
            statusEl.style.color = "var(--ink)";
          }
        }
      })
      .catch(function () {
        if (statusEl) {
          statusEl.hidden = false;
          statusEl.textContent = "Something went wrong. Please try again or email directly.";
          statusEl.style.color = "var(--ink)";
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}

/* --- Mobile nav + smooth anchor scrolling --- */
var navToggle = document.querySelector(".nav-toggle");
var siteHeader = document.querySelector(".header");
var nav = document.querySelector(".nav");

function closeMobileNav() {
  if (siteHeader && siteHeader.classList.contains("is-open")) {
    siteHeader.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
}

if (navToggle && siteHeader && nav) {
  navToggle.addEventListener("click", function () {
    var open = siteHeader.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (href === "#" || href === "#top") {
      e.preventDefault();
      closeMobileNav();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      return;
    }
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      closeMobileNav();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  });
});

/* --- Theme toggle -------------------------------------------------------
   The initial theme is applied by the inline script in <head> so it lands
   before first paint. This only wires the button and persists the choice. */
(function () {
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return media.matches ? "dark" : "light";
  }

  function label() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " theme");
  }

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    label();
  });

  media.addEventListener("change", function () {
    if (!root.hasAttribute("data-theme")) label();
  });

  label();
})();
