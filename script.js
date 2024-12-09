document.addEventListener('DOMContentLoaded', function() {
    // Apply theme variables
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--color-background', config.theme.colors.background);
    root.style.setProperty('--color-text', config.theme.colors.text);
    root.style.setProperty('--color-border', config.theme.colors.border);
    root.style.setProperty('--color-hover-text', config.theme.colors.hoverText);
    root.style.setProperty('--gradient-start', config.theme.colors.gradientStart);
    root.style.setProperty('--gradient-end', config.theme.colors.gradientEnd);
    
    // Fonts
    root.style.setProperty('--font-family', config.theme.fonts.main);
    root.style.setProperty('--font-size', config.theme.fonts.size);
    root.style.setProperty('--font-weight-content', config.theme.fonts.weightContent);
    root.style.setProperty('--font-weight-label', config.theme.fonts.weightLabel);
    root.style.setProperty('--clock-font-size', config.theme.fonts.clockSize); // Add this line
    root.style.setProperty('--date-font-size', config.theme.fonts.dateSize); // Add this line
    
    // Spacing
    root.style.setProperty('--spacing-container', config.theme.spacing.container);
    root.style.setProperty('--spacing-section', config.theme.spacing.section);
    root.style.setProperty('--spacing-gap', config.theme.spacing.gap);
    root.style.setProperty('--label-offset', config.theme.spacing.labelOffset);
    root.style.setProperty('--label-padding', config.theme.spacing.labelPadding);

    // Sizes
    root.style.setProperty('--container-width', config.theme.sizes.containerWidth);
    root.style.setProperty('--container-mobile-width', config.theme.sizes.containerMobileWidth);
    root.style.setProperty('--border-size', config.theme.sizes.borderWidth);
    root.style.setProperty('--mobile-breakpoint', config.theme.sizes.mobileBreakpoint);

    // Grid
    root.style.setProperty('--grid-columns', config.theme.grid.columns);
    root.style.setProperty('--grid-mobile-columns', config.theme.grid.mobileColumns);

    // Setup clock
    const clockElement = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');

    function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString('en-GB'); // 24-hour format
        dateElement.textContent = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    setInterval(updateClock, 1000);
    updateClock();

    // Setup search
    const searchInput = document.querySelector('input');
    searchInput.placeholder = config.search.placeholder;
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                window.location.href = config.search.engine + encodeURIComponent(query);
            }
        }
    });

    // Generate sections
    const sectionsContainer = document.getElementById('sections-container');
    
    Object.entries(config.sections).forEach(([key, section]) => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'section';
        
        sectionElement.innerHTML = `
            <div class="section-label">${section.title}</div>
            <div class="section-content">
                ${section.links.map(link => `
                    <a href="${link.url}" target="_blank">${link.name}</a>
                `).join('')}
            </div>
        `;
        
        sectionsContainer.appendChild(sectionElement);
    });
});

