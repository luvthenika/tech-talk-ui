// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const theme = extendTheme({
  initialColorMode: 'light', // 'dark' | 'light'
  useSystemColorMode: false,
})



export default theme