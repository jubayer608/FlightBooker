'use client'

import { useState, useEffect } from 'react'
import { getAirports } from '@/lib/api'
import { FlightStore } from '@/store/flightStore'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Loader2, Plus } from 'lucide-react'
import TripTypeSelector from './search/TripTypeSelector'
import AirportSelector from './search/AirportSelector'
import FlightFilters from './search/FlightFilters'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function FlightSearch() {
  const tripType = FlightStore.useState(s => s.tripType)
  const [airports, setAirports] = useState([])
  const [loading, setLoading] = useState(true)
  const [flights, setFlights] = useState([{ id: 1 }])

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    setLoading(true)
    getAirports()
      .then(data => setAirports(data || []))
      .catch(() => toast.error('Failed to load airports'))
      .finally(() => setLoading(false))
  }, [])

  const addFlight = () => {
    setFlights([...flights, { id: Date.now() }])
  }

  const removeFlight = (id) => {
    if (flights.length > 1) {
      setFlights(flights.filter(f => f.id !== id))
    }
  }

  const handleSearch = () => {
    const {
      fromAirport,
      toAirport,
      departureDate,
      returnDate,
      passengers
    } = FlightStore.getRawState()

    if (!fromAirport || !toAirport) {
      toast.error('Please select both From and To airports')
      return
    }

    if (!departureDate) {
      toast.warning('Please select departure date')
      return
    }

    if (tripType === 'roundtrip' && !returnDate) {
      toast.warning('Please select return date')
      return
    }

    toast.success(
      `Searching ${tripType} flight · ${
        passengers.adults + passengers.children + passengers.infants
      } passenger(s)`
    )
  }

  return (
    <section id="search" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} >
          
          
          <Card className="bg-card shadow-2xl rounded-3xl border-2 border-border overflow-visible">

            {loading ? (
              <div className="py-20 text-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Loading airports...</p>
              </div>
            ) : (
              <div className="p-6 relative ">

                <TripTypeSelector />

                {tripType === 'multicity' ? (
                  <div className="space-y-4">
                    {flights.map((flight, index) => (
                      <AirportSelector
                        key={flight.id}
                        airports={airports}
                        today={today}
                        flightNumber={index + 1}
                        canRemove={flights.length > 1}
                        onRemove={() => removeFlight(flight.id)}
                      />
                    ))}

                    {flights.length < 4 && (
                      <Button
                        variant="outline"
                        onClick={addFlight}
                        className="w-full border-dashed border-2"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Another Flight
                      </Button>
                    )}
                  </div>
                ) : (
                  <AirportSelector airports={airports} today={today} />
                )}

                {/*Dropdowns*/}
                <div className="relative z-50">
                  <FlightFilters />
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full h-14 mt-6 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-lg"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
