(function () {
    let showAllPhotos = false;

    function el(id) {
        return document.getElementById(id);
    }

    function renderNavbar() {
        el("navbar-mount").innerHTML = `
            <nav class="navbar">
                <div class="container navbar-inner">
                    <a href="#hero-mount" class="brand">
                        <span class="brand-name">${SITE_DATA.brand.name}</span>
                        <span class="brand-sub">${SITE_DATA.brand.subtitle}</span>
                    </a>
                    <ul class="nav-links">
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}
                    </ul>
                    <div class="nav-actions">
                        <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-primary nav-phone-pill">
                            ☎ ${SITE_DATA.brand.phone}
                        </a>
                        <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Menü megnyitása">☰</button>
                    </div>
                </div>
                <div class="mobile-drawer" id="mobile-drawer">
                    <ul>
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}" class="mobile-nav-link">${item.label}</a></li>`).join("")}
                    </ul>
                    <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-primary" style="width:100%;">
                        ☎ Hívás most: ${SITE_DATA.brand.phone}
                    </a>
                </div>
            </nav>
        `;

        const btn = el("mobile-menu-btn");
        const drawer = el("mobile-drawer");
        btn.addEventListener("click", () => drawer.classList.toggle("open"));
        drawer.querySelectorAll(".mobile-nav-link").forEach((a) =>
            a.addEventListener("click", () => drawer.classList.remove("open"))
        );
    }

    function renderHero() {
        const h = SITE_DATA.hero;
        el("hero-mount").innerHTML = `
            <div class="hero">
                <img src="${h.image}" alt="${SITE_DATA.brand.name}" class="hero-bg" />
                <div class="hero-overlay"></div>
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">${h.badge}</div>
                        <h1 class="hero-title">${h.title}</h1>
                        <p class="hero-desc">${h.description}</p>
                        <div class="hero-ctas">
                            <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-gold">☎ ${h.primaryCta}</a>
                            <a href="#contact-mount" class="btn btn-outline-light">${h.secondaryCta} →</a>
                        </div>
                        <div class="hero-trust">
                            ${h.trust.map((t) => `<span class="hero-trust-item"><span class="hero-trust-dot">✦</span>${t}</span>`).join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderAbout() {
        const a = SITE_DATA.about;
        el("about-mount").innerHTML = `
            <div class="about-section section-pad">
                <div class="container about-grid">
                    <div class="about-photo-frame">
                        <img src="${a.photo}" alt="${SITE_DATA.brand.name} szertartásvezető" loading="lazy" />
                    </div>
                    <div class="about-copy">
                        <span class="eyebrow">${a.eyebrow}</span>
                        <h2>${a.title}</h2>
                        <p class="about-lead">${a.lead}</p>
                        ${a.paragraphs.map((p) => `<p>${p}</p>`).join("")}
                        <div class="about-highlights">
                            ${a.chips.map((c) => `<span class="highlight-chip">✓ ${c}</span>`).join("")}
                        </div>
                        <a href="#contact-mount" class="btn btn-primary">Kérj szabad időpontot →</a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderQuote() {
        el("quote-mount").innerHTML = `
            <div class="quote-section">
                <div class="container">
                    <div class="quote-card">
                        <div class="quote-mark">“</div>
                        <p class="quote-text">${SITE_DATA.quote.text}</p>
                        <div class="quote-author">— ${SITE_DATA.quote.author} —</div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderServices() {
        el("services-mount").innerHTML = `
            <div class="services-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Szolgáltatások</span>
                        <h2 class="section-title">Ünnepi pillanatok, Rátok szabva</h2>
                        <p class="section-subtitle">Válasszátok ki a számotokra legfontosabb ceremóniát, és kattintsatok a részletekért.</p>
                    </div>
                    <div class="services-grid">
                        ${SITE_DATA.services
                            .map(
                                (s) => `
                            <article class="service-card">
                                <div class="service-img-wrap">
                                    <img src="${s.image}" alt="${s.title}" loading="lazy" />
                                </div>
                                <div class="service-body">
                                    <h3>${s.title}</h3>
                                    <p>${s.shortDesc}</p>
                                    <div class="service-footer">
                                        ${
                                            s.externalUrl
                                                ? `<a href="${s.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Megnyitás ↗</a>`
                                                : `<button class="btn btn-outline service-detail-btn" data-service="${s.id}">Részletek →</button>`
                                        }
                                        <a href="#contact-mount" class="btn btn-primary">Érdekel</a>
                                    </div>
                                </div>
                            </article>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll(".service-detail-btn").forEach((btn) => {
            btn.addEventListener("click", () => openServiceModal(btn.dataset.service));
        });
    }

    function renderPricing() {
        const p = SITE_DATA.pricing;
        el("pricing-mount").innerHTML = `
            <div class="pricing-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">${p.eyebrow}</span>
                        <h2 class="section-title">${p.title}</h2>
                        <p class="section-subtitle">${p.subtitle}</p>
                    </div>
                    <div class="pricing-grid">
                        ${p.items
                            .map(
                                (item) => `
                            <div class="price-item ${item.featured ? "featured" : ""}">
                                <div>
                                    <div class="price-name">${item.name}</div>
                                    <div class="price-note">${item.note}</div>
                                </div>
                                <div style="text-align:right;">
                                    <div class="price-value">${item.price}</div>
                                    <div class="price-note">${item.unit}</div>
                                </div>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                    <div class="included-box">
                        <div>
                            <span class="eyebrow sage">Minden alapár tartalmazza</span>
                            <h3 style="font-family:var(--font-serif);margin:0;font-size:1.45rem;">Gondtalan előkészület és ajándék kellékek</h3>
                            <ul class="included-list">
                                ${p.included.map((inc) => `<li><span class="check-icon">✓</span><span>${inc}</span></li>`).join("")}
                            </ul>
                        </div>
                        <div class="wilde-box">
                            <p style="font-family:var(--font-serif);font-style:italic;margin:0 0 8px 0;font-size:1.05rem;">${p.wildeQuote}</p>
                            <div style="font-size:0.82rem;font-weight:700;color:var(--rose-dark);letter-spacing:0.1em;text-transform:uppercase;">— ${p.wildeAuthor}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderReferences() {
        const r = SITE_DATA.references;
        const visiblePhotos = showAllPhotos ? r.photos : r.photos.slice(0, 12);

        el("references-mount").innerHTML = `
            <div class="references-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">${r.eyebrow}</span>
                        <h2 class="section-title">${r.title}</h2>
                        <p class="section-subtitle">${r.subtitle}</p>
                    </div>
                    <div class="testimonials-grid">
                        ${r.testimonials
                            .map(
                                (t) => `
                            <div class="testimonial-card">
                                <div>
                                    <div class="testimonial-stars">★★★★★</div>
                                    <p class="testimonial-text">${t.text}</p>
                                </div>
                                <div class="testimonial-couple">${t.couple}</div>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                    <div class="gallery-grid">
                        ${visiblePhotos
                            .map(
                                (ph, idx) => `
                            <div class="gallery-tile" data-photo-idx="${idx}">
                                <img src="${ph.src}" alt="${ph.label}" loading="lazy" />
                                <div class="gallery-caption">${ph.label}</div>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                    <div class="gallery-more-wrap">
                        <button class="btn btn-outline" id="toggle-photos-btn">
                            ${showAllPhotos ? "Kevesebb fotó mutatása" : `Összes referencia fotó megtekintése (${r.photos.length} pár)`}
                        </button>
                    </div>
                </div>
            </div>
        `;

        el("toggle-photos-btn").addEventListener("click", () => {
            showAllPhotos = !showAllPhotos;
            renderReferences();
        });

        document.querySelectorAll(".gallery-tile").forEach((tile) => {
            tile.addEventListener("click", () => {
                const ph = SITE_DATA.references.photos[Number(tile.dataset.photoIdx)];
                openLightbox(ph);
            });
        });
    }

    function renderFaq() {
        el("faq-mount").innerHTML = `
            <div class="faq-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Kérdezz / Felelek</span>
                        <h2 class="section-title">Gyakori kérdések a szertartásvezetésről</h2>
                        <p class="section-subtitle">Összegyűjtöttem a legfontosabb tudnivalókat, hogy már az első egyeztetés előtt tisztán lássatok.</p>
                    </div>
                    <div class="faq-list">
                        ${SITE_DATA.faqs
                            .map(
                                (f, idx) => `
                            <details class="faq-item" ${idx === 0 ? "open" : ""}>
                                <summary>
                                    <span>${f.q}</span>
                                    <span class="faq-plus">+</span>
                                </summary>
                                <div class="faq-answer">${f.a}</div>
                            </details>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;
    }

    function renderBlog() {
        el("blog-mount").innerHTML = `
            <div class="blog-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Blog & Inspiráció</span>
                        <h2 class="section-title">Érdekességek az esküvők világából</h2>
                        <p class="section-subtitle">Gondolatok, divattörténet és inspirációk életetek legszebb ünnepéhez.</p>
                    </div>
                    <div class="blog-grid">
                        ${SITE_DATA.blogs
                            .map(
                                (b) => `
                            <article class="blog-card">
                                <div class="blog-cover">
                                    <img src="${b.cover}" alt="${b.title}" loading="lazy" />
                                </div>
                                <div class="blog-body">
                                    <div class="blog-date">${b.date}</div>
                                    <h3>${b.title}</h3>
                                    <p class="blog-excerpt">${b.excerpt}</p>
                                    <button class="btn btn-outline blog-read-btn" data-blog="${b.id}">Elolvasom →</button>
                                </div>
                            </article>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll(".blog-read-btn").forEach((btn) => {
            btn.addEventListener("click", () => openBlogModal(btn.dataset.blog));
        });
    }

    function renderContact() {
        const c = SITE_DATA.contact;
        el("contact-mount").innerHTML = `
            <div class="contact-section section-pad">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">${c.eyebrow}</span>
                        <h2 class="section-title">${c.title}</h2>
                        <p class="section-subtitle">${c.subtitle}</p>
                    </div>
                    <div class="contact-grid">
                        <div class="contact-info-card">
                            <img src="${c.photo}" alt="${SITE_DATA.brand.name}" class="contact-portrait" loading="lazy" />
                            <div class="contact-list">
                                <a href="${SITE_DATA.brand.phoneHref}" class="contact-row">
                                    <span class="contact-label">Közvetlen telefon / Hívás most</span>
                                    <span class="contact-val">☎ ${SITE_DATA.brand.phone}</span>
                                </a>
                                <a href="mailto:${SITE_DATA.brand.email}" class="contact-row">
                                    <span class="contact-label">E-mail</span>
                                    <span class="contact-val">${SITE_DATA.brand.email}</span>
                                </a>
                                <div class="contact-row" style="border-bottom:none;padding-bottom:0;">
                                    <span class="contact-label">Terület & Elérhetőség</span>
                                    <span class="contact-val">${SITE_DATA.brand.location} – Rugalmas egyeztetéssel</span>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-card">
                            <h3 style="font-family:var(--font-serif);margin:0 0 6px 0;font-size:1.6rem;">Visszahívás & Időpont egyeztetés</h3>
                            <p style="margin:0 0 22px 0;color:var(--text-muted);font-size:0.92rem;">Adjátok meg a főbb adatokat, és 24 órán belül visszahívlak vagy írok Nektek!</p>
                            <form id="inquiry-form">
                                <div class="form-group">
                                    <label for="inq-name">Neved / Nevetek *</label>
                                    <input id="inq-name" type="text" required placeholder="Pl. Anna és Peti" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-contact">Telefonszám vagy E-mail *</label>
                                    <input id="inq-contact" type="text" required placeholder="+36 30 ... vagy nev@gmail.com" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-details">Esküvő dátuma, helyszíne és üzenet</label>
                                    <textarea id="inq-details" rows="4" placeholder="Pl. 2027. június 12., Budapest környéke, esküvői szertartásvezetés..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary" style="width:100%;">Ajánlatot / Visszahívást kérek →</button>
                                <div id="form-status" class="form-status"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        el("inquiry-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = el("inq-name").value.trim();
            const contact = el("inq-contact").value.trim();
            const details = el("inq-details").value.trim();
            const subject = encodeURIComponent(`Szertartásvezető érdeklődés – ${name}`);
            const body = encodeURIComponent(`Név: ${name}\nElérhetőség: ${contact}\nÜzenet / Részletek:\n${details}`);
            const status = el("form-status");
            status.innerHTML = `Köszönöm, ${name}! Ha nem nyílt meg az e-mail kliensed, közvetlenül is elérsz a <strong>${SITE_DATA.brand.phone}</strong> számon vagy az <a href="mailto:${SITE_DATA.brand.email}?subject=${subject}&body=${body}" style="text-decoration:underline;">${SITE_DATA.brand.email}</a> címen.`;
            status.classList.add("visible");
            window.location.href = `mailto:${SITE_DATA.brand.email}?subject=${subject}&body=${body}`;
        });
    }

    function renderFooter() {
        el("footer-mount").innerHTML = `
            <div class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <h3 class="footer-brand">${SITE_DATA.brand.name}</h3>
                            <p style="margin:0 0 14px 0;font-size:0.9rem;">${SITE_DATA.brand.subtitle}<br/>${SITE_DATA.brand.location}</p>
                            <div style="display:flex;gap:12px;">
                                <a href="${SITE_DATA.brand.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light" style="padding:7px 16px;font-size:0.82rem;">Facebook</a>
                                <a href="${SITE_DATA.brand.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light" style="padding:7px 16px;font-size:0.82rem;">Instagram</a>
                            </div>
                        </div>
                        <div>
                            <h4 style="color:#fff;margin:0 0 12px 0;font-size:0.95rem;">Gyorsmenü</h4>
                            <ul class="footer-links">
                                ${SITE_DATA.nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
                            </ul>
                        </div>
                        <div>
                            <h4 style="color:#fff;margin:0 0 12px 0;font-size:0.95rem;">Elérhetőség & Jogi adatok</h4>
                            <ul class="footer-links">
                                <li><a href="${SITE_DATA.brand.phoneHref}">${SITE_DATA.brand.phone}</a></li>
                                <li><a href="mailto:${SITE_DATA.brand.email}">${SITE_DATA.brand.email}</a></li>
                                <li><a href="https://www.vegsobucsu.hu" target="_blank" rel="noopener noreferrer">Polgári búcsúztatás (vegsobucsu.hu)</a></li>
                                <li><button class="footer-link-btn" data-legal="impresszum">Impresszum</button></li>
                                <li><button class="footer-link-btn" data-legal="adatkezeles">Adatkezelési tájékoztató</button></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <span>© ${new Date().getFullYear()} Debreczeni Anita – Minden jog fenntartva.</span>
                        <span>Design & Fejlesztés: Borbás Webdesign</span>
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll("[data-legal]").forEach((btn) => {
            btn.addEventListener("click", () => openLegalModal(btn.dataset.legal));
        });
    }

    function renderFloatingCta() {
        el("floating-cta-mount").innerHTML = `
            <a href="${SITE_DATA.brand.phoneHref}" class="floating-call" aria-label="Hívás most">
                ☎ Hívás most
            </a>
        `;
    }

    function openModal(html) {
        const mount = el("modal-mount");
        mount.innerHTML = `
            <div class="modal-backdrop" id="active-modal-backdrop">
                <div class="modal-box" role="dialog" aria-modal="true">
                    <button class="modal-close" id="modal-close-btn" aria-label="Bezárás">&times;</button>
                    ${html}
                </div>
            </div>
        `;
        el("modal-close-btn").addEventListener("click", closeModal);
        el("active-modal-backdrop").addEventListener("click", (e) => {
            if (e.target.id === "active-modal-backdrop") closeModal();
        });
    }

    function closeModal() {
        el("modal-mount").innerHTML = "";
    }

    function openServiceModal(serviceId) {
        const s = SITE_DATA.services.find((item) => item.id === serviceId);
        if (!s) return;
        openModal(`
            <span class="eyebrow">Szolgáltatás részletei</span>
            <h2>${s.title}</h2>
            ${s.modalContent.map((p) => `<p>${p}</p>`).join("")}
            ${
                s.gallery.length
                    ? `<div class="modal-gallery">${s.gallery.map((g) => `<img src="${g}" alt="${s.title}" />`).join("")}</div>`
                    : ""
            }
            <div style="margin-top:24px;display:flex;flex-wrap:wrap;gap:12px;">
                <a href="${SITE_DATA.brand.phoneHref}" class="btn btn-primary">☎ Hívás: ${SITE_DATA.brand.phone}</a>
                <a href="#contact-mount" class="btn btn-outline" id="modal-to-contact">Ajánlatot kérek →</a>
            </div>
        `);
        const toContact = el("modal-to-contact");
        if (toContact) toContact.addEventListener("click", closeModal);
    }

    function openBlogModal(blogId) {
        const b = SITE_DATA.blogs.find((item) => item.id === blogId);
        if (!b) return;
        openModal(`
            <span class="eyebrow">${b.date}</span>
            <h2>${b.title}</h2>
            <img src="${b.cover}" alt="${b.title}" style="width:100%;max-height:320px;object-fit:cover;border-radius:16px;margin:12px 0 20px;" />
            ${b.sections.map((sec) => `<h3>${sec.heading}</h3><p>${sec.body}</p>`).join("")}
            ${
                b.gallery.length
                    ? `<div class="modal-gallery">${b.gallery.map((g) => `<img src="${g}" alt="${b.title}" />`).join("")}</div>`
                    : ""
            }
        `);
    }

    function openLightbox(photo) {
        openModal(`
            <h2 style="margin-bottom:14px;">${photo.label}</h2>
            <img src="${photo.src}" alt="${photo.label}" style="width:100%;max-height:70vh;object-fit:contain;border-radius:14px;background:#faf5f4;" />
        `);
    }

    function openLegalModal(type) {
        const title = type === "impresszum" ? "Impresszum" : "Adatkezelési tájékoztató";
        const lines = SITE_DATA.legal[type] || [];
        openModal(`
            <h2>${title}</h2>
            ${lines.map((l) => `<p>${l}</p>`).join("")}
        `);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    renderNavbar();
    renderHero();
    renderAbout();
    renderQuote();
    renderServices();
    renderPricing();
    renderReferences();
    renderFaq();
    renderBlog();
    renderContact();
    renderFooter();
    renderFloatingCta();
})();
