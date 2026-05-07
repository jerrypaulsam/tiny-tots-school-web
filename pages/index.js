import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Management from "../components/Management";
import Academics from "../components/Academics";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const siteUrl = "https://www.tinytotsns.com";
const siteTitle = "Tiny Tots National School | CBSE School in Trivandrum, Kerala";
const siteDescription =
  "Tiny Tots National School is a CBSE-affiliated school in Mangad, Thirumala, Trivandrum, offering Day Care, Play School, Pre KG, KG, and Grades I to X with AI and Robotics learning, caring faculty, and holistic development since 2006.";
const siteKeywords =
  "Tiny Tots National School, CBSE school Trivandrum, CBSE school Thirumala, school admission Trivandrum, play school Mangad, kindergarten Trivandrum, day care Thirumala, grade 1 to 10 school Kerala, AI robotics school Trivandrum, best school Mangad";
const ogImage = `${siteUrl}/school-exterior.webp`;

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Tiny Tots National School" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#0b1b3b" />
        <meta name="format-detection" content="telephone=yes, email=yes, address=yes" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Tiny Tots National School" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Tiny Tots National School campus exterior" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "Tiny Tots National School",
              url: siteUrl,
              logo: `${siteUrl}/tiny-tots-logo.jpeg`,
              image: ogImage,
              description: siteDescription,
              telephone: ["+91 98951 08777", "+91 62351 69877", "0471 235 5877"],
              email: "tinytotsns2006@gmail.com",
              foundingDate: "2006",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opp. CSI Church, Mangad, Thirumala PO",
                addressLocality: "Thiruvananthapuram",
                addressRegion: "Kerala",
                postalCode: "695006",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Features />
        <Management />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
