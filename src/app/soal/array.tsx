import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ArrayPage() {
  let res1: number[] = [];
  for (let i = 0; i <= 9; i++) res1.push(i);

  let res2: number[] = [];
  for (let i = 1; i <= 9; i++) {
    if (i % 2 !== 0) res2.push(i);
  }

  let res3: number[] = [];
  for (let i = 0; i <= 8; i++) {
    if (i % 2 === 0) res3.push(i);
  }

  let array1 = [1, 2, 3, 4, 5, 6];
  let res4 = array1[5];

  let array2 = [5, 2, 4, 1, 3, 5];
  let sortedArray = [...array2].sort();

  let array3 = ["selamat", "kalian", "melakukan", "perulangan", "array", "dengan", "for"];
  let res6: string[] = [];
  for (let i = 0; i < array3.length; i++) {
    res6.push(array3[i]);
  }

  let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let res7: number[] = [];
  for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) res7.push(array4[i]);
  }

  let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
  let res8 = kalimat.join(" ");

  let sayuran: string[] = [];
  sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Card no="1" title="Looping Sederhana 0-9" val={res1.join('\n')} />
      <Card no="2" title="Looping Ganjil" val={res2.join('\n')} />
      <Card no="3" title="Looping Genap" val={res3.join('\n')} />
      <Card no="4" title="Akses Index ke-5" val={`"${res4}"`} />
      <Card no="5" title="Sort Elemen Array" val={JSON.stringify(sortedArray)} />
      <Card no="6" title="Keluarkan Array dengan Loop" val={res6.join(' ')} />
      <Card no="7" title="Array Elemen Genap Saja" val={res7.join('\n')} />
      <Card no="8" title="Join Elemen Jadi String" val={`"${res8}"`} />
      <Card 
        no="9" 
        title="Push Data Sayuran" 
        val={`[\n  '${sayuran.join("',\n  '")}'\n]`} 
      />
    </ScrollView>
  );
}

const Card = ({ no, title, val }: { no: string; title: string; val: string }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Latihan {no}: {title}</Text>
    <Text style={styles.cardText}>{val}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { padding: 16, gap: 12 },
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 4 },
  cardText: { fontSize: 13, color: '#334155', fontFamily: 'monospace' },
});