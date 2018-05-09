var unique = require('uniq');
const createDOMPurify = require('dompurify');
const DOMPurify = createDOMPurify(window);

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

const testForm = document.getElementById('test-form');
const textArea = document.getElementById('text-area');

console.log(testForm)
console.log(textArea)

testForm.onsubmit = (e) => {
  e.preventDefault();
  const dirty = textArea.value
  console.log('Dirty Str')
  console.log(dirty)
  const clean = DOMPurify.sanitize(dirty)
  console.log('Clean Str')
  console.log(clean)
}
