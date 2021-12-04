const createLinks = ({ href, onClick, className, children }) => {
 const a = document.createElement('a');
 a.href = href;
 if (className) {
  a.className = className;
 }
 if (children) {
  a.insertAdjacentHTML('beforebegin', children);
 }
 if (onClick) {
  a.onclick = onClick;
 }
 return a;
};

export { createLinks };
