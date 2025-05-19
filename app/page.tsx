import Hero from "@/components/hero"
import Storytelling from "@/components/storytelling"
import SignatureCustomization from "@/components/signature-customization"
import ProductGallery from "@/components/product-gallery"
import ContactFaq from "@/components/contact-faq"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import PreviewSafeWrapper from "@/components/preview-safe-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navigation />
      <PreviewSafeWrapper>
        <Hero />
      </PreviewSafeWrapper>
      <PreviewSafeWrapper>
        <Storytelling />
      </PreviewSafeWrapper>
      <PreviewSafeWrapper>
        <SignatureCustomization />
      </PreviewSafeWrapper>
      <PreviewSafeWrapper>
        <ProductGallery />
      </PreviewSafeWrapper>
      <ContactFaq />
      <Footer />
    </main>
  )
}
