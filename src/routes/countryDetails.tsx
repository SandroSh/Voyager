import { createFileRoute } from '@tanstack/react-router'
import { CountryDetails } from '../Components/CountryDetails/CountryDetails'

export const Route = createFileRoute('/countryDetails')({
  component: () => <CountryDetails/>
})