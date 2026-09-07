(function () {
  "use strict";

  const D = PORTFOLIO;

  const $ = (id) => document.getElementById(id);

  function buildSidebar() {
    const sidebar = $("sidebar");

    const avatarWrap = document.createElement("div");
    avatarWrap.className = "avatar-wrap";
    if (D.personal.photo) {
      avatarWrap.innerHTML = `
        <div class="avatar-glow"></div>
        <img src="${D.personal.photo}" class="avatar avatar-photo" alt="${D.personal.name}" />`;
    } else {
      avatarWrap.innerHTML = `
        <div class="avatar-glow"></div>
        <div class="avatar">${D.personal.initials}</div>`;
    }
    sidebar.appendChild(avatarWrap);

    sidebar.innerHTML += `
      <div class="sb-name">${D.personal.name}</div>
      <div class="sb-role">${D.personal.role}</div>
      <div class="sb-uni">${D.personal.university}</div>

      <div class="sb-location">
        <div class="sb-location-dot"></div>
        <div class="sb-location-text">Canada</div>
      </div>

      ${false ? `<div class="status-pill"><div class="status-dot"></div><div class="status-text">${D.personal.status}</div></div>` : ''}

      <div class="sb-divider"></div>

      <nav class="sb-nav" aria-label="Page sections">
        <a class="sb-nav-item active" href="#about"><i class="ti ti-user" aria-hidden="true"></i>About</a>
        <a class="sb-nav-item" href="#research"><i class="ti ti-flask" aria-hidden="true"></i>Research</a>
        <a class="sb-nav-item" href="#experience"><i class="ti ti-briefcase" aria-hidden="true"></i>Experience</a>
        <a class="sb-nav-item" href="#publications"><i class="ti ti-file-text" aria-hidden="true"></i>Publications</a>
        <a class="sb-nav-item" href="#conferences"><i class="ti ti-microphone" aria-hidden="true"></i>Conferences</a>
        <a class="sb-nav-item" href="#certificates"><i class="ti ti-certificate" aria-hidden="true"></i>Certificates</a>
        <a class="sb-nav-item" href="#teaching"><i class="ti ti-school" aria-hidden="true"></i>Teaching</a>
        <a class="sb-nav-item" href="#skills"><i class="ti ti-tool" aria-hidden="true"></i>Skills</a>
        <a class="sb-nav-item" href="#awards"><i class="ti ti-award" aria-hidden="true"></i>Awards</a>
        <a class="sb-nav-item" href="#contact"><i class="ti ti-message" aria-hidden="true"></i>Contact</a>
      </nav>

      <div class="sb-bottom">
        <div class="sb-social">
          <a class="sb-social-ico" href="https://${D.personal.github}"   target="_blank" rel="noopener" aria-label="GitHub">
            <i class="ti ti-brand-github" aria-hidden="true"></i>
          </a>
          <a class="sb-social-ico" href="https://${D.personal.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="ti ti-brand-linkedin" aria-hidden="true"></i>
          </a>
          <a class="sb-social-ico" href="https://${D.personal.scholar}"  target="_blank" rel="noopener" aria-label="Google Scholar">
            <i class="ti ti-school" aria-hidden="true"></i>
          </a>
          <a class="sb-social-ico" href="mailto:${D.personal.email}" aria-label="Email">
            <i class="ti ti-mail" aria-hidden="true"></i>
          </a>
        </div>
        <div class="sb-copy">© ${new Date().getFullYear()} ${D.personal.name}</div>
      </div>
    `;
  }

  function buildMobileProfile() {
    $("mob-name").textContent = D.personal.name;

    const avatarHTML = D.personal.photo
      ? `<div class="avatar-glow"></div><img src="${D.personal.photo}" class="avatar avatar-photo" alt="${D.personal.name}" />`
      : `<div class="avatar-glow"></div><div class="avatar">${D.personal.initials}</div>`;

    const chips = D.about.chips
      .map((c) => `<span class="chip"><i class="ti ${c.icon}" aria-hidden="true"></i>${c.label}</span>`)
      .join("");

    $("mobile-profile").innerHTML = `
      <div class="avatar-wrap">${avatarHTML}</div>
      <div class="profile-name">${D.personal.name}</div>
      <div class="profile-role">${D.personal.role}</div>
      <div class="profile-uni">${D.personal.university} · Canada PR</div>
      ${false ? `<div class="status-pill"><div class="status-dot"></div><div class="status-text">${D.personal.status}</div></div>` : ''}
      <p class="profile-bio">${D.about.paragraphs[0]}</p>
      <div class="hero-chips">${chips}</div>
      <div class="profile-btns">
        <a class="btn-cv"       href="${D.personal.cv}" download><i class="ti ti-download" aria-hidden="true"></i>Download CV</a>
        <a class="btn-scholar"  href="https://${D.personal.scholar}" target="_blank" rel="noopener"><i class="ti ti-school" aria-hidden="true"></i>Scholar</a>
        <a class="btn-linkedin" href="https://${D.personal.linkedin}" target="_blank" rel="noopener"><i class="ti ti-brand-linkedin" aria-hidden="true"></i>LinkedIn</a>
        <a class="btn-contact"  href="mailto:${D.personal.email}"><i class="ti ti-mail" aria-hidden="true"></i>Contact</a>
      </div>
    `;

    const navItems = [
      ["#about",        "ti-user",        "About"],
      ["#research",     "ti-flask",       "Research"],
      ["#experience",   "ti-briefcase",   "Experience"],
      ["#publications", "ti-file-text",   "Publications"],
      ["#conferences",  "ti-microphone",  "Conferences"],
      ["#certificates", "ti-certificate", "Certificates"],
      ["#teaching",     "ti-school",      "Teaching"],
      ["#skills",       "ti-tool",        "Skills"],
      ["#awards",       "ti-award",       "Awards"],
      ["#contact",      "ti-message",     "Contact"],
    ];
    $("mobile-nav").innerHTML = navItems
      .map((n, i) => `<a class="mobile-nav-item${i === 0 ? " active" : ""}" href="${n[0]}"><i class="ti ${n[1]}" aria-hidden="true"></i>${n[2]}</a>`)
      .join("");
  }

  function buildMain() {
    const main = $("main-content");
    main.innerHTML = `
      ${buildHero()}
      ${buildResearch()}
      ${buildExperience()}
      ${buildPublications()}
      ${buildConferences()}
      ${buildCertificates()}
      ${buildTeaching()}
      ${buildAwards()}
      ${buildSkills()}
      ${buildContact()}
      ${buildFooter()}
    `;
  }

  function section(id, num, title, countLabel, content) {
    const count = countLabel ? `<span class="sec-count">${countLabel}</span>` : "";
    return `
      <section class="section" id="${id}">
          <span class="sec-number">${num}</span>
          <div class="sec-divider-line"></div>
          <h2 class="sec-title">${title}</h2>
          <div class="sec-line"></div>
          ${count}
        </div>
        ${content}
      </section>
    `;
  }

  function buildHero() {
    const chips = D.about.chips
      .map((c) => `<span class="chip"><i class="ti ${c.icon}" aria-hidden="true"></i>${c.label}</span>`)
      .join("");

    const paras = D.about.paragraphs
      .map((p) => `<p class="hero-bio">${p}</p>`)
      .join('<div style="height:12px"></div>');

    const avatarHTML = D.personal.photo
      ? `<img src="${D.personal.photo}" class="hero-photo hero-photo-img" alt="${D.personal.name}" />`
      : `<div class="hero-photo">${D.personal.initials}</div>`;

    return `
      <div class="hero" id="about">
        <div class="hero-top">
          ${avatarHTML}
          <div class="hero-identity">
            <div class="hero-greeting">${D.about.greeting}</div>
            <h1 class="hero-name">Hi, I'm <em>${D.personal.name.split(" ")[0]}</em></h1>
            <div class="hero-tagline">
              <span id="hero-typed"></span><span class="typing-cursor"></span>
            </div>
            <div class="hero-title">
              <span>${D.personal.role}</span>
              <div class="hero-title-sep"></div>
              <span>${D.personal.university}</span>
              <div class="hero-title-sep"></div>
              <span>Canada PR</span>
            </div>
          </div>
        </div>
        <div class="hero-body">
          ${paras}
          <div class="hero-chips">${chips}</div>
        </div>
        <div class="hero-cta">
          <a class="btn-cv"       href="${D.personal.cv}" download><i class="ti ti-download" aria-hidden="true"></i>Download CV</a>
          <a class="btn-scholar"  href="https://${D.personal.scholar}"  target="_blank" rel="noopener"><i class="ti ti-school" aria-hidden="true"></i>Google Scholar</a>
          <a class="btn-linkedin" href="https://${D.personal.linkedin}" target="_blank" rel="noopener"><i class="ti ti-brand-linkedin" aria-hidden="true"></i>LinkedIn</a>
          <a class="btn-contact"  href="mailto:${D.personal.email}"><i class="ti ti-mail" aria-hidden="true"></i>Contact me</a>
        </div>
      </div>
    `;
  }

  function buildResearch() {
    const bodyParas = D.research.paragraphs.slice(0, -1);
    const metaLine   = D.research.paragraphs[D.research.paragraphs.length - 1];

    const bodyHtml = bodyParas
      .map((p) => `<p class="research-bio">${p}</p>`)
      .join("");

    return section("research", "00", D.research.heading, "", `
      <div class="research-subhead">${D.research.subheading}</div>
      <div class="research-tag">${D.research.tag}</div>
      ${bodyHtml}
      <p class="research-meta">${metaLine}</p>
    `);
  }

  function buildExperience() {
    const items = D.experience.map((e, i) => {
      const isLast = i === D.experience.length - 1;
      const dot = e.current
        ? `<div class="exp-dot-wrap"><div class="exp-dot-ring"></div><div class="exp-dot"></div></div>`
        : `<div class="exp-dot-sm"></div>`;
      const line = isLast ? "" : `<div class="exp-line"></div>`;
      return `
        <div class="exp-item">
          <div class="exp-timeline">${dot}${line}</div>
          <div class="exp-content">
            <div class="exp-role">${e.role}</div>
            <div class="exp-org">${e.org}</div>
            <div class="exp-date"><i class="ti ti-calendar" aria-hidden="true"></i>${e.date}</div>
            <div class="exp-desc">${e.desc}</div>
          </div>
        </div>
      `;
    }).join("");
    return section("experience", "01", "Experience", "", items);
  }

  function buildPublications() {
    const items = D.publications.map((p) => `
      <div class="pub-card">
        <span class="pub-badge">${p.year}</span>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-venue">${p.venue}</div>
          <a class="pub-doi" href="${p.doi}" target="_blank" rel="noopener">
            <i class="ti ti-external-link" aria-hidden="true"></i>${p.doiLabel}
          </a>
        </div>
      </div>
    `).join("");
    return section("publications", "02", "Publications", `${D.publications.length} papers`, items);
  }

  function buildConferences() {
    const items = D.conferences.map((c) => {
      const tags = c.tags.map((t) => `<span class="conf-tag">${t}</span>`).join("");
      return `
        <div class="conf-card">
          <div class="conf-icon-wrap"><i class="ti ${c.icon}" aria-hidden="true"></i></div>
          <div class="conf-body">
            <div class="conf-name">${c.name}</div>
            <div class="conf-paper">${c.paper}</div>
            <div class="conf-meta">
              <span class="conf-type">${c.type}</span>
              ${tags}
            </div>
          </div>
        </div>
      `;
    }).join("");
    return section("conferences", "03", "Presentations & conferences", `${D.conferences.length} talks`, items);
  }

  function buildCertificates() {
    const items = D.certificates.map((c) => {
      const badge = c.status === "in-progress"
        ? `<span class="badge-ip"><i class="ti ti-clock" aria-hidden="true"></i>In progress</span>`
        : `<span class="badge-done"><i class="ti ti-check" aria-hidden="true"></i>Completed</span>`;
      return `
        <div class="cert-card">
          <div class="cert-icon"><i class="ti ${c.icon}" aria-hidden="true"></i></div>
          <div>
            <div class="cert-name">${c.name}</div>
            <div class="cert-issuer">${c.issuer}</div>
            <div class="cert-date">${c.year}</div>
            ${badge}
          </div>
        </div>
      `;
    }).join("");
    return section("certificates", "05", "Professional certificates", "", `<div class="cert-grid">${items}</div>`);
  }

  function buildTeaching() {
    const total = D.teaching.reduce((acc, t) => {
      const m = t.course.match(/(\d+)\s+students/);
      return acc + (m ? parseInt(m[1]) : 0);
    }, 0);
    const items = D.teaching.map((t) => `
      <div class="teach-item">
        <div class="teach-icon"><i class="ti ${t.icon}" aria-hidden="true"></i></div>
        <div>
          <div class="teach-role">${t.role}</div>
          <div class="teach-course">${t.course}</div>
          <div class="teach-meta">${t.meta}</div>
        </div>
      </div>
    `).join("");
    return section("teaching", "06", "Teaching experience", `${total}+ students`, items);
  }

  function buildAwards() {
    const items = D.awards.map((a) => `
      <div class="award-item">
        <div class="award-icon"><i class="ti ${a.icon}" aria-hidden="true"></i></div>
        <div>
          <div class="award-name">${a.name}</div>
          <div class="award-meta">${a.meta}</div>
        </div>
      </div>
    `).join("");
    return section("awards", "07", "Awards & scholarships", "", `<div class="awards-list">${items}</div>`);
  }

  function buildSkills() {
    const groups = D.skills.map((g) => {
      const pillClass = g.primary ? "skill-pill skill-pill-primary" : "skill-pill";
      const pills = g.items
        .map((s, i) => `<span class="${pillClass}" style="animation-delay:${0.05 + i * 0.05}s">${s}</span>`)
        .join("");
      const groupClass = g.primary ? "skill-group skill-group-primary" : "skill-group";
      return `
        <div class="${groupClass}">
          <div class="skill-group-label">${g.group}</div>
          <div class="skill-pills">${pills}</div>
        </div>
      `;
    }).join("");
    return section("skills", "08", "Skills", "", `<div class="skills-grid">${groups}</div>`);
  }

  function buildContact() {
    const cards = [
      { icon: "ti-mail",           label: "Email",    val: D.personal.email,    href: `mailto:${D.personal.email}` },
      { icon: "ti-world",          label: "Website",  val: D.personal.website,  href: `https://${D.personal.website}` },
      { icon: "ti-brand-linkedin", label: "LinkedIn", val: "linkedin.com/in/minhajur-rahman", href: `https://${D.personal.linkedin}` },
      { icon: "ti-brand-github",   label: "GitHub",   val: D.personal.github,   href: `https://${D.personal.github}` },
    ].map((c) => `
      <a class="contact-card" href="${c.href}" target="_blank" rel="noopener">
        <div class="contact-icon"><i class="ti ${c.icon}" aria-hidden="true"></i></div>
        <div>
          <div class="contact-label">${c.label}</div>
          <div class="contact-val">${c.val}</div>
        </div>
      </a>
    `).join("");

    return section("contact", "09", "Get in touch", "", `
      <div class="contact-grid">${cards}</div>
    `);
  }

  function buildFooter() {
    return `
      <footer class="footer">
        <span class="footer-l">// ${D.personal.location} · Permanent Resident</span>
        <div class="footer-r">
          <a href="https://${D.personal.scholar}"  target="_blank" rel="noopener">Scholar</a>
          <a href="https://${D.personal.github}"   target="_blank" rel="noopener">GitHub</a>
          <a href="https://${D.personal.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${D.personal.cv}" download>CV ↗</a>
        </div>
      </footer>
    `;
  }

  function initTyping() {
    const el = document.getElementById("hero-typed");
    if (!el) return;

    const lines = (D.about.taglines && D.about.taglines.length)
      ? D.about.taglines
      : ["add your tagline in data.js → about.taglines"];

    let charIdx = 0, lineIdx = 0, deleting = false;

    function tick() {
      const current = lines[lineIdx];
      if (!deleting) {
        el.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          lineIdx = (lineIdx + 1) % lines.length;
          setTimeout(tick, 400);
          return;
        }
      }
      setTimeout(tick, deleting ? 38 : 65);
    }

    setTimeout(tick, 900);
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll(".section, .hero");
    const navLinks = document.querySelectorAll(".sb-nav-item, .mobile-nav-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
  }


  document.addEventListener("DOMContentLoaded", () => {
    document.title = `${D.personal.name} — ML Researcher`;
    buildSidebar();
    buildMobileProfile();
    buildMain();
    initTyping();
    initScrollSpy();
  });

})();
