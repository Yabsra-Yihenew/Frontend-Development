document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    var defaultBackground = document.getElementById('selected-div').style.backgroundImage;
    var defaultText = document.getElementById('preview-text').innerHTML;

    function changeImage(hoveredDiv) {
        var imageUrl = hoveredDiv.querySelector('img').getAttribute('src');
        var altText = hoveredDiv.querySelector('img').getAttribute('alt');
        document.getElementById('selected-div').style.backgroundImage = 'url(' + imageUrl + ')';
        document.getElementById('preview-text').innerHTML = altText;
        console.log('Image changed to: ' + altText);
    }

    function undo() {
        document.getElementById('selected-div').style.backgroundImage = defaultBackground;
        document.getElementById('preview-text').innerHTML = defaultText;
        console.log('Reverted to default image');
    }

    var smallDivs = document.querySelectorAll('.small-div');
    smallDivs.forEach(function(div) {
        div.setAttribute('tabfocus', true); // Assuming this is a required custom attribute

        div.addEventListener('mouseover', function() {
            changeImage(div);
        });
        div.addEventListener('mouseout', undo);
        div.addEventListener('focus', function() {
            changeImage(div);
        });
        div.addEventListener('blur', undo);
    });

    console.log('Page initialized');
}
