import { createFileRoute } from '@tanstack/react-router'
import { Cities } from '../Components/Cities/Cities'

export const Route = createFileRoute('/cities')({
  component: () => <Cities/>
})