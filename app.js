(function () {
    let activeLightboxIdx = null;

    function el(id) {
        return document.getElementById(id);
    }

    function renderNavbar() {
        const b = SITE_DATA.brand;
        const subHtml = (b.subtitleLines || [b.subtitle])
            .map((line) => `<span>${line}</span>`)
            .join("");

        el("navbar-mount").innerHTML = `
            <nav class="navbar">
                <div class="container navbar-inner">
                    <a href="#hero-mount" class="brand">
                        <img src="${b.logo}" alt="${b.name} logó" class="brand-logo" />
                        <div class="brand-text">
                            <span class="brand-name">${b.name}</span>
                            <span class="brand-sub">${subHtml}</span>
                        </div>
                    </a>
                    <ul class="nav-links">
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}
                    </ul>
                    <div class="nav-actions">
                        <a href="${b.phoneHref}" class="btn btn-primary nav-phone-pill">
                            ☎ ${b.phone}
                        </a>
                        <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Menü megnyitása">☰</button>
                    </div>
                </div>
                <div class="mobile-drawer" id="mobile-drawer">
                    <ul>
                        ${SITE_DATA.nav.map((item) => `<li><a href="${item.href}" class="mobile-nav-link">${item.label}</a></li>`).join("")}
                    </ul>
                    <a href="${b.phoneHref}" class="btn btn-primary" style="width:100%;">
                        ☎ Hívás most: ${b.phone}
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
                <div class="container hero-container">
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
                        <a href="#contact-mount" class="btn btn-primary">Ajánlatot kérek →</a>
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
                        <p class="section-subtitle">Válasszátok ki a számotokra érdekes szolgáltatást, és kattintsatok a részletekért.</p>
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
                        <div class="included-photo-frame">
                            <img src="${p.includedImage}" alt="${p.includedImageAlt}" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderReferences() {
        const r = SITE_DATA.references;

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
                    <div class="gallery-carousel-shell">
                        <div class="gallery-carousel-controls-bar">
                            <div class="gallery-carousel-label">
                                Kattints bármelyik fotóra a nagyításhoz • Lapozz oldalra (${r.photos.length} pár)
                            </div>
                            <div class="gallery-carousel-arrows">
                                <button class="carousel-nav-btn" id="ref-prev-btn" aria-label="Előző fotók">‹</button>
                                <span class="carousel-counter" id="ref-counter">1–4 / ${r.photos.length}</span>
                                <button class="carousel-nav-btn" id="ref-next-btn" aria-label="Következő fotók">›</button>
                            </div>
                        </div>
                        <div class="gallery-carousel-viewport" id="ref-viewport">
                            <div class="gallery-carousel-track" id="ref-track">
                                ${r.photos
                                    .map(
                                        (ph, idx) => `
                                    <div class="gallery-tile gallery-slide" data-photo-idx="${idx}">
                                        <img src="${ph.src}" alt="${ph.label}" loading="lazy" />
                                        <div class="gallery-caption">${ph.label}</div>
                                    </div>
                                `
                                    )
                                    .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const viewport = el("ref-viewport");
        const track = el("ref-track");
        const prevBtn = el("ref-prev-btn");
        const nextBtn = el("ref-next-btn");
        const counter = el("ref-counter");

        function updateCounter() {
            const slides = track.querySelectorAll(".gallery-slide");
            if (!slides.length) return;
            const slideW = slides[0].offsetWidth + 16;
            const visibleCount = Math.max(1, Math.round(viewport.clientWidth / slideW));
            const firstIdx = Math.min(
                r.photos.length - visibleCount,
                Math.max(0, Math.round(viewport.scrollLeft / slideW))
            );
            const start = firstIdx + 1;
            const end = Math.min(r.photos.length, firstIdx + visibleCount);
            counter.textContent = `${start}–${end} / ${r.photos.length}`;
        }

        function slideByPage(dir) {
            const step = Math.max(260, viewport.clientWidth * 0.88);
            const maxScroll = viewport.scrollWidth - viewport.clientWidth;
            if (dir > 0 && viewport.scrollLeft >= maxScroll - 8) {
                viewport.scrollTo({ left: 0, behavior: "smooth" });
            } else if (dir < 0 && viewport.scrollLeft <= 8) {
                viewport.scrollTo({ left: maxScroll, behavior: "smooth" });
            } else {
                viewport.scrollBy({ left: dir * step, behavior: "smooth" });
            }
        }

        prevBtn.addEventListener("click", () => slideByPage(-1));
        nextBtn.addEventListener("click", () => slideByPage(1));
        viewport.addEventListener("scroll", updateCounter, { passive: true });
        window.addEventListener("resize", updateCounter);
        setTimeout(updateCounter, 50);

        track.querySelectorAll(".gallery-tile").forEach((tile) => {
            tile.addEventListener("click", () => {
                openLightbox(Number(tile.dataset.photoIdx));
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
        const b = SITE_DATA.brand;
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
                            <h3 style="font-family:var(--font-serif);margin:0 0 12px 0;font-size:1.45rem;">Közvetlen elérhetőségek</h3>
                            <a href="${b.phoneHref}" class="contact-row">
                                <span class="contact-label">Telefon / Viber hívás</span>
                                <span class="contact-val">☎ ${b.phone}</span>
                            </a>
                            <a href="mailto:${b.email}" class="contact-row">
                                <span class="contact-label">E-mail</span>
                                <span class="contact-val">${b.email}</span>
                            </a>
                            <div class="contact-row">
                                <span class="contact-label">Elérhetőség</span>
                                <span class="contact-val">${b.hours}</span>
                            </div>
                            <div class="contact-row" style="border-bottom:none;padding-bottom:0;">
                                <span class="contact-label">Terület & Elérhetőség</span>
                                <span class="contact-val">${b.location} – Rugalmas egyeztetéssel</span>
                            </div>
                        </div>
                        <div class="contact-form-card">
                            <h3 style="font-family:var(--font-serif);margin:0 0 6px 0;font-size:1.45rem;">Visszahívás & Időpont egyeztetés</h3>
                            <p style="margin:0 0 22px 0;color:var(--text-muted);font-size:0.92rem;">Adjátok meg a főbb adatokat, és 24 órán belül visszahívlak vagy írok Nektek!</p>
                            <form id="inquiry-form">
                                <input type="checkbox" id="inq-botcheck" name="botcheck" style="display:none;" tabindex="-1" autocomplete="off" />
                                <div class="form-group">
                                    <label for="inq-name">Neved / Nevetek *</label>
                                    <input id="inq-name" name="name" type="text" required placeholder="Pl. Anna és Peti" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-contact">Telefonszám vagy E-mail *</label>
                                    <input id="inq-contact" name="contact" type="text" required placeholder="+36 30 ... vagy nev@gmail.com" />
                                </div>
                                <div class="form-group">
                                    <label for="inq-details">Esküvő dátuma, helyszíne és üzenet</label>
                                    <textarea id="inq-details" name="details" rows="4" placeholder="Pl. 2027. június 12., Budapest környéke, esküvői szertartásvezetés..."></textarea>
                                </div>
                                <button type="submit" id="inquiry-submit-btn" class="btn btn-primary" style="width:100%;">Ajánlatot / Visszahívást kérek →</button>
                                <div id="form-status" class="form-status" role="status" aria-live="polite"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const form = el("inquiry-form");
        const submitBtn = el("inquiry-submit-btn");
        const status = el("form-status");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (el("inq-botcheck").checked) return;

            const name = el("inq-name").value.trim();
            const contact = el("inq-contact").value.trim();
            const details = el("inq-details").value.trim();
            const origText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "Küldés folyamatban...";
            status.className = "form-status";
            status.textContent = "";

            const payload = {
                access_key: c.web3formsKey,
                subject: `Szertartásmester.hu – Új ajánlatkérés (${name})`,
                from_name: `${name} – Szertartásmester.hu`,
                Név: name,
                Elérhetőség: contact,
                Üzenet: details || "(Nem adott meg külön üzenetet)",
            };
            if (contact.includes("@")) {
                payload.email = contact;
                payload.replyto = contact;
            }

            try {
                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(payload),
                });
                const data = await res.json();
                if (res.ok && data.success) {
                    form.reset();
                    status.innerHTML = `Köszönöm, <strong>${name}</strong>! Az üzenetedet sikeresen továbbítottam, 24 órán belül kereslek!`;
                    status.classList.add("visible");
                } else {
                    throw new Error(data.message || "Hiba történt a küldés során.");
                }
            } catch (_err) {
                status.innerHTML = `Sajnos a küldés most nem sikerült. Kérlek, hívj közvetlenül a <strong><a href="${b.phoneHref}" style="text-decoration:underline;">${b.phone}</a></strong> számon, vagy írj az <a href="mailto:${b.email}" style="text-decoration:underline;">${b.email}</a> címre!`;
                status.classList.add("visible", "error");
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = origText;
            }
        });
    }

    function renderFooter() {
        const b = SITE_DATA.brand;
        const subHtml = (b.subtitleLines || [b.subtitle]).join("<br/>");
        el("footer-mount").innerHTML = `
            <div class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div>
                            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                                <img src="${b.logo}" alt="${b.name}" style="height:52px;width:52px;object-fit:contain;" />
                                <div>
                                    <h3 class="footer-brand">${b.name}</h3>
                                    <div style="font-size:0.78rem;color:var(--rose-dark);font-weight:600;line-height:1.3;">${subHtml}</div>
                                </div>
                            </div>
                            <p style="margin:0 0 14px 0;font-size:0.9rem;">${b.location}</p>
                            <div style="display:flex;gap:12px;">
                                <a href="${b.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-footer-social">Facebook</a>
                                <a href="${b.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-footer-social">Instagram</a>
                            </div>
                        </div>
                        <div>
                            <h4 class="footer-heading">Gyorsmenü</h4>
                            <ul class="footer-links">
                                ${SITE_DATA.nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
                            </ul>
                        </div>
                        <div>
                            <h4 class="footer-heading">Elérhetőség & Jogi adatok</h4>
                            <ul class="footer-links">
                                <li><a href="${b.phoneHref}">Telefon / Viber: ${b.phone}</a></li>
                                <li><a href="mailto:${b.email}">${b.email}</a></li>
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
        activeLightboxIdx = null;
        el("modal-mount").innerHTML = "";
    }

    function openServiceModal(serviceId) {
        activeLightboxIdx = null;
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
        activeLightboxIdx = null;
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

    function openLightbox(idx) {
        const photos = SITE_DATA.references.photos;
        activeLightboxIdx = (idx + photos.length) % photos.length;
        const photo = photos[activeLightboxIdx];
        openModal(`
            <div class="lightbox-header">
                <h2 style="margin:0;">${photo.label}</h2>
                <span class="lightbox-count">${activeLightboxIdx + 1} / ${photos.length}</span>
            </div>
            <div class="lightbox-stage">
                <button class="lightbox-nav lightbox-prev" id="lb-prev" aria-label="Előző kép">‹</button>
                <img src="${photo.src}" alt="${photo.label}" class="lightbox-img" />
                <button class="lightbox-nav lightbox-next" id="lb-next" aria-label="Következő kép">›</button>
            </div>
        `);
        el("lb-prev").addEventListener("click", () => openLightbox(activeLightboxIdx - 1));
        el("lb-next").addEventListener("click", () => openLightbox(activeLightboxIdx + 1));
    }

    function openLegalModal(type) {
        activeLightboxIdx = null;
        const title = type === "impresszum" ? "Impresszum" : "Adatkezelési tájékoztató";
        const lines = SITE_DATA.legal[type] || [];
        openModal(`
            <h2>${title}</h2>
            ${lines.map((l) => `<p>${l}</p>`).join("")}
        `);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
        if (activeLightboxIdx !== null) {
            if (e.key === "ArrowLeft") openLightbox(activeLightboxIdx - 1);
            if (e.key === "ArrowRight") openLightbox(activeLightboxIdx + 1);
        }
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
