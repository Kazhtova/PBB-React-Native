import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function LoopingPage() {
  let arr1: string[] = [];
  for (let i = 1; i <= 8; i++) arr1.push(`Tiket antrean nomor: ${i}`);

  let arr2: string[] = [];
  for (let i = 5; i >= 1; i--) arr2.push(String(i));
  arr2.push("Roket Meluncur!");

  let arr3: string[] = [];
  let jumlahPoin = 0;
  for (let deret = 5; deret > 0; deret--) {
    jumlahPoin += deret;
    arr3.push(`Deret: ${deret} -> Total Poin: ${jumlahPoin}`);
  }

  let arr4: string[] = [];
  for (let deret = 2; deret < 10; deret += 2) {
    arr4.push(`Meja VIP Nomor: ${deret}`);
  }

  let arr5: string[] = [];
  for (let i = 0; i <= 6; i++) {
    if (i === 3) arr5.push("Peringatan: Suhu Mesin Stabil!");
    else arr5.push(`Iterasi indeks: ${i}`);
  }

  let arr6: string[] = [];
  let flag = 1;
  while (flag < 10) {
    arr6.push(`Memanggil nasabah antrean ke-${flag}`);
    flag++;
  }

  let arr7: string[] = [];
  let totalTabungan = 0;
  let deretTabungan = 4;
  while (deretTabungan > 0) {
    totalTabungan += deretTabungan;
    arr7.push(`Kurang hari: ${deretTabungan} | Total Tabungan: ${totalTabungan}`);
    deretTabungan--;
  }

  let arr8: string[] = [];
  let pos = 0;
  while (pos < 5) {
    if (pos === 3) arr8.push(`Langkah ${pos}: Awas Halangan Dekat!`);
    else arr8.push(`Langkah ${pos}: Aman`);
    pos++;
  }

  const s9 = "Penyebab Infinite Loop: Variabel 'flag' tidak ditambahkan nilainya (tidak ada flag++), sehingga nilai flag selalu bernilai 1 (< 10). Solusi: Tambahkan operator kenaikan nilai (flag++) di dalam kurung kurawal while.";

  let arr10: string[] = [];
  for (let k = 1; k <= 10; k++) {
    arr10.push(`Kupon ${k}: ${k % 2 === 0 ? "Kupon Genap" : "Kupon Ganjil"}`);
  }

  const renderLines = (items: string[]) => (
    <View style={styles.listContainer}>
      {items.map((txt, idx) => (
        <Text key={idx} style={styles.itemText}>• {txt}</Text>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Card no="1" title="Antrean Loket Bioskop">{renderLines(arr1)}</Card>
      <Card no="2" title="Hitung Mundur Roket">{renderLines(arr2)}</Card>
      <Card no="3" title="Akumulasi Poin Kasir">{renderLines(arr3)}</Card>
      <Card no="4" title="Meja VIP Kelipatan Genap">{renderLines(arr4)}</Card>
      <Card no="5" title="Filter Suhu Mesin">{renderLines(arr5)}</Card>
      <Card no="6" title="Antrean Bank (While)">{renderLines(arr6)}</Card>
      <Card no="7" title="Celengan Tabungan (While)">{renderLines(arr7)}</Card>
      <Card no="8" title="Sensor Parkir">{renderLines(arr8)}</Card>
      <Card no="9" title="Investigasi Infinite Loop"><Text style={styles.itemText}>{s9}</Text></Card>
      <Card no="10" title="Pola Undian Kupon">{renderLines(arr10)}</Card>
    </ScrollView>
  );
}

const Card = ({ no, title, children }: { no: string; title: string; children: React.ReactNode }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Soal {no}: {title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { padding: 16, gap: 12 },
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 6 },
  listContainer: { gap: 2 },
  itemText: { fontSize: 13, color: '#334155', lineHeight: 18 },
});