import AsyncStorage from '@react-native-async-storage/async-storage';

const STATE_KEY = 'app_state';

class OfflineDataManager {
  static async loadState() {
    try {
      const serializedState = await AsyncStorage.getItem(STATE_KEY);
      if (serializedState === null) {
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  static async saveState(state: Object) {
    try {
      const serializedState = JSON.stringify(state);
      await AsyncStorage.setItem(STATE_KEY, serializedState);
    } catch (err) {
      console.log(err);
    }
  }
}

export default OfflineDataManager;
