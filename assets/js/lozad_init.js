const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();
// Initialize library
lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('ease-in')
        }
    }
}).observe()