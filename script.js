function styleAllParagraph() {
    // target all paragraph by tag name 
    var paragraph = document.getElementsByTagName('p');

// loop through all paragraphs and apply a style 
for (let i = 0 ; i < paragraph.length ; i++) {
    paragraph[i].classList.add('styled');
}
}