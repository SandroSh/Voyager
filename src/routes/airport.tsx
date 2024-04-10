import { createFileRoute } from '@tanstack/react-router'
import { Airport } from '../Components/Airport/Airport'

export const Route = createFileRoute('/airport')({
  component: () => <Airport/>
})