// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Example: Change background color of body when a button is clicked
    const btn = document.getElementById('changeColorBtn');
    if (btn) {
        btn.addEventListener('click', function() {
            document.body.style.backgroundColor = '#f0f8ff';
        });
    }

    // Example: Link CSS by creating a <link> element (if not already present)
    if (!document.getElementById('dynamic-css')) {
        const link = document.createElement('link');
        link.id = 'dynamic-css';
        link.rel = 'stylesheet';
        link.href = 'style.css'; // Make sure your CSS file is named style.css
        document.head.appendChild(link);
    }
});
