import {Text, View} from 'react-native'

import React from 'react'

export default function LatVar(){
    let murid = "Bagus"
    let murid2 = "Dimas"
    let isAktif = true

    let akunAktif = isAktif ? 'Aktif' : 'Tidak Aktif'

    const output = `Akun Atas Nama ${murid} ${murid2} Status Aktif: ${isAktif}`
    return (
        <View>
            <Text>{output}</Text>
        </View>
    )
}