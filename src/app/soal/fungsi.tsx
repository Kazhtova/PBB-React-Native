import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function FungsiPage() {
  function munculkanAngkaDua() {
    return 2;
  }

  function kalikanDua(angka: number) {
    return angka * 2;
  }

  function tampilkanAngka(angkaPertama: number, angkaKedua: number) {
    return angkaPertama + angkaKedua;
  }

  function fungsiDefault(angka: number = 1) {
    return angka;
  }

  function cekKondisi(angkaPertama: number, angkaKedua: number) {
    let hasil = angkaPertama + angkaKedua;
    if (hasil > 10) return "hasil lebih besar dari 10";
    else if (hasil > 0 && hasil < 10) return "hasil lebih kecil dari 10";
    else if (hasil === 0) return "hasil 0";
    return "Tidak ada nilai dari parameter";
  }

  const fullName = (...rest: string[]) => {
    let [firstName, lastName] = rest;
    return `${firstName} ${lastName}`;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Card title="1. Function dengan Return" result={String(munculkanAngkaDua())} />
      <Card title="2. Function Satu Parameter" result={`kalikanDua(2) = ${kalikanDua(2)}`} />
      <Card title="3. Function Multi Parameter" result={`tampilkanAngka(5, 3) = ${tampilkanAngka(5, 3)}`} />
      <Card 
        title="4. Default Parameter" 
        result={`Dengan nilai (5): ${fungsiDefault(5)} | Tanpa nilai (default): ${fungsiDefault()}`} 
      />
      <Card title="5. Function Percabangan" result={`cekKondisi(5, 10) = "${cekKondisi(5, 10)}"`} />
      <Card title="6. Arrow Function & Rest Parameter" result={`fullName('John', 'Doe') = "${fullName('John', 'Doe')}"`} />
    </ScrollView>
  );
}

const Card = ({ title, result }: { title: string; result: string }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>{result}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { padding: 16, gap: 12 },
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 4 },
  cardText: { fontSize: 13, color: '#334155' },
});