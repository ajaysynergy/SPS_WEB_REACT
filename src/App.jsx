import { useEffect, useRef, useState } from "react";

const pageFiles = import.meta.glob("../legacy-pages/*.html", {
  eager: true,
  query: "?raw",
  import: "default",
});

const navItems = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["our-teachers.html", "Our Teachers"],
  ["results.html", "Results"],
  ["admissions.html", "Admissions"],
  ["activities.html", "Activities"],
  ["gallery.html", "Gallery"],
  ["contact.html", "Contact"],
];

const normalizeRoute = (path = window.location.pathname) => {
  const file = path.split("/").pop();
  return file && file.endsWith(".html") ? file : "index.html";
};

const pageMarkup = (route) => {
  const source =
    pageFiles[`../legacy-pages/${route}`] ||
    pageFiles["../legacy-pages/404.html"];
  return (
    source?.match(/<main[\s\S]*?<\/main>/i)?.[0] ||
    '<main><section class="section"><div class="container"><h1>Page not found</h1></div></section></main>'
  );
};
const pageTitle = (route) =>
  pageFiles[`../legacy-pages/${route}`]?.match(/<title>(.*?)<\/title>/i)?.[1] ||
  "Suraj Public School";

const siteUrl = "https://surajpublicschool.netlify.app";
const pageDescriptions = {
  "index.html":
    "Suraj Public School, Kotkasim, Rajasthan, is a CBSE affiliated senior secondary school at Chowki Road, Kotkasim - 301702. Explore academics, admissions, activities and school information.",
  "about.html":
    "Learn about Suraj Public School, a CBSE affiliated senior secondary school in Kotkasim, Rajasthan, and its values, vision and approach to learning.",
  "admissions.html":
    "Find admission information and make an enquiry with Suraj Public School, Kotkasim, Rajasthan.",
  "contact.html":
    "Contact Suraj Public School at Chowki Road, Kotkasim, Rajasthan - 301702. Call 99507 11477 or find the school on Google Maps.",
  "principal.html":
    "Read the Principal's message and educational vision of Suraj Public School, Kotkasim, Rajasthan.",
};

const updateMeta = (name, content, attribute = "name") => {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const updateLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

function Header({ route, open, setOpen }) {
  const home = route === "index.html";
  return (
    <header className={`site-header${home ? " site-header--home" : ""}`}>
      <div className="container nav-wrap">
        <a
          className="brand"
          href="index.html"
          aria-label="Suraj Public School home"
        >
          <img
            className="brand-logo"
            src="/assets/images/shared/school-logo.jpg"
            alt="Suraj Public School logo"
          />
          <span className="brand-copy">
            <strong>Suraj Public School</strong>
            <small>Kotkasim, Rajasthan</small>
          </span>
        </a>
        <button
          className={`menu-toggle${open ? " open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`main-nav${open ? " open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map(([url, label]) => (
            <a className={route === url ? "active" : ""} href={url} key={url}>
              {label}
            </a>
          ))}
          <a href="admissions.html#enquiry" className="btn btn--gold nav-cta">
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="index.html">
            <img
              className="brand-logo"
              src="/assets/images/shared/school-logo.jpg"
              alt="Suraj Public School logo"
            />
            <span className="brand-copy">
              <strong>Suraj Public School</strong>
              <small>Kotkasim, Rajasthan</small>
            </span>
          </a>
          <p>
            A trusted learning community shaping confident, thoughtful and
            future-ready learners through education, discipline and character.
          </p>
          <div className="socials">
            <span aria-label="Facebook">f</span>
            <span aria-label="Instagram">ig</span>
            <span aria-label="YouTube">▶</span>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="our-teachers.html">Our Teachers</a>
            </li>
            <li>
              <a href="admissions.html">Admissions</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>School</h3>
          <ul className="footer-links">
            <li>
              <a href="principal.html">Principal</a>
            </li>
            <li>
              <a href="activities.html">Activities</a>
            </li>
            <li>
              <a href="coding-robotics.html">Coding & Robotics</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
            <li>
              <a href="achievements.html">Achievements</a>
            </li>
            <li>
              <a href="events.html">Events</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Important</h3>
          <ul className="footer-links">
            <li>
              <a href="mandatory-disclosure.html">
                Mandatory Public Disclosure
              </a>
            </li>
            <li>
              <a href="annual-report.html">Annual Report</a>
            </li>
            <li>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms.html">Terms & Conditions</a>
            </li>
          </ul>
          <p style={{ color: "#b7c5d4", fontSize: ".85rem" }}>
            Chowki Road, Kotkasim,
            <br />
            Rajasthan - 301702
            <br />
            <a href="tel:9950711477">99507 11477</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          &copy; 2026 Suraj Public School, Kotkasim. All Rights Reserved.
        </span>
        <span>CBSE Affiliation No. 1730355</span>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        className="whatsapp"
        href="https://wa.me/919950711477?text=Hello%20Suraj%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admission%20and%20school%20information."
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.8 2.1.9 2.6 1 3.5.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.5-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>
      <a
        className="call-action"
        href="tel:9950711477"
        aria-label="Call Suraj Public School"
        title="Call Suraj Public School"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 2.8 9 2.2c.7-.2 1.4.2 1.7.9l1.1 2.7c.2.6.1 1.2-.4 1.6L10 8.7c1 2.1 2.7 3.8 4.8 4.8l1.3-1.4c.4-.4 1-.6 1.6-.4l2.7 1.1c.7.3 1.1 1 .9 1.7l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C11.3 18.3 5.7 12.7 5.7 5c0-.8.6-1.5 1.4-1.7Z" />
        </svg>
      </a>
      <button className="back-top" aria-label="Back to top" title="Back to top">
        ↑
      </button>
    </div>
  );
}

function useInteractions(root, route, setRoute, setOpen) {
  useEffect(() => {
    const title =
      route === "index.html"
        ? "Suraj Public School Kotkasim, Rajasthan | CBSE School"
        : pageTitle(route);
    const pageUrl =
      route === "index.html" ? `${siteUrl}/` : `${siteUrl}/${route}`;
    const description =
      pageDescriptions[route] ||
      `Explore ${pageTitle(route)} and school information from Suraj Public School, Kotkasim, Rajasthan.`;
    document.title = title;
    updateMeta("description", description);
    updateMeta("robots", "index, follow");
    updateLink("canonical", pageUrl);
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:url", pageUrl, "property");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    window.scrollTo({ top: 0, behavior: "instant" });
    const rootElement = root.current;
    const navigate = (event) => {
      const link = event.target.closest("a");
      if (
        !link ||
        link.target === "_blank" ||
        link.origin !== window.location.origin
      )
        return;
      const target = link.getAttribute("href");
      if (!target?.endsWith(".html") && !target?.includes(".html#")) return;
      event.preventDefault();
      const [path, hash] = target.split("#");
      const next = normalizeRoute(path);
      window.history.pushState({}, "", target);
      setRoute(next);
      setOpen(false);
      window.setTimeout(
        () => hash && document.getElementById(hash)?.scrollIntoView(),
        40,
      );
    };
    rootElement?.addEventListener("click", navigate);
    const onPopState = () => setRoute(normalizeRoute());
    window.addEventListener("popstate", onPopState);
    return () => {
      rootElement?.removeEventListener("click", navigate);
      window.removeEventListener("popstate", onPopState);
    };
  }, [root, route, setRoute, setOpen]);

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector(".site-header")
        ?.classList.toggle("scrolled", window.scrollY > 30);
      document
        .querySelector(".back-top")
        ?.classList.toggle("show", window.scrollY > 500);
    };
    const rootElement = root.current;
    const backTop = rootElement?.querySelector(".back-top");
    const onTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", onScroll, { passive: true });
    backTop?.addEventListener("click", onTop);

    const slides = [...(rootElement?.querySelectorAll(".hero-slide") || [])];
    const track = rootElement?.querySelector(".hero-slides");
    let current = 0;
    const showSlide = (index) => {
      current = (index + slides.length) % slides.length;
      if (track) track.style.transform = `translateX(-${current * 100}%)`;
    };
    slides.forEach((slide) => {
      slide.style.backgroundImage = `url("${slide.dataset.image}")`;
    });
    const timer =
      slides.length > 1
        ? window.setInterval(() => showSlide(current + 1), 5000)
        : undefined;
    rootElement
      ?.querySelector("[data-hero-prev]")
      ?.addEventListener("click", () => showSlide(current - 1));
    rootElement
      ?.querySelector("[data-hero-next]")
      ?.addEventListener("click", () => showSlide(current + 1));

    const filterGroup = rootElement?.querySelector("[data-filter-group]");
    const filterButtons = [
      ...(filterGroup?.querySelectorAll("[data-filter]") || []),
    ];
    const filterItems = [
      ...(rootElement?.querySelectorAll('[data-filter-item="gallery"]') || []),
    ];
    const filter = (event) => {
      const button = event.currentTarget;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      filterItems.forEach((item) => {
        item.hidden =
          button.dataset.filter !== "all" &&
          item.dataset.category !== button.dataset.filter;
      });
    };
    filterButtons.forEach((button) => button.addEventListener("click", filter));

    const galleryItems = [
      ...(rootElement?.querySelectorAll(".gallery-item") || []),
    ];
    const lightbox = rootElement?.querySelector(".lightbox");
    let galleryIndex = 0;
    const showGallery = (index) => {
      if (!lightbox || !galleryItems.length) return;
      galleryIndex = (index + galleryItems.length) % galleryItems.length;
      const image = galleryItems[galleryIndex].querySelector("img");
      lightbox.querySelector("img").src = image.src;
      lightbox.querySelector("img").alt = image.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeGallery = () => {
      lightbox?.classList.remove("open");
      document.body.style.overflow = "";
    };
    galleryItems.forEach((item, index) =>
      item.addEventListener("click", () => showGallery(index)),
    );
    lightbox
      ?.querySelector(".lightbox-close")
      ?.addEventListener("click", closeGallery);
    lightbox
      ?.querySelector("[data-next]")
      ?.addEventListener("click", () => showGallery(galleryIndex + 1));
    lightbox
      ?.querySelector("[data-prev]")
      ?.addEventListener("click", () => showGallery(galleryIndex - 1));

    const modal = rootElement?.querySelector(".modal");
    const openModal = (event) => {
      const card = event.currentTarget.closest("[data-project-card]");
      if (!modal || !card) return;
      modal.querySelector("img").src = card.dataset.image;
      modal.querySelector("img").alt = card.dataset.title;
      modal.querySelector("h2").textContent = card.dataset.title;
      modal.querySelector("p").textContent = card.dataset.description;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      modal?.classList.remove("open");
      document.body.style.overflow = "";
    };
    rootElement
      ?.querySelectorAll("[data-project]")
      .forEach((button) => button.addEventListener("click", openModal));
    modal?.querySelector(".modal-close")?.addEventListener("click", closeModal);

    const forms = [
      ...(rootElement?.querySelectorAll("form[data-validate]") || []),
    ];
    const submitHandlers = forms.map((form) => {
      const submit = (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
          return;
        }
        if (form.hasAttribute("data-email-delivery")) return;
        event.preventDefault();
        form.reset();
        form.querySelector(".form-message")?.classList.add("show");
      };
      form.addEventListener("submit", submit);
      return [form, submit];
    });
    const whatsappHandlers = [
      ...(rootElement?.querySelectorAll(
        "[data-whatsapp-enquiry], [data-whatsapp-contact]",
      ) || []),
    ].map((button) => {
      const click = () => {
        const form = button.closest("form");
        if (!form?.checkValidity()) {
          form?.reportValidity();
          return;
        }
        const value = (name) =>
          form.elements[name]?.value.trim() || "Not provided";
        const message = button.hasAttribute("data-whatsapp-enquiry")
          ? [
              "Hello Suraj Public School, I would like to make an admission enquiry.",
              `Student Name: ${value("student")}`,
              `Parent/Guardian Name: ${value("parent")}`,
              `Class Applying For: ${value("class")}`,
              `Mobile Number: ${value("mobile")}`,
              `Email: ${value("email")}`,
              `Message: ${value("message")}`,
            ].join("\n")
          : [
              "Hello Suraj Public School, I would like to send a message.",
              `Name: ${value("name")}`,
              `Mobile Number: ${value("phone")}`,
              `Message: ${value("message")}`,
            ].join("\n");
        window.open(
          `https://wa.me/919950711477?text=${encodeURIComponent(message)}`,
          "_blank",
          "noopener",
        );
      };
      button.addEventListener("click", click);
      return [button, click];
    });

    const revealItems = [...(rootElement?.querySelectorAll(".reveal") || [])];
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) =>
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
                }
              }),
            { threshold: 0.12 },
          )
        : null;
    revealItems.forEach((item) =>
      observer ? observer.observe(item) : item.classList.add("visible"),
    );
    const keydown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
        closeModal();
      }
      if (lightbox?.classList.contains("open") && event.key === "ArrowRight")
        showGallery(galleryIndex + 1);
      if (lightbox?.classList.contains("open") && event.key === "ArrowLeft")
        showGallery(galleryIndex - 1);
    };
    document.addEventListener("keydown", keydown);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      backTop?.removeEventListener("click", onTop);
      window.clearInterval(timer);
      observer?.disconnect();
      document.removeEventListener("keydown", keydown);
      submitHandlers.forEach(([form, submit]) =>
        form.removeEventListener("submit", submit),
      );
      whatsappHandlers.forEach(([button, click]) =>
        button.removeEventListener("click", click),
      );
      document.body.style.overflow = "";
    };
  }, [root, route]);
}

export default function App() {
  const [route, setRoute] = useState(normalizeRoute);
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  useInteractions(root, route, setRoute, setOpen);
  return (
    <div ref={root}>
      <Header route={route} open={open} setOpen={setOpen} />
      <div dangerouslySetInnerHTML={{ __html: pageMarkup(route) }} />
      <Footer />
      <FloatingActions />
    </div>
  );
}
