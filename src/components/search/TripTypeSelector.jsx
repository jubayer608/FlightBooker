'use client'

import { FlightStore } from '@/store/flightStore'
import { ArrowRight, RefreshCw, Network } from 'lucide-react'

export default function TripTypeSelector() {
  const tripType = FlightStore.useState(s => s.tripType)

  const types = [
    { id: 'oneway', label: 'One Way', icon: ArrowRight },
    { id: 'roundtrip', label: 'Round Trip', icon: RefreshCw },
    { id: 'multicity', label: 'Multi City', icon: Network }
  ]

  return (
    <div className="flex gap-2 mb-6 p-1 bg-muted/60 rounded-2xl">
      {types.map(type => {
        const Icon = type.icon
        const isActive = tripType === type.id

        return (
          <button
            key={type.id}
            onClick={() =>
              FlightStore.update(s => {
                s.tripType = type.id
              })
            }
            className={`
              flex-1 flex items-center justify-center gap-2
              py-3 px-4 rounded-xl font-semibold
              transition-all duration-300
              ${
                isActive
                  ? `
                    bg-linear-to-r from-blue-600 to-purple-600
                    text-white shadow-lg scale-[1.02]
                  `
                  : `
                    text-muted-foreground
                    hover:text-foreground
                    hover:bg-background
                  `
              }
            `}
          >
            <Icon
              className={`h-4 w-4 ${
                isActive ? 'text-white' : 'text-muted-foreground'
              }`}
            />
            {type.label}
          </button>
        )
      })}
    </div>
  )
}
