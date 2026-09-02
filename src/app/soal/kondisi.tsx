import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function KondisiPage() {
  let nilaiUjian = 78;
  const s1Text = nilaiUjian >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
  const s1Color = nilaiUjian >= 75 ? '#16a34a' : '#dc2626';

  let suhuUdara = 36;

  let isLoggedIn = true;
  let namaUser = "Kaka";
  const s3 = isLoggedIn ? `Halo, ${namaUser}!` : "Silakan Login Terlebih Dahulu";

  let totalBelanja = 450000;
  let diskonPesan = "", diskonColor = "";
  if (totalBelanja >= 500000) {
    diskonPesan = "Anda Mendapat Diskon 20%!";
    diskonColor = '#7e22ce';
  } else if (totalBelanja >= 200000) {
    diskonPesan = "Anda Mendapat Diskon 10%!";
    diskonColor = '#2563eb';
  } else {
    diskonPesan = "Belanja lebih banyak untuk dapat diskon!";
    diskonColor = '#64748b';
  }

  let jamSekarang = 19;
  const s5 = (jamSekarang >= 8 && jamSekarang < 17) ? "Toko Buka" : "Toko Tutup";

  let isDarkMode = false;
  const bgTema = isDarkMode ? "#121212" : "#FFFFFF";
  const textTema = isDarkMode ? "#FFFFFF" : "#000000";

  let password = "pass";

  let jenisKendaraan = "Mobil";
  const s8 = jenisKendaraan === "Mobil" ? "Tarif Parkir: Rp 5.000/jam" : "Tarif Parkir: Rp 2.000 / jam";

  let stokBarang = 7;
  let stokPesan = "", stokColor = "";
  if (stokBarang > 10) {
    stokPesan = "Stok Tersedia";
    stokColor = "#16a34a";
  } else if (stokBarang >= 1) {
    stokPesan = "Stok Terbatas! Segera Beli";
    stokColor = "#ea580c";
  } else {
    stokPesan = "Stok Habis";
    stokColor = "#dc2626";
  }

  let usiaPenonton = 16;
  let kategoriFilm = "";
  if (usiaPenonton > 17) {
    kategoriFilm = "Kategori: Dewasa (D)";
  } else if (usiaPenonton >= 13) {
    kategoriFilm = "Kategori: Remaja (R)";
  } else {
    kategoriFilm = "Kategori: Semua Umur (SU)";
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 1: Kelulusan Ujian</Text>
        <Text style={{ color: s1Color, fontWeight: '700' }}>{s1Text}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 2: Peringatan Cuaca</Text>
        {suhuUdara > 35 && (
          <Text style={{ color: '#dc2626', fontWeight: '600' }}>
            Peringatan: Cuaca Sangat Panas Hari Ini! ({suhuUdara}°C)
          </Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 3: Status Login</Text>
        <Text style={styles.cardText}>{s3}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 4: Diskon Belanja</Text>
        <Text style={{ color: diskonColor, fontWeight: '600' }}>{diskonPesan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 5: Jam Operasional ({jamSekarang}.00)</Text>
        <Text style={styles.cardText}>{s5}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: bgTema }]}>
        <Text style={[styles.cardTitle, { color: textTema }]}>Soal 6: Mode Tampilan</Text>
        <Text style={{ color: textTema }}>Warna container: {bgTema} | Mode Gelap: {String(isDarkMode)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 7: Validasi Password</Text>
        {password.length < 6 && (
          <Text style={{ color: '#dc2626', fontWeight: '600' }}>
            Password terlalu pendek (minimal 6 karakter)
          </Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 8: Tarif Parkir ({jenisKendaraan})</Text>
        <Text style={styles.cardText}>{s8}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 9: Stok Barang ({stokBarang} unit)</Text>
        <Text style={{ color: stokColor, fontWeight: '600' }}>{stokPesan}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Soal 10: Rekomendasi Film ({usiaPenonton} tahun)</Text>
        <Text style={styles.cardText}>{kategoriFilm}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { padding: 16, gap: 12 },
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 4 },
  cardText: { fontSize: 13, color: '#334155' },
});