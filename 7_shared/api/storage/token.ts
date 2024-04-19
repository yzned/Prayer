import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  async getItem(key: string) {
    try {
      const storageData = await AsyncStorage.getItem(key);
      if (storageData === null) {
        return undefined;
      }
      return JSON.parse(storageData);
    } catch {
      return undefined;
    }
  }

  async setItem(key: string, value: string) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
  }

  async clear() {
    await AsyncStorage.clear();
  }
}

export default new Storage();
