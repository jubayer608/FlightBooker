/**
 * Base configuration for API requests
 * These values are loaded from environment variables
 */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const SECRET_CODE = process.env.NEXT_PUBLIC_SECRET_CODE;

/**
 * Fetch airport auto-suggestion data
 * Used in flight search input for live airport suggestions
 */
export async function getAirports() {
  try {
    const response = await fetch(
      `${BASE_URL}/tools/airport-autosuggetion-data`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: API_KEY,
          secretecode: SECRET_CODE,
        },
      }
    );

    // Handle non-success HTTP responses
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}

/**
 * Fetch airlines data
 * airline logos, or airline-based search features
 */

export async function getAirlines() {
  const res = await fetch(`${BASE_URL}/tools/airlines-data`, {
    headers: {
      apikey: API_KEY,
      secretecode: SECRET_CODE,
    },
  });

  const json = await res.json();

  return Object.values(json.data || []);
}
