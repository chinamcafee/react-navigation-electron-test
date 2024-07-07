import { MMKV, Mode } from 'react-native-mmkv'
import * as FileSystem from "expo-file-system"
import { Platform } from 'react-native'

const MMKV_CACHE_FOLDER = `${FileSystem.cacheDirectory}`



export function initMMKVStorage(userCode: string) {
    const storage = new MMKV({
        id: "user-storage" + "-" + userCode
    })

    storage.set('init', userCode)
    console.log("init storage success!")
}