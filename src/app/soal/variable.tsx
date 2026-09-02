import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function VariablePage() {
  const firstName = "Budi";
  const lastName = "Santoso";
  const isAktif = true;
  const s1 = `Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`;

  let rawUsername = " admin_smkn10 ";
  let cleanUsername = rawUsername.trim();
  const s2 = `Username: "${cleanUsername}" | Panjang: ${cleanUsername.length}`;

  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
  let idxBuruk = komentar.indexOf('buruk');
  let potongKomentar = komentar.substring(0, 19);
  const s3 = `Posisi 'buruk': ${idxBuruk} | Substring: "${potongKomentar}"`;

  const string1 = "diskon";
  const string2 = "spesial50";
  const s4 = string1.concat(string2).toUpperCase();

  let hargaStr = "150000.50";
  let stokStr = "25";
  let totalHargaStok = parseFloat(hargaStr) * parseInt(stokStr);

  let totalBelanja = 250000;
  totalBelanja -= 50000;
  let pajak = totalBelanja * (10 / 100);
  let totalBayar = totalBelanja + pajak;

  const inputUsia = "17";
  const syaratUsia = 17;
  const s7 = `Strict (===): ${inputUsia === syaratUsia} | Standar (>=): ${inputUsia >= syaratUsia}`;

  let isPasswordCorrect = true;
  let isEmailVerified = true;
  let loginBuka = isPasswordCorrect && isEmailVerified;

  let isNilaiTinggi = true;
  let isJuaraLomba = false;
  let lulusBeasiswa = isNilaiTinggi || isJuaraLomba;

  let hargaTot = 1000000;
  let member = true;
  let diskon = 0;
  if (member === true) {
    diskon = 0.2;
  }
  let total = hargaTot - (hargaTot * diskon);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Card no="1" q="Sistem Registrasi Akun" a={s1} />
      <Card no="2" q="Validasi Username" a={s2} />
      <Card no="3" q="Sensor Komentar" a={s3} />
      <Card no="4" q="Kode Kupon Diskon" a={s4} />
      <Card no="5" q="Konversi Harga & Stok" a={`Hasil kali: Rp ${totalHargaStok}`} />
      <Card no="6" q="Kalkulator Belanja" a={`Total Akhir: Rp ${totalBayar}`} />
      <Card no="7" q="Validasi Usia" a={s7} />
      <Card no="8" q="Verifikasi Login AND" a={`Tombol Dashboard Terbuka: ${loginBuka}`} />
      <Card no="9" q="Syarat Beasiswa OR" a={`Kelayakan: ${lulusBeasiswa}`} />
      <Card 
        no="10" 
        q="Block Scope let vs var" 
        a={`Total: Rp ${total}\n*Analisis: Variabel 'let' di dalam if(){ let diskon = 0.2; } tidak bisa diakses dari luar blok. Solusinya deklarasi let di luar blok terlebih dahulu.`} 
      />
    </ScrollView>
  );
}

const Card = ({ no, q, a }: { no: string; q: string; a: string }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Soal {no}: {q}</Text>
    <Text style={styles.cardText}>{a}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { padding: 16, gap: 12 },
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 4 },
  cardText: { fontSize: 13, color: '#334155', lineHeight: 18 },
});