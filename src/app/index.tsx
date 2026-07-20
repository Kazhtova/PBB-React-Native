import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 
import LatVar from './var';

export default function Index() {
  // Data 
  // 1

  const firstName = "Budi";
  const lastName = "Setiono";
  const isAktif = true;

  const statusText = isAktif ? "Aktif" : "Tidak Aktif";

  // 2
  let rawUsername = " admin_smkn10 "
  let unSpace = rawUsername.trim()
  let panjang = unSpace.length

  //3
  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!"
  let indexOf = komentar.indexOf('buruk')
  let string = komentar.substring(0, 19)

  //4
  const string1 = "diskon"
  const string2 = "special150"

  //5
  let hargaStr = "150000.50"
  let stokStr = "25"

  let harga = parseFloat(hargaStr)
  let stok = Number(stokStr)

  let gabungan = string1.concat(" ", string2)
  let besar = gabungan.toUpperCase()

  //6
  let totalBelanja = 250000

  totalBelanja -= 50000
  
  let diskon = totalBelanja * 10/100

  let totalPembayaran = totalBelanja + diskon


  //7
  const inputUsia = "17";
  const syaratUsia = 17;


  const hasilStrictEqual = inputUsia === syaratUsia;

  const hasilPerbandingan = inputUsia >= syaratUsia;

  //8
  let isPasswordCorrect = true
  let isEmailVerified = true

  let terbuka = isPasswordCorrect && isEmailVerified

  //9
  let isNilaiTinggi = true
  let isJuaraLomba = true

  let lulus = isNilaiTinggi || isJuaraLomba

  //10

  // let hargaTot = 1000000
  // let member = true

  // if(member === true){
  //   let diskon = 0.2
  // }

  // let total = hargaTot - (hargaTot * diskon)

  let hargaTot = 1000000;
  let member = true;
  let diskon2 = 0; 

  if (member === true) {
    diskon2 = 0.2; 
  }

  let total = hargaTot - (hargaTot * diskon2);

  // 1

  const hasil = 75

  // const hasil = nilai >= 75 ? "lulus" : 'Tidak Lulus'

  // 2 
  let suhuUdara = 36

  //3
  let isLoggedin = true
  let namaUser = "Kaka"

  let logginTrue = isLoggedin ? namaUser : 'Tidak Ada'

  //4


  let pesanDiskon = ""
  let warnaTeks = ""

  let totalBelanja2 = 500000
  if(totalBelanja > 500000){
    pesanDiskon = 'Anda Mendapat Diskon 20%!';
    warnaTeks = 'purple';
  } else{
    if(totalBelanja2 >= 200000){
      pesanDiskon = 'Anda Mendapat Diskon 10%!';
      warnaTeks = 'blue';
    }else{
      pesanDiskon = 'Belanja lebih banyak untuk dapat diskon!';
      warnaTeks = 'gray';
    }
  }

  //5
  const jamSekarang = 18

  let statusToko = ""

  if(jamSekarang >= 8 && jamSekarang < 17){
    statusToko = 'Toko Buka';
  }else{
    statusToko = 'Toko Tutup';
  }

  //6
  let isDarkMode = false
  let warna = isDarkMode ? "#121212" : "#FFFFFF"

  //7

  //8

  //9

  //10

  //1
  for(var nomors = 1; nomors <= 9; nomors++){
    console.log('Antrean Nomor: ' + nomors)
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        <LatVar />
        {/* <p>{panjang}</p>
        <p>{indexOf}</p>
        <p>{string}</p>
        <p>{besar}</p>
        <p>{harga}</p>
        <p>{stok}</p>
        <p>{totalPembayaran}</p>
        <p>{hasilStrictEqual.toString()}</p>
        <p>{String(hasilPerbandingan)}</p>
        <p>{terbuka.toString()}</p>
        <p>{lulus.toString()}</p> */}
        <p>{total}</p>
        <Text style={[styles.text, { color: hasil >= 75 ? 'green' : 'red' }]}>
        Nilai = {hasil} 
        <br />
        {hasil >= 75 ? 'Selamat, Anda Lulus!' : 'Maaf, Anda Belum Lulus.'}
        </Text>
        <br />
          {suhuUdara > 35 && (
              <Text>
                Peringatan: Cuaca Sangat Panas Hari Ini!
              </Text>
          )}
        <br />  
        Halo {logginTrue}
        <br />

        <Text style={[styles.text, { color: warnaTeks }]}>
        {pesanDiskon}
        </Text>
        <br />
        <p>{statusToko}</p>
        <br />
        <Text style={[styles.text, { color: warna }]}>
        Ini Hasil 
        <br />
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  statusText: {
    fontSize: 16,
    color: "#666",
  },
  active: {
    color: "#2e7d32", 
    fontWeight: "bold",
  },
  inactive: {
    color: "#c62828", 
    fontWeight: "bold",
  },
  text: { fontSize: 18, fontWeight: 'bold' },
});