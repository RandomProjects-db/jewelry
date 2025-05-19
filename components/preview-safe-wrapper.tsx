"use client"

import { useEffect, useState, type ReactNode } from "react"

interface PreviewSafeWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

export default function PreviewSafeWrapper({ children, fallback }: PreviewSafeWrapperProps) {
  const [isPreview, setIsPreview] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if we're in a preview environment
    const isPreviewEnv =
      window.location.hostname.includes("vusercontent.com") || window.location.hostname.includes("vercel.app")
    setIsPreview(isPreviewEnv)

    try {
      // Attempt to access window APIs that might cause issues in preview
      if (typeof window !== "undefined") {
        // Mark as loaded if we can access window safely
        setIsLoaded(true)
      }
    } catch (error) {
      console.error("Preview environment error:", error)
      setHasError(true)
    }
  }, [])

  // If we're in a preview and there's an error, show fallback
  if (isPreview && hasError) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="p-4 bg-rich-black border border-gold/30 rounded-md text-gold">
        <h2 className="text-xl font-serif mb-2">Preview Mode Limited</h2>
        <p className="text-gold/70">
          Some features are disabled in preview mode. Please view the deployed site for the full experience.
        </p>
      </div>
    )
  }

  // If we're not in preview or everything loaded fine, show children
  return <>{children}</>
}
