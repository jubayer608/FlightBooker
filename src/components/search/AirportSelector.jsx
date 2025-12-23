'use client'

import { useState } from 'react'
import { FlightStore } from '@/store/flightStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowLeftRight, MapPin, Calendar, X } from 'lucide-react'

export default function AirportSelector({
  airports,
  today,
  flightNumber = null,
  canRemove = false,
  onRemove = null,
}) {
  const tripType = FlightStore.useState(s => s.tripType)
  const fromAirport = FlightStore.useState(s => s.fromAirport)
  const toAirport = FlightStore.useState(s => s.toAirport)

  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)
  const [fromResults, setFromResults] = useState([])
  const [toResults, setToResults] = useState([])

  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const filterAirports = (query) => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return airports
      .filter(a => a.search_contents?.toLowerCase().includes(q))
      .slice(0, 8)
  }

  const handleFromChange = (e) => {
    const value = e.target.value
    setFromQuery(value)
    const results = filterAirports(value)
    setFromResults(results)
    setShowFromDropdown(results.length > 0)
  }

  const handleToChange = (e) => {
    const value = e.target.value
    setToQuery(value)
    const results = filterAirports(value)
    setToResults(results)
    setShowToDropdown(results.length > 0)
  }

  const selectFrom = (airport) => {
    FlightStore.update(s => { s.fromAirport = airport })
    setFromQuery(`${airport.code} - ${airport.city_name}`)
    setShowFromDropdown(false)
  }

  const selectTo = (airport) => {
    FlightStore.update(s => { s.toAirport = airport })
    setToQuery(`${airport.code} - ${airport.city_name}`)
    setShowToDropdown(false)
  }

  const swap = () => {
    FlightStore.update(s => {
      const temp = s.fromAirport
      s.fromAirport = s.toAirport
      s.toAirport = temp
    })
    setFromQuery(toQuery)
    setToQuery(fromQuery)
  }

  return (

    <div className="relative z-30 mb-4 p-4 border-2 border-border rounded-xl bg-background">

      {flightNumber && (
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-muted-foreground">
            Flight {flightNumber}
          </h3>
          {canRemove && onRemove && (
            <Button
              size="icon"
              variant="ghost"
              onClick={onRemove}
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}

      
      <div className="relative z-20 overflow-visible grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* From*/}
        <div className="lg:col-span-3 relative">
          <label className="block text-xs font-semibold text-muted-foreground mb-2">
            Leaving From
          </label>

          <div className="relative">
            <Input
              placeholder="City or Airport"
              value={fromQuery}
              onChange={handleFromChange}
              className="h-12 pl-10 font-semibold"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {showFromDropdown && (
            <div className="absolute top-full left-0 z-50 w-full mt-2 bg-card border-2 border-border rounded-xl shadow-2xl max-h-72 overflow-y-auto">
              {fromResults.map(airport => (
                <div
                  key={airport.code}
                  onClick={() => selectFrom(airport)}
                  className="p-3 hover:bg-accent cursor-pointer border-b border-border last:border-0"
                >
                  <div className="font-bold text-sm">
                    {airport.airport_name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {airport.city_name}, {airport.country_name} ({airport.code})
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SWAP */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center pt-6">
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={swap}
            className="rounded-full w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:text-white"
          >
            <ArrowLeftRight className="h-4  w-4" />
          </Button>
        </div>

        {/* TO */}
        <div className="lg:col-span-3 relative">
          <label className="block text-xs font-semibold text-muted-foreground mb-2">
            Going To
          </label>

          <div className="relative">
            <Input
              placeholder="City or Airport"
              value={toQuery}
              onChange={handleToChange}
              className="h-12 pl-10 font-semibold"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {showToDropdown && (
            <div className="absolute top-full left-0 z-50 w-full mt-2 bg-card border-2 border-border rounded-xl shadow-2xl max-h-72 overflow-y-auto">
              {toResults.map(airport => (
                <div
                  key={airport.code}
                  onClick={() => selectTo(airport)}
                  className="p-3 hover:bg-accent cursor-pointer border-b border-border last:border-0"
                >
                  <div className="font-bold text-sm">
                    {airport.airport_name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {airport.city_name}, {airport.country_name} ({airport.code})
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DEPARTURE */}
        <div className="lg:col-span-2">
          <label className="block text-xs font-semibold text-muted-foreground mb-2">
            Departure Date
          </label>
          <div className="relative">
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => {
                setDepartureDate(e.target.value)
                FlightStore.update(s => { s.departureDate = e.target.value })
              }}
              min={today}
              className="h-12 font-semibold"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* RETURN */}
        {tripType === 'roundtrip' && (
          <div className="lg:col-span-2">
            <label className="block text-xs font-semibold text-muted-foreground mb-2">
              Return Date
            </label>
            <div className="relative">
              <Input
                type="date"
                value={returnDate}
                onChange={(e) => {
                  setReturnDate(e.target.value)
                  FlightStore.update(s => { s.returnDate = e.target.value })
                }}
                min={departureDate || today}
                className="h-12 font-semibold"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
