import Navbar from "../components/navbar/Navbar";



export default getDesignTokens = (mode) => ({
    palette: {
      mode,
     
      ...(mode === 'dark' ? {
        background: {
          default: '#fff',
          paper: 'whitesmoke',
        },
      }: {
        background: {
          default:'#141414',
          paper: '#141414'
        }
      }),
      text: {
        ...(mode === 'light'
          ? {
            primary: '#000',
            secondary:'#9ca3af'
            }
          : {
              primary: '#fff',
              secondary:'#9ca3af',
            }),
      },
    },
  });
  <Navbar mode = {getDesignTokens()} />