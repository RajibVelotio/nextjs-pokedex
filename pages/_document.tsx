import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Find details of each pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/gray.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/blue.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/green.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/red.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/grayDark.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/blueDark.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/greenDark.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@latest/redDark.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
