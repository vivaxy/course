/**
 * @since 2019-07-09 08:40:24
 * @author vivaxy
 */

function loadScript(url) {
  return new Promise(function(reslove, reject) {
    const script = document.createElement('script');
    script.src = url;
    // script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    script.addEventListener('load', reslove);
    script.addEventListener('error', reject);
  });
}

window.addEventListener('error', function(err) {
  console.log('error', err);
});

window.addEventListener('unhandledrejection', function(err) {
  console.log('unhandledrejection', err);
});

(async function() {
  await loadScript('http://192.168.0.106:3001/script.js');
})();
