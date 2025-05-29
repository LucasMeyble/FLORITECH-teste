export function getLocalStorageItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    logStorageError("getting", key, error);
    return null;
  }
}

export function setLocalStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    logStorageError("setting", key, error);
  }
}

export function removeLocalStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    logStorageError("removing", key, error);
  }
}

function logStorageError(action: string, key: string, error: unknown) {
  console.error(`Error ${action} localStorage item "${key}":`, error);
}
