import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="sewa gedung, gedung cangkol, tempat acara, pernikahan, seminar, desa cangkol, sewa gedung cangkol,cangkol, mojolaban,sukoharjo, Harsa sewa gedung cangkol"
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
        href="https://gedungcangkol.com/Image/backgroud3.svg"
        as="image"
      ></link>
      <link
        rel="preload"
        href="https://gedungcangkol.com/Image/bg-about.svg"
        as="image"
      ></link>
      <link rel="prefetch" href="/Image/abaut.svg" />
      <meta
        property="og:image"
        content="https://gedungcangkol.com/Image/backgroud3.svg"
      />
      <meta
        property="og:image"
        content="https://gedungcangkol.com/Image/abaut.svg"
      />
      <meta
        property="og:image"
        content="https://gedungcangkol.com/Image/gambar3.svg"
      />
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
