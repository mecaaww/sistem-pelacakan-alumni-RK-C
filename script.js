var dataAlumni = [
  { nama: 'Budi Santoso', prodi: 'Teknik Informatika', angkatan: '2019', pekerjaan: 'Software Engineer', perusahaan: 'Tokopedia', status: 'Bekerja' },
  { nama: 'Siti Rahayu', prodi: 'Sistem Informasi', angkatan: '2018', pekerjaan: 'Data Analyst', perusahaan: 'Bank Mandiri', status: 'Bekerja' },
  { nama: 'Ahmad Fauzi', prodi: 'Teknik Informatika', angkatan: '2017', pekerjaan: 'Mahasiswa S2', perusahaan: 'ITB', status: 'Studi Lanjut' },
];

var dataAnalisis = [
  { nama: 'Fitra Ramadhan', sumber: 'Facebook', profesi: 'Guru SMA', konfiden: '87%' },
  { nama: 'Maya Putri', sumber: 'LinkedIn', profesi: 'Product Manager', konfiden: '95%' },
];

var hasilTersimpan = [];

function tampilkanAlumni() {
  var ul = document.getElementById('daftar-alumni');
  ul.innerHTML = '';
  for (var i = 0; i < dataAlumni.length; i++) {
    var a = dataAlumni[i];
    var li = document.createElement('li');
    li.textContent = a.nama + ' | ' + a.prodi + ' | ' + a.angkatan + ' | ' + a.pekerjaan + ' | ' + a.perusahaan + ' | ' + a.status;
    ul.appendChild(li);
  }
}

function tambahAlumni() {
  var nama = document.getElementById('nama').value;
  var prodi = document.getElementById('prodi').value;
  var angkatan = document.getElementById('angkatan').value;
  var pekerjaan = document.getElementById('pekerjaan').value;
  var perusahaan = document.getElementById('perusahaan').value;
  var status = document.getElementById('status').value;

  if (!nama || !prodi || !angkatan) {
    document.getElementById('pesan-tambah').textContent = 'Nama, prodi, dan angkatan wajib diisi!';
    return;
  }

  dataAlumni.push({ nama: nama, prodi: prodi, angkatan: angkatan, pekerjaan: pekerjaan, perusahaan: perusahaan, status: status });
  document.getElementById('pesan-tambah').textContent = 'Alumni ' + nama + ' berhasil ditambahkan.';
  document.getElementById('nama').value = '';
  document.getElementById('prodi').value = '';
  document.getElementById('angkatan').value = '';
  document.getElementById('pekerjaan').value = '';
  document.getElementById('perusahaan').value = '';
  tampilkanAlumni();
}

function cariAlumni() {
  var keyword = document.getElementById('keyword').value.toLowerCase();
  var ul = document.getElementById('hasil-cari');
  ul.innerHTML = '';
  var ditemukan = false;
  for (var i = 0; i < dataAlumni.length; i++) {
    var a = dataAlumni[i];
    if (a.nama.toLowerCase().indexOf(keyword) !== -1 || a.prodi.toLowerCase().indexOf(keyword) !== -1) {
      var li = document.createElement('li');
      li.textContent = a.nama + ' | ' + a.prodi + ' | ' + a.angkatan + ' | ' + a.status;
      ul.appendChild(li);
      ditemukan = true;
    }
  }
  if (!ditemukan) {
    ul.innerHTML = '<li>Tidak ada alumni ditemukan.</li>';
  }
}

function simpanSumber() {
  var aktif = [];
  if (document.getElementById('src-linkedin').checked) aktif.push('LinkedIn');
  if (document.getElementById('src-instagram').checked) aktif.push('Instagram');
  if (document.getElementById('src-facebook').checked) aktif.push('Facebook');
  if (document.getElementById('src-website').checked) aktif.push('Website Kampus');
  document.getElementById('pesan-sumber').textContent = 'Sumber aktif: ' + (aktif.length ? aktif.join(', ') : 'Tidak ada');
}

function jalankanQuery() {
  var namaQ = document.getElementById('q-nama').value || 'Query';
  var angkatan = document.getElementById('q-angkatan').value;
  var sumber = document.getElementById('q-sumber').value;
  var ul = document.getElementById('hasil-query');
  ul.innerHTML = '';
  var hasil = [];
  for (var i = 0; i < dataAlumni.length; i++) {
    var a = dataAlumni[i];
    if (!angkatan || a.angkatan === angkatan) hasil.push(a);
  }
  if (hasil.length === 0) {
    ul.innerHTML = '<li>Tidak ada hasil.</li>';
  } else {
    for (var j = 0; j < hasil.length; j++) {
      var li = document.createElement('li');
      li.textContent = hasil[j].nama + ' | ' + hasil[j].angkatan + ' | ' + hasil[j].status;
      ul.appendChild(li);
    }
  }
  alert('Query "' + namaQ + '" selesai dari sumber: ' + sumber + '. Ditemukan ' + hasil.length + ' alumni.');
}

function tampilkanAnalisis() {
  var ul = document.getElementById('list-analisis');
  ul.innerHTML = '';
  for (var i = 0; i < dataAnalisis.length; i++) {
    var a = dataAnalisis[i];
    var li = document.createElement('li');
    li.textContent = a.nama + ' | ' + a.profesi + ' | Sumber: ' + a.sumber + ' | Kepercayaan: ' + a.konfiden + ' ';
    var btnKonfirm = document.createElement('button');
    btnKonfirm.textContent = 'Konfirmasi';
    (function(idx) {
      btnKonfirm.onclick = function() {
        var alumni = dataAnalisis[idx];
        dataAlumni.push({ nama: alumni.nama, prodi: '-', angkatan: '-', pekerjaan: alumni.profesi, perusahaan: '-', status: 'Bekerja' });
        dataAnalisis.splice(idx, 1);
        tampilkanAlumni();
        tampilkanAnalisis();
        alert(alumni.nama + ' dikonfirmasi dan ditambahkan ke data alumni.');
      };
    })(i);
    var btnTolak = document.createElement('button');
    btnTolak.textContent = 'Tolak';
    (function(idx) {
      btnTolak.onclick = function() {
        dataAnalisis.splice(idx, 1);
        tampilkanAnalisis();
      };
    })(i);
    li.appendChild(btnKonfirm);
    li.appendChild(document.createTextNode(' '));
    li.appendChild(btnTolak);
    ul.appendChild(li);
  }
  if (dataAnalisis.length === 0) {
    ul.innerHTML = '<li>Tidak ada data untuk dianalisis.</li>';
  }
}

function simpanHasil() {
  hasilTersimpan = dataAlumni.slice();
  var ul = document.getElementById('list-tersimpan');
  ul.innerHTML = '';
  for (var i = 0; i < hasilTersimpan.length; i++) {
    var a = hasilTersimpan[i];
    var li = document.createElement('li');
    li.textContent = a.nama + ' | ' + a.prodi + ' | ' + a.angkatan + ' | ' + a.status;
    ul.appendChild(li);
  }
  document.getElementById('pesan-simpan').textContent = 'Hasil pelacakan berhasil disimpan (' + hasilTersimpan.length + ' data).';
}

function jalankanPelacakan() {
  var angkatan = document.getElementById('sched-angkatan').value;
  var sumber = document.getElementById('sched-sumber').value;
  var status = document.getElementById('status-pelacakan');
  var log = document.getElementById('log-pelacakan');
  status.textContent = 'Pelacakan sedang berjalan...';
  setTimeout(function() {
    var jumlah = Math.floor(Math.random() * 10) + 1;
    status.textContent = 'Pelacakan selesai.';
    var li = document.createElement('li');
    var waktu = new Date().toLocaleTimeString('id-ID');
    li.textContent = '[' + waktu + '] Pelacakan dari ' + sumber + (angkatan ? ' angkatan ' + angkatan : '') + ' selesai. ' + jumlah + ' alumni teridentifikasi.';
    log.prepend(li);
  }, 1500);
}

tampilkanAlumni();
tampilkanAnalisis();
