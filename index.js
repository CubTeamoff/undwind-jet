window.onload = function () {

var codeElements = document.getElementsByClassName('code');

for (var i = 0; i < codeElements.length; i++) {
var codeElement = codeElements[i];
var code = codeElement.innerHTML;
codeElement.innerHTML = highlightCode(code);
}
};
function highlightCode(code) {

code = code.replace(/\b(import|create|physics|random)\b/g, '<span class="keyword">$1</span>');

code = code.replace(/\/\/(.*)/g, '<span class="comment">// $1</span>');

code = code.replace(/\b(object|set|gravity|bounce|position|velocity|randInt)\b/g, '<span class="teaps">$1</span>');

return code;
}