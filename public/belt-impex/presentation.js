const main = document.querySelector('main');
const loader = document.querySelector('#loader');
const track = document.querySelector('#track');
const fill = document.querySelector('#fill');
const percentage = document.querySelector('output');
const status = document.querySelector('#status');
const retry = document.querySelector('#retry');
const fullscreen = document.querySelector('#fullscreen');
const heights = { 1: 12234, 2: 13854, 3: 13510 };
const selected = new URLSearchParams(location.search).get('concept');
const number = Object.hasOwn(heights, selected) ? selected : '1';
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelector(`a[href="?concept=${number}"]`).setAttribute('aria-current', 'page');

function setProgress(value) {
  track.classList.remove('indeterminate');
  track.setAttribute('aria-valuenow', value);
  fill.style.transform = `scaleX(${value / 100})`;
  percentage.value = `${value}%`;
}

function download(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onprogress = event => {
      if (event.lengthComputable && event.total > 0) {
        setProgress(Math.min(99, Math.floor(100 * event.loaded / event.total)));
      }
    };
    request.onerror = reject;
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) resolve(request.response);
      else reject(new Error(`HTTP ${request.status}`));
    };
    request.send();
  });
}

async function loadConcept() {
  retry.hidden = true;
  status.textContent = '';
  setProgress(0);
  track.classList.add('indeterminate');
  track.removeAttribute('aria-valuenow');
  fill.style.transform = 'scaleX(1)';
  percentage.value = '…';
  main.setAttribute('aria-busy', 'true');
  let objectUrl;
  try {
    const image = new Image(1440, heights[number]);
    image.alt = `BELT IMPEX — концепция ${number}, полный макет`;
    const asset = `assets/concept-${number}.png`;
    if (location.protocol !== 'file:') objectUrl = URL.createObjectURL(await download(asset));
    image.src = objectUrl ?? asset;
    await image.decode();
    if (image.naturalWidth !== 2880 || image.naturalHeight !== 2 * heights[number]) throw new Error('Unexpected Retina frame dimensions');
    main.replaceChildren(image);
    setProgress(100);
    if (!reduced.matches) await new Promise(resolve => setTimeout(resolve, 380));
    loader.classList.add('done');
  } catch {
    setProgress(0);
    status.textContent = 'Не удалось загрузить макет.';
    retry.hidden = false;
  } finally {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    main.setAttribute('aria-busy', 'false');
  }
}

retry.addEventListener('click', loadConcept);
if (document.fullscreenEnabled) {
  fullscreen.hidden = false;
  fullscreen.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      fullscreen.title = 'Полный экран недоступен';
    }
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.title = document.fullscreenElement ? 'Выйти из полноэкранного режима' : 'На весь экран';
    fullscreen.setAttribute('aria-label', fullscreen.title);
  });
}
loadConcept();
