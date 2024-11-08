// app/layout.tsx
import { Providers } from './providers'
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}