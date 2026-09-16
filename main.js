document.addEventListener('DOMContentLoaded', function() {
  const gateSubmit = document.getElementById('gateSubmit');
  const gateCode = document.getElementById('gateCode');
  const gateError = document.getElementById('gateError');

  if (gateSubmit) {
    gateSubmit.addEventListener('click', function() {
      if (gateCode.value.trim().length === 0) {
        gateError.style.display = 'block';
        gateError.textContent = 'Masukkan kode akses terlebih dahulu.';
        return;
      }
      document.getElementById('gateScreen').style.display = 'none';
      document.getElementById('appShell').style.display = 'block';
      initDashboard();
    });
  }
});

function initDashboard() {
  updateStats();
  renderModulTabs('semua');
  renderVideoCarousel();
  switchQuarter('q1'); // Standar default ke Q1 2026
}

function logout() {
  document.getElementById('appShell').style.display = 'none';
  document.getElementById('gateScreen').style.display = 'flex';
  document.getElementById('gateCode').value = '';
  document.getElementById('gateError').style.display = 'none';
}

function updateStats() {
  document.getElementById('statModul').textContent = modulData.filter(m => m.type === 'materi').length;
  document.getElementById('statReport').textContent = modulData.filter(m => m.type === 'laporan').length;
}

// RENDER CARDS FLIPBOOK DAN LOGIKA CSS AKTIF UNTUK TOMBOL TAB
function renderModulTabs(filterType) {
  // Update state tombol aktif (CSS)
  const tabs = document.querySelectorAll('.filter-tabs .tab-btn');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-category') === filterType) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Render items
  const grid = document.getElementById('modulGrid');
  grid.innerHTML = '';

  const filtered = filterType === 'semua' 
    ? modulData 
    : modulData.filter(m => m.type === filterType);

  filtered.forEach(item => {
    const badgeClass = item.type === 'materi' ? 'type-materi' : 'type-laporan';
    const badgeText = item.type === 'materi' ? 'Modul Materi' : 'Laporan MR';
    
    const card = document.createElement('div');
    card.className = 'modul-card';
    card.innerHTML = `
      <div class="modul-card-header">
        <span class="badge-type ${badgeClass}">${badgeText}</span>
        <i class="fa-solid fa-book-open" style="color: #2a5298;"></i>
      </div>
      <div class="modul-card-body">
        <h4 class="modul-title">${item.title}</h4>
        <p class="modul-desc">${item.description}</p>
      </div>
      <div class="modul-card-footer">
        <button class="btn-view" onclick="openViewer('${item.title}', '${item.flipUrl}')">
          <i class="fa-solid fa-eye"></i> Buka Flipbook
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// RENDER CAROUSEL VIDEO PEMBELAJARAN (YOUTUBE)
function renderVideoCarousel() {
  const carousel = document.getElementById('videoCarousel');
  if (!carousel) return;
  carousel.innerHTML = '';

  videoData.forEach(video => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.id = `videoCard-${video.id}`;
    card.innerHTML = `
      <div class="video-thumb-wrap" onclick="playVideo(${video.id}, '${video.videoId}')">
        <img src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg" alt="${video.title}" loading="lazy">
        <div class="video-play-overlay"><i class="fa-solid fa-circle-play"></i></div>
      </div>
      <div class="video-card-body">
        <div class="video-card-title">${video.title}</div>
        <div class="video-card-desc">${video.description}</div>
      </div>
    `;
    carousel.appendChild(card);
  });
}

// GANTI THUMBNAIL DENGAN IFRAME YOUTUBE SAAT DIKLIK (PLAY INLINE)
function playVideo(id, videoId) {
  const card = document.getElementById(`videoCard-${id}`);
  if (!card) return;
  const thumbWrap = card.querySelector('.video-thumb-wrap');
  thumbWrap.outerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

// GESER CAROUSEL VIDEO KE KIRI/KANAN
function scrollVideoCarousel(direction) {
  const carousel = document.getElementById('videoCarousel');
  if (!carousel) return;
  const cardWidth = carousel.querySelector('.video-card')?.offsetWidth || 280;
  const scrollAmount = (cardWidth + 16) * 2; // geser sejauh 2 kartu, 16 = gap
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// LOGIKA SWITCH TRIWULAN REGISTER RISIKO 2026
function switchQuarter(quarterKey) {
  const selectedData = riskRegisterDriveData[quarterKey];
  if (selectedData) {
    document.getElementById('riskSheetIframe').src = selectedData.embedUrl;
    document.getElementById('openDirectDriveBtn').href = selectedData.directUrl;
  }
}

// MODAL VIEWER IFRAME FLIPBOOK
// MODAL VIEWER IFRAME FLIPBOOK / GOOGLE DRIVE PDF
function openViewer(title, url) {
  let iframeUrl = url;
  let tabUrl = url;

  // Deteksi jika link berasal dari Google Drive
  if (url.includes('drive.google.com')) {
    // Ubah URL /view... menjadi /preview agar tidak diblokir oleh iframe
    iframeUrl = url.replace(/\/view(\?.*)?$/, '/preview');
    // Tombol buka tab baru tetap menggunakan link view asli
    tabUrl = url.replace(/\/preview$/, '/view?usp=sharing');
  }

  document.getElementById('viewerTitle').innerHTML = `<i class="fa-solid fa-book-open"></i> ${title}`;
  document.getElementById('viewerIframe').src = iframeUrl;
  document.getElementById('externalLinkBtn').href = tabUrl;
  document.getElementById('viewerModal').style.display = 'flex';
}

function closeViewerModal() {
  document.getElementById('viewerModal').style.display = 'none';
  document.getElementById('viewerIframe').src = '';
}