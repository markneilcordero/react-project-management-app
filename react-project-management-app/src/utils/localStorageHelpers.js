// src/utils/localStorageHelpers.js

/**
 * Retrieve data from LocalStorage and parse it into the expected type.
 * @param {string} key - The LocalStorage key to read from.
 * @param {*} defaultValue - The default value to return if not found or invalid.
 * @returns {*} Parsed data or default value
 */
export function getLocalData(key, defaultValue) {
  if (typeof window === "undefined") return defaultValue;

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error parsing LocalStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Save data to LocalStorage as a JSON string.
 * @param {string} key - The LocalStorage key to save to.
 * @param {*} data - The data to store.
 */
export function saveLocalData(key, data) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to LocalStorage key "${key}":`, error);
  }
}
