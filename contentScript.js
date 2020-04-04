var text;

// catch the db click event and assign for copy command
window.addEventListener("dblclick", function (event) {
    text = event.target.innerText;
    window.document.execCommand("copy");
}, false);

window.addEventListener('copy', function (e) {
    // e.clipboardData is initially empty, but we can set it to the
    // data that we want copied onto the clipboard.

    e.clipboardData.setData('text/plain', text);

    // This is necessary to prevent the current document selection from
    // being written to the clipboard.
    e.preventDefault();
});