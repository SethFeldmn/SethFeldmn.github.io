/* =========================================
   Seth Z. Feldman — Personal Website
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Header scroll state ---------- */

    const header = document.querySelector(".site-header");

    const updateHeader = () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });


    /* ---------- Mobile navigation ---------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");

    if (menuToggle && siteNav) {

        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("open");

            menuToggle.classList.toggle("open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });


        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("open");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });
        });


        document.addEventListener("click", (event) => {
            const clickedInsideMenu =
                siteNav.contains(event.target) ||
                menuToggle.contains(event.target);

            if (!clickedInsideMenu && siteNav.classList.contains("open")) {
                siteNav.classList.remove("open");
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        });

    }


    /* ---------- Close mobile navigation on resize ---------- */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 650 && siteNav) {
            siteNav.classList.remove("open");

            if (menuToggle) {
                menuToggle.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        }
    });


    /* ---------- Keyboard-friendly Escape behavior ---------- */

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && siteNav?.classList.contains("open")) {
            siteNav.classList.remove("open");

            menuToggle?.classList.remove("open");
            menuToggle?.setAttribute("aria-expanded", "false");
            menuToggle?.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle?.focus();
        }
    });

});
