import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper@6/swiper-bundle.min.css"
            />   
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper@6/swiper.min.css"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css" integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=" crossOrigin="anonymous"/>


            <link rel="preconnect" href="<https://app.snipcart.com>"/>
            <link rel="preconnect" href="<https://cdn.snipcart.com>"/>
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css" />
            <script src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"></script>
      </Head>  
      <body>
        <div hidden id="snipcart" data-api-key="YWI0YWM3NTktY2RlNi00ZjQ0LTgyOTMtY2IxY2Y4YzBjNDYzNjM3MDMyNzU1OTcwMTA4MzA3"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
