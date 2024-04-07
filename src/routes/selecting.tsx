import { createFileRoute } from '@tanstack/react-router'
import { Selecting } from '../Components/Airports&Currencies/Selecting'

export const Route = createFileRoute('/selecting')({
  component: () => <Selecting/>
})