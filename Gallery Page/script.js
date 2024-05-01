var defaultBackground = document.getElementById('selected-div').style.backgroundImage;
        var defaultText = document.getElementById('preview-text').innerHTML;

        function changeImage(hoveredDiv) {
            var imageUrl = hoveredDiv.querySelector('img').getAttribute('src');
            var altText = hoveredDiv.querySelector('img').getAttribute('alt');
            document.getElementById('selected-div').style.backgroundImage = 'url(' + imageUrl + ')';
            document.getElementById('preview-text').innerHTML = altText;
        }

        function undo() {
            document.getElementById('selected-div').style.backgroundImage = defaultBackground;
            document.getElementById('preview-text').innerHTML = defaultText;
        }