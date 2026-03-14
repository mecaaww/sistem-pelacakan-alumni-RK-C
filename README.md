# Sistem Pelacakan Alumni

## Link
- **Link Publish Web:** https://sistem-pelacakanalumni.vercel.app/
- **Source Code:** https://github.com/mecaaww/sistem-pelacakan-alumni-RK-C

## Fitur dari project 2
- Atur sumber pelacakan
- Tambah data alumni
- Cari alumni
- Buat query pencarian
- Analisis & identifikasi alumni
- Simpan hasil pelacakan
- Jalankan pelacakan otomatis (Scheduler)

## Pengujian Aplikasi

| No | Aspek Kualitas | Skenario Uji | Hasil yang Diharapkan | Hasil Aktual | Status |
|----|---------------|--------------|----------------------|--------------|--------|
| 1 | Fungsionalitas | Tambah data alumni | Data muncul di daftar alumni | Data muncul di daftar alumni | ✅ Pass |
| 2 | Fungsionalitas | Validasi form kosong | Muncul pesan peringatan | Muncul pesan "wajib diisi" | ✅ Pass |
| 3 | Fungsionalitas | Cari alumni | Alumni yang sesuai muncul | Alumni ditemukan dan tampil | ✅ Pass |
| 4 | Fungsionalitas | Cari alumni tidak ada | Muncul pesan tidak ditemukan | Muncul pesan "Tidak ada alumni ditemukan" | ✅ Pass |
| 5 | Fungsionalitas | Jalankan query pencarian | Hasil query tampil sesuai filter | Hasil tampil sesuai filter | ✅ Pass |
| 6 | Fungsionalitas | Konfirmasi analisis alumni | Alumni pindah ke daftar alumni | Alumni berhasil ditambahkan | ✅ Pass |
| 7 | Fungsionalitas | Tolak analisis alumni | Data dihapus dari daftar analisis | Data berhasil dihapus | ✅ Pass |
| 8 | Fungsionalitas | Simpan hasil pelacakan | Data tampil di list tersimpan | Data tampil di list tersimpan | ✅ Pass |
| 9 | Fungsionalitas | Jalankan pelacakan scheduler | Status berjalan lalu selesai + log muncul | Status dan log muncul | ✅ Pass |
| 10 | Fungsionalitas | Atur sumber pelacakan | Pesan sumber aktif muncul | Pesan tampil sesuai pilihan | ✅ Pass |
| 11 | Usability | Tampilan mudah dipahami | Semua fitur terlihat jelas | Halaman rapi dan terbaca | ✅ Pass |
| 12 | Kompatibilitas | Buka di Chrome | Halaman tampil normal | Tampil normal | ✅ Pass |
| 13 | Portabilitas | Jalankan tanpa server | Semua fitur berjalan tanpa error | Berjalan normal | ✅ Pass |
