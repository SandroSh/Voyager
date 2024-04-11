import { createFileRoute } from '@tanstack/react-router'
import { Selecting } from '../Components/Airports&Cities/Selecting'

export const Route = createFileRoute('/selecting')({
  component: () => <Selecting/>
})