let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2},
];

function cekBuku() {
    let jumlah = document.getElementById("jumlah").value;
    let pilihanBuku = document.getElementById("buku").value;

    if (jumlah === "") {
        alert("Jumlah buku tidak boleh kosong!");
        return;
    }
    
    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihanBuku) {
            bukuDitemukan = true;
            if (jumlah > buku[i].jumlah) {
                alert("Jumlah buku yang dipilih tidak tersedia!");
                return;
            } else {
                alert("Silahkan ambil buku Anda!");
                return;
            }
        }
    }

    if (!bukuDitemukan) {
        alert("Buku yang dipilih tidak ditemukan!");
    }

}