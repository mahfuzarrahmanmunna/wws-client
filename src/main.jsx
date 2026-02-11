import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router.jsx'
import Provider from './AuthProvider/Provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RoleProvider } from './Context/RoleContext.jsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Empêche le refetch quand on revient sur l’onglet ou qu’on remonte un composant
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      // Données considérées fraîches pendant 5 minutes
      staleTime: 5 * 60 * 1000,
      // Conserver les résultats en cache longtemps pour revenir instantanément
      gcTime: 30 * 60 * 1000, // TanStack v5 (cacheTime en v4)
      // Garde les anciennes données pendant un nouveau chargement (v4)
      keepPreviousData: true,
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')).render(
  <Provider>
  
    {/* <App /> */}
   
       <QueryClientProvider client={queryClient}>
      <RoleProvider>
        <RouterProvider router={router} />
      </RoleProvider>
    </QueryClientProvider>
   
  
  </Provider>
)
