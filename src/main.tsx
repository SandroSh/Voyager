import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { theme } from './styles/Colors.style.ts'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Provider } from "react-redux";
import { store } from './state/store.ts'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>

)
