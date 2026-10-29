function fn_ValForm() {
    var sMsg = "";

    if (document.getElementById("nama").value == "") {
        sMsg += "\n*Nama harus diisi\n";
    }
    if (document.getElementById("email").value == "") {
        sMsg += "\n*Email harus diisi\n";
    }
    if (document.getElementById("umur").value == "") {
        sMsg += "\n*Umur harus diisi\n";
    }else if(umur <= 25){
        sMsg += "\nPeserta Mahasiswa\n";
    }else{
        sMsg += "\nPeserta Umum\n";
    }

    if (sMsg != "") {
        alert("Terjadi Kesalahan: " + sMsg);
        return false;
    }else{
        alert("Terimakasih " + document.getElementById("nama").value + "! anda telah terdaftar di acara " + inputs);
        return true;
    }

}

var inputs;
switch(inputs){
    case "W":
        inputs = "WORKSHOP";
        break;
    case "S":
        inputs = "SEMINAR";
        break;
    case "L":
        inputs = "LOMBA KODING";
        break;
    default:
        alert("Pilih salah satu jenis kegiatan");
}
