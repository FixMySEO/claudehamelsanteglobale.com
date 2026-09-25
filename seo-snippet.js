// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.claudehamelsanteglobale.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.claudehamelsanteglobale.com/","title_tag":"Consultation naturopathie, santé digestive | Claude Hamel","meta_description":"Consultation en naturopathie, hydrothérapie du côlon, réflexologie intégrale, suppléments naturels et Boutique UHMANA à Bromont pour votre santé globale."},{"page_url":"https://www.claudehamelsanteglobale.com/copie-de-à-propos-de-claude-hamel","title_tag":"Soins thérapeutiques, réflexologie intégrale | Claude Hamel","meta_description":"Naturopathe diplômée, hygiéniste du côlon et réflexologie intégrale à Bromont. Soins thérapeutiques pour la santé digestive, nerveuse, hormonale et immunitaire."},{"page_url":"https://www.claudehamelsanteglobale.com/copie-de-hydrotherapie","title_tag":"Consultation naturopathie, santé digestive | Claude Hamel","meta_description":"Consultation en naturopathie pour améliorer vos habitudes de vie, gérer le stress et soutenir la santé digestive grâce à une approche naturelle et préventive."},{"page_url":"https://www.claudehamelsanteglobale.com/copie-de-services","title_tag":"Hydrothérapie côlon, santé digestive | Claude Hamel","meta_description":"Hydrothérapie du côlon douce et professionnelle pour purifier l’organisme, favoriser la santé digestive, la détox et le mieux-être général à Bromont."},{"page_url":"https://www.claudehamelsanteglobale.com/réflexologie-intégrale","title_tag":"Réflexologie intégrale, soins thérapeutiques | Claude Hamel","meta_description":"Réflexologie intégrale pour détente profonde, gestion du stress et harmonisation des systèmes. Soins thérapeutiques personnalisés à Bromont."},{"page_url":"https://www.claudehamelsanteglobale.com/tarifs","title_tag":"Soins thérapeutiques, naturopathie | Claude Hamel","meta_description":"Liste des soins thérapeutiques, consultation en naturopathie, hydrothérapie du côlon et réflexologie intégrale. Services et tarifications à Bromont."},{"page_url":"https://www.claudehamelsanteglobale.com/contact","title_tag":"Naturopathe Bromont, soins thérapeutiques | Contact","meta_description":"Contactez votre naturopathe à Bromont pour consultation en naturopathie, hydrothérapie du côlon, réflexologie intégrale et autres soins thérapeutiques."},{"page_url":"https://www.claudehamelsanteglobale.com/profil","title_tag":"Naturopathe Bromont, réflexologie intégrale | Claude Hamel","meta_description":"Naturopathe à Bromont, experte en santé digestive, réflexologie intégrale et soins thérapeutiques. Plus de 30 ans d’expérience pour vous accompagner."}],"keywords":["consultation naturopathie","hydrothérapie côlon","réflexologie intégrale","santé digestive","stress angoisse","naturopathe bromont","formation naturopathie","suppléments naturels","boutique uhmana","soins thérapeutiques"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.claudehamelsanteglobale.com/#localbusiness",
  "name": "Institut de santé globale Claude Hamel",
  "url": "https://www.claudehamelsanteglobale.com/",
  "image": [
    "https://static.wixstatic.com/media/11062b_95d34f15761e4114a57b17823228948ef000.jpg/v1/fill/w_288,h_162,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_95d34f15761e4114a57b17823228948ef000.jpg",
    "https://static.wixstatic.com/media/50be621eb30c491f8831cb9410bfdd37.jpg/v1/crop/x_252,y_0,w_4679,h_3456/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Naturopathie%20Shelf.jpg",
    "https://static.wixstatic.com/media/bd0728a98e5141ed8762dacec3b08c20.jpg/v1/crop/x_249,y_0,w_4624,h_3415/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Les%20%C3%A9tudiants%20adultes.jpg",
    "https://static.wixstatic.com/media/480098_981f65e1fde544df9b019c8dc7d98667~mv2.png/v1/crop/x_0,y_97,w_798,h_589/fill/w_306,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Capture%20d'%C3%A9cran%202023-10-20%20133945.png",
    "https://static.wixstatic.com/media/1a505ab07b1146e2b5c862ea4087c3d6.jpg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Femme%20sur%20le%20t%C3%A9l%C3%A9phone.jpg",
    "https://static.wixstatic.com/media/480098_7d42b46a2e4e4a73bef7e4603fedeb32~mv2.jpg/v1/crop/x_98,y_0,w_630,h_465/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pour-avoir-un-ventre-plat_-825x465.jpg",
    "https://static.wixstatic.com/media/480098_3c1afc356cd6441197dd729a15e0cb8c~mv2.jpg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/huiles-800x445.jpg",
    "https://static.wixstatic.com/media/480098_5826836c45aa4c1c8b077a5f2c33e8fc~mv2.jpg/v1/crop/x_0,y_0,w_1085,h_1156/fill/w_249,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/claude_fond_clinique_%20-%20Copie.jpg"
  ],
  "description": "Institut de santé globale à Bromont offrant consultations en naturopathie, hydrothérapie du côlon, réflexologie intégrale, consultations Zoom, formations en naturopathie et en santé digestive, ainsi qu'une boutique de produits de santé et bien-être.",
  "telephone": "+1-450-521-3548",
  "email": "mailto:isgclaudehamel@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "884 ch. Shefford",
    "addressLocality": "Bromont",
    "postalCode": "J2L 1C3",
    "addressCountry": "CA",
    "addressRegion": "QC"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Bromont, Québec, Canada"
  },
  "founder": {
    "@type": "Person",
    "name": "Claude Hamel",
    "jobTitle": "Naturopathe, réflexologue, hygiéniste du côlon"
  },
  "sameAs": [],
  "knowsAbout": [
    "Naturopathie",
    "Consultation en naturopathie",
    "Hydrothérapie du côlon",
    "Irrigation du côlon",
    "Réflexologie intégrale",
    "Hygiéniste du côlon certifiée",
    "Santé digestive",
    "Santé intestinale",
    "Formations en naturopathie",
    "Détoxification",
    "Gestion du stress et de l'anxiété",
    "Troubles digestifs",
    "Constipation",
    "Débalancements hormonaux"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Soins et services - Institut de santé globale Claude Hamel",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultation en naturopathie",
          "description": "Consultation et accompagnement en naturopathie avec une approche saine et naturelle incluant nutrition, phytothérapie, homéopathie, gemmothérapie et suppléments naturels."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hydrothérapie du côlon",
          "description": "Hydrothérapie du côlon (irrigation du côlon) avec eau purifiée et programme détox spécifique pour soutenir la santé digestive et générale."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Réflexologie intégrale",
          "description": "Soin de réflexologie intégrale touchant pieds, mains, bras, clavicules, dos, oreilles et tête pour apaiser la douleur, l'anxiété et harmoniser les systèmes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultation Zoom",
          "description": "Consultation personnalisée à distance par vidéoconférence pour bénéficier de conseils en santé dans le confort de votre maison."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Formation en naturopathie",
          "description": "Formation en naturopathie offrant une approche holistique ancrée dans des enseignements millénaires pour apprendre à prendre soin de sa santé naturellement."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Formation en santé digestive et intestinale",
          "description": "Formation pour devenir hygiéniste du côlon certifié et acquérir les compétences nécessaires à la pratique professionnelle de l'hydrothérapie du côlon."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boutique UHMANA",
          "description": "Boutique située au 884 Shefford à Bromont offrant produits, suppléments, bio-cosmétiques, tisanes et accessoires pour la santé et le bien-être."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
