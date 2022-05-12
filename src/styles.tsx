import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'
import './styles.scss'

 const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        
        fontFamily: 'Sorts Mill Goudy',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('yellow.50', 'gray.800')(props),
        lineHeight: 'base',
      },
      '#page' : {
        minHeight: '100vh',
        paddingTop: '5vmin'
      }
    }),
  },
});

export default overrides;

