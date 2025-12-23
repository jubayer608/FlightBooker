'use client'

import { useState, useEffect, useRef } from 'react'
import { FlightStore } from '@/store/flightStore'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowLeftRight, MapPin, Calendar, X } from 'lucide-react'
import Portal from '@/components/ui/Portal'

export default function AirportSelector({
  airports,
  today,
  flightNumber = null,
  canRemove = false,
  onRemove = null,
}) {
  const tripType = FlightStore.useState(s => s.tripType)

  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [fromResults, setFromResults] = useState([])
  const [toResults, setToResults] = useState([])
  const [showFrom, setShowFrom] = useState(false)
  const [showTo, setShowTo] = useState(false)

  const [fromStyle, setFromStyle] = useState(null)
  const [toStyle, setToStyle] = useState(null)

  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const fromRef = useRef(null)
  const toRef = useRef(null)

  const filterAirports = (query) => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return airports
      .filter(a => a.search_contents?.toLowerCase().includes(q))
      .slice(0, 8)
  }


  useEffect(() => {
    if (showFrom && fromRef.current) {
      const r = fromRef.current.getBoundingClientRect()
      setFromStyle({
        position: 'absolute',
        top: r.bottom + window.scrollY + 8,
        left: r.left + window.scrollX,
        width: r.width,
        zIndex: 99999,
      })
    }
  }, [showFrom])

  useEffect(() => {
    if (showTo && toRef.current) {
      const r = toRef.current.getBoundingClientRect()
      setToStyle({
        position: 'absolute',
        top: r.bottom + window.scrollY + 8,
        left: r.left + window.scrollX,
        width: r.width,
        zIndex: 99999,
      })
    }
  }, [showTo])


  const selectFrom = (airport) => {
    FlightStore.update(s => { s.fromAirport = airport })
    setFromQuery(`${airport.city_name} (${airport.code})`)
    setShowFrom(false)
    setFromResults([])
  }

  const selectTo = (airport) => {
    FlightStore.update(s => { s.toAirport = airport })
    setToQuery(`${airport.city_name} (${airport.code})`)
    setShowTo(false)
    setToResults([])
  }

  return (
    <div className="relative mb-4 p-4 border-2 border-border rounded-xl bg-background">

      {flightNumber && (
        <div className="flex justify-between mb-3">
          <h3 className="text-sm font-bold text-muted-foreground">
            Flight {flightNumber}
          </h3>
          {canRemove && (
            <Button size="icon" variant="ghost" onClick={onRemove}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* FROM */}
        <div className="lg:col-span-3">
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">
            Leaving From
          </label>
          <div className="relative">
            <Input
              ref={fromRef}
              value={fromQuery}
              placeholder="City or Airport"
              onChange={(e) => {
                const v = e.target.value
                setFromQuery(v)
                const r = filterAirports(v)
                setFromResults(r)
                setShowFrom(r.length > 0)
              }}
              className="h-12 pl-10"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
          </div>
        </div>

        {/* SWAP */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center pt-6">
          <Button size="icon" variant="outline">
            <ArrowLeftRight />
          </Button>
        </div>

        {/* TO */}
        <div className="lg:col-span-3">
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">
            Going To
          </label>
          <div className="relative">
            <Input
              ref={toRef}
              value={toQuery}
              placeholder="City or Airport"
              onChange={(e) => {
                const v = e.target.value
                setToQuery(v)
                const r = filterAirports(v)
                setToResults(r)
                setShowTo(r.length > 0)
              }}
              className="h-12 pl-10"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
          </div>
        </div>

        {/* DEPARTURE */}
        <div className="lg:col-span-2">
          <label className="text-xs font-semibold text-muted-foreground mb-2 block">
            Departure Date
          </label>
          <Input
            type="date"
            value={departureDate}
            onChange={(e) => {
              setDepartureDate(e.target.value)
              FlightStore.update(s => { s.departureDate = e.target.value })
            }}
            min={today}
            className="h-12"
          />
        </div>

        {tripType === 'roundtrip' && (
          <div className="lg:col-span-2">
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">
              Return Date
            </label>
            <Input
              type="date"
              value={returnDate}
              onChange={(e) => {
                setReturnDate(e.target.value)
                FlightStore.update(s => { s.returnDate = e.target.value })
              }}
              min={departureDate || today}
              className="h-12"
            />
          </div>
        )}
      </div>

      {/* FROM DROPDOWN */}
      {showFrom && fromStyle && (
        <Portal>
          <div style={fromStyle} className="bg-card border rounded-xl shadow-2xl max-h-72 overflow-y-auto">
            {fromResults.map(a => (
              <div
                key={a.code}
                onClick={() => selectFrom(a)}
                className="p-3 hover:bg-accent cursor-pointer"
              >
                <div className="font-bold">{a.airport_name}</div>
                <div className="text-xs text-muted-foreground">
                  {a.city_name}, {a.country_name} ({a.code})
                </div>
              </div>
            ))}
          </div>
        </Portal>
      )}

      {/* TO DROPDOWN */}
      {showTo && toStyle && (
        <Portal>
          <div style={toStyle} className="bg-card border rounded-xl shadow-2xl max-h-72 overflow-y-auto">
            {toResults.map(a => (
              <div
                key={a.code}
                onClick={() => selectTo(a)}
                className="p-3 hover:bg-accent cursor-pointer"
              >
                <div className="font-bold">{a.airport_name}</div>
                <div className="text-xs text-muted-foreground">
                  {a.city_name}, {a.country_name} ({a.code})
                </div>
              </div>
            ))}
          </div>
        </Portal>
      )}
    </div>
  )
}
