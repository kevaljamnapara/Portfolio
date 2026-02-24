// =============================================
// MOBILE MENU TOGGLE
// =============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('mobile-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// =============================================
// SMOOTH SCROLLING & ACTIVE NAV HIGHLIGHT
// =============================================

const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =============================================
// DYNAMIC PROJECT RENDERING
// =============================================

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');

    if (!projectsContainer || typeof projects === 'undefined') {
        console.error('Projects container or data not found');
        return;
    }

    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">${project.image || ''}</div>
                <span class="project-status">${project.status || 'Completed'}</span>
            </div>
            <h3 class="project-title">${project.name}</h3>
            ${project.description ? `<p class="project-value-prop">${project.description}</p>` : ''}
            ${project.valueProp ? `<p class="project-value-prop">${project.valueProp}</p>` : ''}
            ${project.bullets ? `<ul class="project-bullets">
                ${project.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>` : ''}
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Source Code →</a>
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo →</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Render projects on page load
document.addEventListener('DOMContentLoaded', renderProjects);

// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate], .reveal').forEach(element => {
    observer.observe(element);
});

// =============================================
// TERMINAL TYPEWRITER EFFECT
// =============================================

const terminalText = [
    "Initializing keval.dev...",
    "Loading dependencies...",
    "Mounting React components...",
    "Training ML models... [OK]",
    "System ready. Welcome!"
];

const terminalOutput = document.getElementById('terminal-output');
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (!terminalOutput) return;

    if (lineIndex < terminalText.length) {
        if (charIndex === 0) {
            terminalOutput.innerHTML += '<div><span class="prompt">$</span> <span class="typing-line"></span></div>';
        }

        const currentLine = document.querySelectorAll('.typing-line')[lineIndex];

        if (charIndex < terminalText[lineIndex].length) {
            currentLine.textContent += terminalText[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, Math.random() * 50 + 30);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 500);
        }
    } else {
        terminalOutput.innerHTML += '<div><span class="prompt">$</span> <span class="terminal-cursor">_</span></div>';
    }
}

const heroSection = document.getElementById('home');
if (heroSection && terminalOutput) {
    const heroObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !terminalOutput.hasAttribute('data-typed')) {
            terminalOutput.setAttribute('data-typed', 'true');
            setTimeout(typeWriter, 500);
        }
    }, { threshold: 0.5 });
    heroObserver.observe(heroSection);
}

// =============================================
// SCROLL TO TOP BUTTON
// =============================================

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
