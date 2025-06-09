document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());

document.addEventListener('keydown', function (e) {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I (Inspect), Ctrl+U (View Source), Ctrl+C (Copy)
    if (e.ctrlKey && ['u', 'U', 'c', 'C', 'i', 'I'].includes(e.key)) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && ['u', 'U', 'c', 'C', 'i', 'I'].includes(e.key))) {
        e.preventDefault();
    }
});