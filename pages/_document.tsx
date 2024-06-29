import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
      <link rel="prefetch" href="/Image/abaut.svg" />
      <meta property="og:image" content="/Image/abaut.svg" />
      <meta property="og:image" content="/Image/gambar3.svg" />
      <meta property="og:url" content="https://gedungcangkol.com" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <title>Gedung Cangkol</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
