import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  FlatList,
  Modal,
  ActivityIndicator,
  SectionList,
  TouchableOpacity,
  Switch,
} from 'react-native';

// --- KOMPONEN REUSABLE (SOAL 1, 5, 7) ---

// Soal 1: UserCard Reusable[cite: 6]
const UserCard = ({ name, status, imageUrl }: { name: string; status: string; imageUrl: string }) => (
  <View style={styles.userCard}>
    <Image source={{ uri: imageUrl }} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={[styles.userStatus, status === 'Aktif' ? styles.statusAktif : styles.statusAlumni]}>
        {status}
      </Text>
    </View>
  </View>
);

// Soal 5: MyButton Varian[cite: 6]
const MyButton = ({ title, onPress, variant = 'primary' }: { title: string; onPress: () => void; variant?: 'primary' | 'success' | 'danger' }) => {
  const bgColors = {
    primary: '#0284c7',
    success: '#16a34a',
    danger: '#dc2626',
  };
  return (
    <TouchableOpacity style={[styles.btnVariant, { backgroundColor: bgColors[variant] }]} onPress={onPress}>
      <Text style={styles.btnVariantText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Soal 7: CustomImage dengan ActivityIndicator[cite: 6]
const CustomImage = ({ uri }: { uri: string }) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.customImageWrap}>
      {loading && <ActivityIndicator size="small" color="#0284c7" style={StyleSheet.absoluteFillObject} />}
      <Image
        source={{ uri }}
        style={styles.customImg}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

// --- HALAMAN UTAMA ---

export default function ComponentPage() {
  // State Soal 2[cite: 6]
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  // State Soal 6[cite: 6]
  const [modalVisible, setModalVisible] = useState(false);

  // State Soal 9[cite: 6]
  const [selectedTheme, setSelectedTheme] = useState('System Default');

  // State Soal 10[cite: 6]
  const [isAgreed, setIsAgreed] = useState(false);

  // Data Dummy Soal 3 (50 Produk)[cite: 6]
  const produkList = Array.from({ length: 50 }, (_, i) => ({
    id: i.toString(),
    title: `Produk Item ke-${i + 1}`,
    harga: `Rp ${(i + 1) * 10}.000`,
  }));

  // Data Kategori Soal 4[cite: 6]
  const categories = ['Frontend', 'Backend', 'Mobile App', 'DevOps', 'UI/UX', 'Database'];

  // Data SectionList Soal 8[cite: 6]
  const nilaiSiswa = [
    {
      title: 'Mata Pelajaran Kejuruan',
      data: [
        { mapel: 'Pemrograman Mobile', nilai: 95 },
        { mapel: 'Basis Data', nilai: 90 },
      ],
    },
    {
      title: 'Mata Pelajaran Umum',
      data: [
        { mapel: 'Matematika', nilai: 88 },
        { mapel: 'Bahasa Indonesia', nilai: 85 },
      ],
    },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollPadding}>
      
      {/* Soal 1: Pembuatan Profil Anggota Komunitas */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 1: Direktori Profil Anggota</Text>
        <UserCard
          name="Ahmad Rizky"
          status="Aktif"
          imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
        />
        <UserCard
          name="Siti Fatimah"
          status="Alumni"
          imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        />
      </View>

      {/* Soal 2: Form Login Interaktif dengan Pressable */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 2: Form Login Interaktif</Text>
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { opacity: pressed ? 0.6 : 1, backgroundColor: pressed ? '#0369a1' : '#0284c7' },
          ]}
          onPress={() => setIsLoginPressed(true)}
        >
          <Text style={styles.pressableBtnText}>Masuk Akun</Text>
        </Pressable>
        {isLoginPressed && <Text style={styles.feedbackText}>Memproses login untuk: {email}</Text>}
      </View>

      {/* Soal 3: Katalog Produk Toko Online (FlatList) */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 3: Katalog 50 Produk (FlatList)</Text>
        <FlatList
          data={produkList}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
          style={{ height: 180 }}
          renderItem={({ item }) => (
            <View style={styles.productRow}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productPrice}>{item.harga}</Text>
            </View>
          )}
        />
      </View>

      {/* Soal 4: Halaman Pembelajaran Interaktif */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 4: ScrollView Horizontal & Vertikal</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {categories.map((cat, idx) => (
            <View key={idx} style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView nestedScrollEnabled style={{ height: 110, marginTop: 10 }}>
          <Text style={styles.articleTitle}>Arsitektur Pemrograman Mobile</Text>
          <Text style={styles.articleText}>
            React Native memungkinkan pembuatan aplikasi multiplatform menggunakan komponen native. Kombinasi FlatList,
            SectionList, dan ScrollView menjamin manajemen rendering data berukuran besar secara optimal.
          </Text>
        </ScrollView>
      </View>

      {/* Soal 5: Komponen Tombol Kustom Berdasarkan Varian */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 5: Custom MyButton (Varian Props)</Text>
        <View style={styles.btnRow}>
          <MyButton title="Primary" variant="primary" onPress={() => {}} />
          <MyButton title="Success" variant="success" onPress={() => {}} />
          <MyButton title="Danger" variant="danger" onPress={() => {}} />
        </View>
      </View>

      {/* Soal 6: Status Indikator Koneksi (Modal + ActivityIndicator) */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 6: Indikator Koneksi</Text>
        <TouchableOpacity style={styles.fetchBtn} onPress={() => setModalVisible(true)}>
          <Text style={styles.fetchBtnText}>Fetch Data</Text>
        </TouchableOpacity>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ActivityIndicator size="large" color="#0284c7" />
              <Text style={styles.modalText}>Memuat data...</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>Selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* Soal 7: Layout Galeri Foto (CustomImage Event Handling) */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 7: Custom Image Placeholder</Text>
        <CustomImage uri="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" />
      </View>

      {/* Soal 8: Dashboard Nilai Siswa (SectionList) */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 8: Dashboard Nilai (SectionList)</Text>
        <SectionList
          sections={nilaiSiswa}
          keyExtractor={(item, index) => item.mapel + index}
          nestedScrollEnabled
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.sectionRow}>
              <Text style={styles.sectionMapel}>{item.mapel}</Text>
              <Text style={styles.sectionNilai}>{item.nilai}</Text>
            </View>
          )}
        />
      </View>

      {/* Soal 9: Pilihan Kategori Kustom dengan Visual Feedback */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 9: Pemilihan Mode Tema</Text>
        <View style={styles.themeOptions}>
          {['Light Mode', 'Dark Mode', 'System Default'].map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.themeBtn,
                selectedTheme === mode && styles.themeBtnActive,
              ]}
              onPress={() => setSelectedTheme(mode)}
            >
              <Text style={[styles.themeBtnText, selectedTheme === mode && styles.themeBtnTextActive]}>
                {mode}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Soal 10: Pengaturan Kebijakan Privasi (Switch + Disabled Button) */}
      <View style={styles.cardBox}>
        <Text style={styles.boxTitle}>Soal 10: Persetujuan Syarat & Ketentuan</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Saya menyetujui seluruh kebijakan & privasi</Text>
          <Switch value={isAgreed} onValueChange={setIsAgreed} thumbColor={isAgreed ? '#0284c7' : '#cbd5e1'} />
        </View>
        <TouchableOpacity
          style={[styles.submitBtn, !isAgreed && styles.submitBtnDisabled]}
          disabled={!isAgreed}
        >
          <Text style={styles.submitBtnText}>Submit Pendaftaran</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f1f5f9' },
  scrollPadding: { padding: 16, gap: 14 },
  cardBox: { backgroundColor: '#ffffff', borderRadius: 8, padding: 14, borderWidth: 1, borderColor: '#e2e8f0' },
  boxTitle: { fontSize: 14, fontWeight: '700', color: '#0369a1', marginBottom: 10 },

  // S1
  userCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#e2e8f0' },
  userInfo: { marginLeft: 12 },
  userName: { fontSize: 14, fontWeight: '600', color: '#1e293b' },
  userStatus: { fontSize: 12, fontWeight: '500' },
  statusAktif: { color: '#16a34a' },
  statusAlumni: { color: '#64748b' },

  // S2
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 6, padding: 8, marginBottom: 8, fontSize: 13 },
  pressableBtn: { paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  pressableBtnText: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
  feedbackText: { marginTop: 6, fontSize: 12, color: '#16a34a' },

  // S3
  productRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: 0.5, borderBottomColor: '#e2e8f0' },
  productName: { fontSize: 13, color: '#334155' },
  productPrice: { fontSize: 13, fontWeight: '600', color: '#0284c7' },

  // S4
  horizontalScroll: { flexDirection: 'row', marginBottom: 6 },
  categoryBadge: { backgroundColor: '#e0f2fe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, marginRight: 8 },
  categoryBadgeText: { color: '#0369a1', fontSize: 12, fontWeight: '600' },
  articleTitle: { fontSize: 13, fontWeight: '700', color: '#1e293b', marginBottom: 4 },
  articleText: { fontSize: 12, color: '#64748b', lineHeight: 18 },

  // S5
  btnRow: { flexDirection: 'row', gap: 8 },
  btnVariant: { flex: 1, paddingVertical: 8, borderRadius: 6, alignItems: 'center' },
  btnVariantText: { color: '#fff', fontSize: 12, fontWeight: '600' },

  // S6
  fetchBtn: { backgroundColor: '#0284c7', padding: 10, borderRadius: 6, alignItems: 'center' },
  fetchBtnText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: 220, backgroundColor: '#fff', borderRadius: 8, padding: 20, alignItems: 'center', gap: 12 },
  modalText: { fontSize: 13, color: '#334155' },
  closeBtn: { marginTop: 6, paddingVertical: 4, paddingHorizontal: 12, backgroundColor: '#e2e8f0', borderRadius: 4 },
  closeBtnText: { fontSize: 12, color: '#334155' },

  // S7
  customImageWrap: { width: '100%', height: 140, borderRadius: 6, overflow: 'hidden', backgroundColor: '#e2e8f0', justifyContent: 'center', alignItems: 'center' },
  customImg: { width: '100%', height: '100%' },

  // S8
  sectionHeader: { backgroundColor: '#f1f5f9', paddingVertical: 4, paddingHorizontal: 6, fontSize: 12, fontWeight: '700', color: '#475569', marginTop: 6 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, paddingHorizontal: 6 },
  sectionMapel: { fontSize: 12, color: '#334155' },
  sectionNilai: { fontSize: 12, fontWeight: '600', color: '#0284c7' },

  // S9
  themeOptions: { flexDirection: 'row', gap: 8 },
  themeBtn: { flex: 1, paddingVertical: 8, borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 6, alignItems: 'center' },
  themeBtnActive: { backgroundColor: '#0284c7', borderColor: '#0284c7' },
  themeBtnText: { fontSize: 11, color: '#475569', fontWeight: '500' },
  themeBtnTextActive: { color: '#ffffff', fontWeight: '700' },

  // S10
  switchContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  switchLabel: { flex: 1, fontSize: 12, color: '#334155', marginRight: 8 },
  submitBtn: { backgroundColor: '#0284c7', paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  submitBtnDisabled: { backgroundColor: '#94a3b8' },
  submitBtnText: { color: '#ffffff', fontSize: 13, fontWeight: '600' },
});