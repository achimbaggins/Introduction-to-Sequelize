//variabel untuk setiap form control
var username = document.getElementById('username');
var password = document.getElementById('password');


function validasi() {

if(username.value == ''){
    document.getElementById('ceknama').innerHTML = 'Username tidak boleh kosong!';
//    alert('Nama tidak boleh kosong!');
   return false;
} else if (password.value == ''){
    document.getElementById('cekpassword').innerHTML = 'Password tidak boleh kosong!';
    document.getElementById('ceknama').innerHTML = '';
    //alert('Password tidak boleh kosong');
    return false;
}
return true
}
