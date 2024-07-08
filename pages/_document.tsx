import { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { NEXT_APP_IMAGE_BASE_URL } = publicRuntimeConfig;

export default function Document() {
  const imageUrl = NEXT_APP_IMAGE_BASE_URL
  ? `${NEXT_APP_IMAGE_BASE_URL}backgroud3.webp`
  : "/Image/backgroud3.webp";
  const imageUrlAbut = NEXT_APP_IMAGE_BASE_URL
    ? `${NEXT_APP_IMAGE_BASE_URL}bg-about.webp`
    : "/Image/bg-about.webp";

  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="sewa gedung, gedung cangkol, tempat acara, pernikahan, seminar, desa cangkol, sewa gedung cangkol,cangkol"
      />
      <meta name="author" content="Gedung Cangkol" />
      <meta
        name="description"
        content="Sewa Gedung Cangkol untuk berbagai acara seperti pernikahan dan event-event. Gedung dengan fasilitas lengkap dan lokasi strategis di Cangkol."
      />
      <meta
        property="og:description"
        content="Sewa Gedung Cangkol untuk berbagai acara seperti pernikahan dan event-event. Gedung dengan fasilitas lengkap dan lokasi strategis di Cangkol."
      />
      <meta
        property="og:title"
        content="Sewa Gedung Cangkol | Tempat Sempurna untuk Acara Anda"
      />
      <link
        rel="preload"
        href={`${imageUrlAbut}`}
        as="image"
        type="image/svg+xml"
      />
      <link
        rel="preload"
        href={`${imageUrl}`}
        as="image"
        type="image/svg+xml"
      />
      <link rel="prefetch" href="/Image/abaut.svg" />
      <meta property="og:image" content="/Image/abaut.svg" />
      <meta property="og:image" content="/Image/gambar3.svg" />
      <meta property="og:url" content="https://gedungcangkol.com" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/Image/icon.svg" />
      <title>Gedung Cangkol</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
