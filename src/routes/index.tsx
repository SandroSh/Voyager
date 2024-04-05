import { createFileRoute } from '@tanstack/react-router'
import { Countries } from '../Components/Countries/Countries'




export const Route = createFileRoute('/')({
  component: () => <Countries/>
    
})