// Base URL for all images
const IMAGE_BASE_URL = "https://ik.imagekit.io/ufbtcakpl"

// Function to get full image URL - with safeguards for URL construction
export function getImageUrl(filename: string): string {
  try {
    // Make sure we're working with a clean filename (no leading slashes)
    const cleanFilename = filename.replace(/^\/+/, "")

    // Ensure we have a valid base URL that ends with a slash if needed
    const baseUrl = IMAGE_BASE_URL.endsWith("/") ? IMAGE_BASE_URL : `${IMAGE_BASE_URL}/`

    // For SSR safety, use string concatenation instead of URL constructor
    return `${baseUrl}${cleanFilename}`
  } catch (error) {
    console.error("Error generating image URL:", error)
    // Return a placeholder in case of error
    return "/placeholder.svg"
  }
}

// Safely create image URLs with error handling
function safeImageUrl(filename: string): string {
  try {
    return getImageUrl(filename)
  } catch (error) {
    console.error(`Failed to create URL for ${filename}:`, error)
    return "/placeholder.svg"
  }
}

// Common image URLs
export const IMAGES = {
  // Hero images
  heroBackground: safeImageUrl("hero-background.jpg"),
  heroBackgroundMobile: safeImageUrl("hero-background-mobile.jpg"),

  // Storytelling section
  signatureRingCloseup: safeImageUrl("signature-ring-closeup.jpg"),
  jewelryMaterials: safeImageUrl("jewelry-materials.jpg"),
  signatureProcess: safeImageUrl("signature-process.jpg"),

  // Product gallery
  signatureRingRoseGold: safeImageUrl("signature-ring-rose-gold.jpg"),
  signatureNecklaceYellowGold: safeImageUrl("signature-necklace-yellow-gold.jpg"),
  signatureBraceletSilver: safeImageUrl("signature-bracelet-silver.jpg"),
  signatureRingPlatinum: safeImageUrl("signature-ring-platinum.jpg"),
  signatureEarringsWhiteGold: safeImageUrl("signature-earrings-white-gold.jpg"),
  signatureNecklaceRoseGold: safeImageUrl("signature-necklace-rose-gold.jpg"),
}
