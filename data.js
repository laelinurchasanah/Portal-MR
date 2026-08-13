// MASTER DATA MODUL MATERI & LAPORAN MR
const modulData = [
  {
    id: 1,
    title: "Dasar Manajemen Risiko",
    type: "materi",
    description: "Permen ATR/BPN No 1 Tahun 2026 tentang Manajemen Risiko",
    flipUrl:
      "https://drive.google.com/file/d/1CUom9BsaT-B708YDbc7ijJPanMhl-5_n/view?usp=sharing",
  },
  {
    id: 2,
    title: "Manajemen Risiko Pembangunan Nasional (MRPN)",
    type: "materi",
    description: "Peraturan Presiden (Perpres) Nomor 39 Tahun 2023",
    flipUrl: "https://online.pubhtml5.com/ptkhj/gkfp/",
  },
  {
    id: 3,
    title: "Dasar SPIP (Sistem Pengendalian Intern Pemerintah)",
    type: "materi",
    description:
      "Peraturan BPKP Nomor 5 Tahun 2021 tentang Penilaian Maturitas Penyelenggaraan Sistem Pengendalian Intern Pemerintah Terintegrasi pada Kementerian/Lembaga/Pemerintah Daerah",
    flipUrl: "https://drive.google.com/file/d/1LgrwhI45nKHhPYCtU066v3sDLDEDaqaU/view?usp=sharing",
  },
  {
    id: 4,
    title: "Sosialisasi Permen ATR/BPN No 1 Tahun 2026",
    type: "materi",
    description: "Ringkasan Permen ATR/BPN No 1 Tahun 2026.",
    flipUrl: "https://online.fliphtml5.com/jhqkx/oocp/",
  },
  {
    id: 5,
    title: "SPIP MR",
    type: "materi",
    description: "SPIP pada Tindaklanjut Manajemen Risiko Kementerian",
    flipUrl: "https://online.fliphtml5.com/jhqkx/SPIP-MR/",
  },
  {
    id: 6,
    title: "Panduan Pengisian Risk Register",
    type: "materi",
    description: "Tata cara pengisian Risk Register pada Satuan kerja",
    flipUrl:
      "https://online.fliphtml5.com/jhqkx/Panduan-Penyusunan-Risk-Register_2026/",
  },
  {
    id: 7,
    title: "Laporan Manajemen Risiko Triwulan II Tahun 2026",
    type: "laporan",
    description:
      "Laporan Manajemen Risiko yang disusun berdasarkan risk register pada satuan kerja",
    flipUrl:
      "https://online.fliphtml5.com/jhqkx/Laporan-MR-TW-II_Biro-Humas-dan-Protokol/",
  },
];

// MASTER LINK GOOGLE DRIVE / GOOGLE SHEETS REGISTER RISIKO 2026
const riskRegisterDriveData = {
  q1: {
    // Tautan embed iframe (gunakan opsi File -> Publish to Web -> Embed di Google Sheets)
    embedUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKaF-5lVCs5I4HU45GO4F4N0wHTvJoQC_JD1-gJaB4u_nH7feBPU8m6BR-58c-XA/pubhtml",
    // Tautan direct link Google Drive/Sheets untuk dibuka pengguna
    directUrl:
      "https://docs.google.com/spreadsheets/d/1D82Y6WXCbzGghQAg_pKQjKDY08qk9YOp/edit?usp=sharing&ouid=110118457664365031197&rtpof=true&sd=true",
  },
  q2: {
    embedUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_EKTfNjKhGteg-muawEslc5Qe_afVRt5MnyXkzMYf0ZbKQXs6_k9OmecwWCNInA/pubhtml",
    directUrl:
      "https://docs.google.com/spreadsheets/d/1FHs1zHzad-RtWu2qPGdJC71WdSSKBCB5/edit?usp=sharing&ouid=110118457664365031197&rtpof=true&sd=true",
  },
  q3: {
    embedUrl: "",
    directUrl: "",
  },
  q4: {
    embedUrl: "",
    directUrl: "",
  },
};
