const config = {
    theme: {
        colors: {
            background: '#141414',
            text: '#9e9e9e',
            border: '#404040',
            hoverText: '#ffffff',
            gradientStart: '#59BE8D',
            gradientEnd: '#59BE8D',
        },
        fonts: {
            main: "'Jetbrains Mono', 'Courier New', Courier, monospace",
            size: '13px',
            weightContent: '50',
            weightLabel: '100',
            clockSize: '64px',
            dateSize: '16px',
        },
        spacing: {
            container: '20px',
            section: '20px',
            gap: '20px',
            labelOffset: '-10px',
            labelPadding: '0 5px',
        },
        sizes: {
            containerWidth: '600px',
            containerMobileWidth: '90%',
            borderWidth: '1px',
            mobileBreakpoint: '850px'
        },
        grid: {
            columns: '1fr 1fr',
            mobileColumns: '1fr'
        }
    },
    
    search: {
        engine: 'https://www.duckduckgo.com/?q=',
        placeholder: '',
        label: 'SEARCH'
    },
    
    // Links configuration
    sections: {
        dev: {
            title: 'DEV',
            links: [
                { name: 'GitHub', url: 'https://github.com' },
                { name: 'LeetCode', url: 'https://leetcode.com' },
                { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
            ]
        },
        school: {
            title: 'SCHOOL',
            links: [
                { name: 'eClass', url: 'https://eclass.srv.ualberta.ca' },
                { name: 'BearTracks', url: 'https://www.beartracks.ualberta.ca/' },
            ]
        },
        media: {
            title: 'MEDIA',
            links: [
                { name: 'YouTube', url: 'https://youtube.com' },
                { name: 'Reddit', url: 'https://reddit.com' },
            ]
        },
        work: {
            title: 'WORK',
            links: [
                { name: 'Chat', url: 'https://chat.google.com' },
                { name: 'Calendar', url: 'https://calendar.google.com' },
                { name: 'Drive', url: 'https://drive.google.com' },
            ]
        }
    }
};

