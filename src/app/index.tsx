import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function MenuIndex() {
  const menuList = [
    { title: '1. Soal Variabel & Operator', path: '/soal/variable' },
    { title: '2. Soal Kondisi (If-Else & Ternary)', path: '/soal/kondisi' },
    { title: '3. Soal Looping (Perulangan)', path: '/soal/looping' },
    { title: '4. Soal Array & ES6', path: '/soal/array' },
    { title: '5. Soal Fungsi (Function)', path: '/soal/fungsi' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Tugas Praktikum</Text>
      <View style={styles.list}>
        {menuList.map((item, idx) => (
          <Link key={idx} href={item.path as any} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20, justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 24, color: '#1a202c' },
  list: { gap: 12 },
  button: { backgroundColor: '#0284c7', paddingVertical: 14, paddingHorizontal: 16, borderRadius: 8 },
  buttonText: { color: '#ffffff', fontSize: 15, fontWeight: '600', textAlign: 'center' },
});