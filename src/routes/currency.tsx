import { createFileRoute } from '@tanstack/react-router'
import { Currency } from '../Components/Currency/Currency'

export const Route = createFileRoute('/currency')({
  component: () => <Currency/>
})