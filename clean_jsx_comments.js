const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/multi-page-website/src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Clean up JSX comments like {/* ============================== ABOUT (Home) ============================== */}
  content = content.replace(/\{\/\*\s*[-=]{3,}\s*(.*?)\s*[-=]{3,}\s*\*\/\}/g, (match, p1) => {
    let text = p1.trim().replace(/\s*\(Home\)/i, '').toLowerCase();
    if (!text || /^[-=]+$/.test(text)) return ''; // remove completely empty ones
    return `{/* ${text} */}`;
  });

  // Also remove exact standard AI imports if they are unused
  // We won't remove React yet just in case. But we can tweak spacing.
  
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Done cleaning comments');
