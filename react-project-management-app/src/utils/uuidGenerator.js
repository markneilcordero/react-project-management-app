// src/utils/uuidGenerator.js

/**
 * Generates a unique ID using timestamp and random suffix.
 * @returns {string} A unique string ID
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
}
