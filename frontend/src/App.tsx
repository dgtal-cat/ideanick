import { AllIdeasPage } from './pages/AllIdeasPage'
import { TrpcProvider } from './lib/trpc'
import './App.css'

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}
