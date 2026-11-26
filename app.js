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
        const badgeHtml = Array.isArray(h.badgeLines)
            ? `<span>${h.badgeLines[0]}</span><span class="hero-badge-sep" aria-hidden="true">•</span><span>${h.badgeLines[1]}</span>`
            : h.badge;

        const descHtml = Array.isArray(h.descriptionPoints)
            ? `<span class="hero-desc-lead">${h.description} <span class="hero-desc-star">*</span></span> <span class="hero-desc-points">${h.descriptionPoints
                  .map(
                      (pt) =>
                          `<span class="hero-desc-point"><span class="hero-desc-star-mob">* </span>${pt}<span class="hero-desc-sep"> *</span></span>`
                  )
                  .join(" ")}</span>`
            : h.description;

        el("hero-mount").innerHTML = `
            <div class="hero">
                <img src="${h.image}" alt="${SITE_DATA.brand.name}" class="hero-bg" />
                <div class="hero-overlay"></div>
                <div class="container hero-container">
                    <div class="hero-badge-top">
                        <div class="hero-badge">${badgeHtml}</div>
                    </div>
                    <div class="hero-content">
                        <div class="hero-badge hero-badge-mobile">${badgeHtml}</div>
                        <h1 class="hero-title">${h.title}</h1>
                        <p class="hero-desc">${descHtml}</p>
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
                        <h2 class="about-greeting">${a.eyebrow}</h2>
                        <h3 class="about-name">${a.title}</h3>
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
                            <span class="included-kicker">Minden alapár tartalmazza</span>
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
                        <h2 class="section-title">Érdekességek, inspirációk, gondolatok életünk legszebb ünnepeiről</h2>
                    </div>
                    <div class="blog-grid">
                        ${SITE_DATA.blogs
                            .map(
                                (b, idx) => `
                            <article class="blog-card${idx === 0 ? " blog-card-latest" : ""}">
                                <div class="blog-cover">
                                    <img src="${b.cover}" alt="${b.title}" loading="lazy" />
                                    ${idx === 0 ? `<span class="blog-new-badge">ÚJ!</span>` : ""}
                                </div>
                                <div class="blog-body">
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
        const tiktokHref = b.tiktok || "#footer-mount";
        const tiktokAttrs = b.tiktok ? 'target="_blank" rel="noopener noreferrer"' : 'title="TikTok oldal hamarosan"';
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
                            <div style="display:flex;flex-wrap:wrap;gap:10px;">
                                <a href="${b.facebook}" target="_blank" rel="noopener noreferrer" class="btn btn-footer-social">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                                    <span>Facebook</span>
                                </a>
                                <a href="${b.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-footer-social">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                    <span>Instagram</span>
                                </a>
                                <a href="${tiktokHref}" ${tiktokAttrs} class="btn btn-footer-social" aria-label="TikTok">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
                                    <span>TikTok</span>
                                </a>
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
                        <a href="https://borbaswebdesign.hu/" target="_blank" rel="noopener noreferrer" class="footer-creator" aria-label="Készítette: Borbás Webdesign">
                            <span class="footer-creator-label">Készítette:</span>
                            <img src="assets/borbas-webdesign-logo.png" alt="Borbás Webdesign" class="footer-creator-logo" />
                        </a>
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
        const bodyHtml = b.blocks
            ? b.blocks
                  .map((blk) => {
                      if (blk.type === "h3") return `<h3>${blk.text}</h3>`;
                      if (blk.type === "ul") {
                          return `<ul class="blog-inline-list">${blk.items.map((it) => `<li>${it}</li>`).join("")}</ul>`;
                      }
                      if (blk.type === "img") {
                          return `<figure class="blog-inline-figure"><img src="${blk.src}" alt="${blk.alt || b.title}" class="blog-inline-img" loading="lazy" /></figure>`;
                      }
                      return `<p>${blk.text}</p>`;
                  })
                  .join("")
            : `
                <img src="${b.cover}" alt="${b.title}" class="blog-inline-img" />
                ${b.sections.map((sec) => `<h3>${sec.heading}</h3><p>${sec.body}</p>`).join("")}
                ${
                    b.gallery && b.gallery.length
                        ? `<div class="modal-gallery">${b.gallery.map((g) => `<img src="${g}" alt="${b.title}" />`).join("")}</div>`
                        : ""
                }
            `;

        const isLatest = SITE_DATA.blogs[0] && SITE_DATA.blogs[0].id === b.id;
        openModal(`
            ${isLatest ? `<span class="blog-new-pill">ÚJ BEJEGYZÉS</span>` : ""}
            <h2>${b.title}</h2>
            ${bodyHtml}
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

    const isEditable = (t) => t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA");

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
        if (activeLightboxIdx !== null) {
            if (e.key === "ArrowLeft") openLightbox(activeLightboxIdx - 1);
            if (e.key === "ArrowRight") openLightbox(activeLightboxIdx + 1);
        }
        if (!isEditable(e.target) && (e.ctrlKey || e.metaKey)) {
            if (["c", "x", "u", "s", "a"].includes(e.key.toLowerCase())) e.preventDefault();
        }
    });

    ["contextmenu", "copy", "cut"].forEach((evt) => {
        document.addEventListener(evt, (e) => {
            if (!isEditable(e.target)) e.preventDefault();
        });
    });

    document.addEventListener("dragstart", (e) => {
        if (e.target && e.target.tagName === "IMG") e.preventDefault();
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
