'use strict';
document.addEventListener('click', function (e) {
    const button = e.target;
    // Filter the tag
    const filter = button.getAttribute('data-filter');
    const tag = button.getAttribute('data-filter-tag');
    filterTag(filter, tag);
})

// Filter tag
function filterTag(filter, tag) {
    const items = document.querySelectorAll('.' + filter + ' > article');

    for (let i = 0; i < items.length; i++) {
        const itemTags = items[i].getAttribute('data-tags');

        // Cases where no tags
        if (itemTags != null) {
            if (itemTags.indexOf(tag) < 0) {
                items[i].setAttribute('data-toggle', 'off');
            }
        }
    }
}

// Add active class to tags
function addActiveClass() {

    const buttons = document.querySelectorAll("nav li");
    buttons.forEach(btn => btn.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
    }));
}
addActiveClass();