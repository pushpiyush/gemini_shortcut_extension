function focus_textarea(event) {
    // Textarea node that is to be focused
    const editorNode = document.querySelector('div.ql-editor.new-input-ui');

    if (!editorNode) {
        console.error('Editor node not found!');
        return;
    }

    // Check if the text area is already focused
    if (document.activeElement === editorNode) {
        return;
    }

    event.preventDefault();

    // Access Quill instance attached to parent container or element
    const quill = editorNode.__quill || editorNode.parentElement.__quill;

    if (quill) {
        quill.focus(); // Focuses via Quill's internal API
    } else {
        // Direct selection fallback if __quill isn't exposed directly
        editorNode.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(editorNode);
        range.collapse(false); // Move cursor to end
        sel.removeAllRanges();
        sel.addRange(range);
    }
}



document.addEventListener('keydown', (event) => {
    if ((event.shiftKey || event.metaKey) && (event.key.toLowerCase() === 'f')) {
        focus_textarea(event);
    }
    else if (event.key === 'Escape') {
        const editorNode = document.querySelector('div.ql-editor.new-input-ui');
        if (editorNode && document.activeElement === editorNode) {
            editorNode.blur();
        }
    }
}
);