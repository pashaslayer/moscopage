
function loadNote(note) {
    fetch('notes/' + note + '.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('markdown-content').innerHTML = marked.parse(text);
        });
}
window.onload = () => loadNote('index');
