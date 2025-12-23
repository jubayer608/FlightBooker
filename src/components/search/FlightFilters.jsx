'use client'

import { useEffect, useState } from 'react'
import { FlightStore } from '@/store/flightStore'
import { getAirlines } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Users, Plane, ChevronDown, Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function FlightFilters() {
  //Passengers
  const [showPassengers, setShowPassengers] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  //Carrier 
  const [showCarrier, setShowCarrier] = useState(false)
  const [carriers, setCarriers] = useState([])
  const preferredCarrier = FlightStore.useState(s => s.preferredCarrier)

  // Class 
  const [showClass, setShowClass] = useState(false)
  const flightClass = FlightStore.useState(s => s.flightClass)

  //Load airlines
  useEffect(() => {
    getAirlines().then(setCarriers)
  }, [])

  const totalPassengers = adults + children + infants

  const applyPassengers = () => {
    FlightStore.update(s => {
      s.passengers = { adults, children, infants }
    })
    setShowPassengers(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

      {/*Preferred Carrier*/}
      <div className="relative">
        <label className="text-xs font-semibold text-muted-foreground mb-2 block">
          Preferred Carrier
        </label>

        <button
          onClick={() => setShowCarrier(v => !v)}
          className="w-full h-12 px-4 bg-background border-2 border-input rounded-md flex justify-between items-center"
        >
          <div className="flex gap-2 items-center">
            <Plane className="h-4 w-4" />
            <span>
              {preferredCarrier
                ? `${preferredCarrier.airline_name} (${preferredCarrier.iata_code})`
                : 'Any Airline'}
            </span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>

        <AnimatePresence>
          {showCarrier && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-9999 mt-2 w-full bg-card border rounded-xl shadow-2xl max-h-72 overflow-y-auto"
            >
              <div
                onClick={() => {
                  FlightStore.update(s => { s.preferredCarrier = '' })
                  setShowCarrier(false)
                }}
                className="p-3 hover:bg-accent cursor-pointer"
              >
                Any Airline
              </div>

              {carriers.map(carrier => (
                <div
                  key={carrier.iata_code}
                  onClick={() => {
                    FlightStore.update(s => {
                      s.preferredCarrier = carrier
                    })
                    setShowCarrier(false)
                  }}
                  className="p-3 hover:bg-accent cursor-pointer"
                >
                  {carrier.airline_name} ({carrier.iata_code})
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*Passengers */}
      <div className="relative">
        <label className="text-xs font-semibold text-muted-foreground mb-2 block">
          Passengers
        </label>

        <button
          onClick={() => setShowPassengers(v => !v)}
          className="w-full h-12 px-4 bg-background border-2 border-input rounded-md flex justify-between items-center"
        >
          <div className="flex gap-2 items-center">
            <Users className="h-4 w-4" />
            {totalPassengers} Passenger(s)
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>

        <AnimatePresence>
          {showPassengers && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-9999 mt-2 w-full bg-card border rounded-xl p-4"
            >
              {[
                ['Adult', adults, setAdults, 1],
                ['Child', children, setChildren, 0],
                ['Infant', infants, setInfants, 0],
              ].map(([label, val, set, min]) => (
                <div key={label} className="flex justify-between py-2">
                  <span>{label}</span>
                  <div className="flex gap-2">
                    <Button size="icon" disabled={val <= min} onClick={() => set(val - 1)}>
                      <Minus />
                    </Button>
                    <span>{val}</span>
                    <Button size="icon" onClick={() => set(val + 1)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              ))}

              <Button
                onClick={applyPassengers}
                className="w-full mt-3 bg-linear-to-r from-blue-600 to-purple-600 text-white"
              >
                Apply
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*Class */}
      <div className="relative">
        <label className="text-xs font-semibold text-muted-foreground mb-2 block">
          Class
        </label>

        <button
          onClick={() => setShowClass(v => !v)}
          className="w-full h-12 px-4 bg-background border-2 border-input rounded-md flex justify-between items-center capitalize"
        >
          {flightClass}
          <ChevronDown className="h-4 w-4" />
        </button>

        <AnimatePresence>
          {showClass && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-9999 mt-2 w-full bg-card border rounded-xl"
            >
              {['economy', 'premium', 'business', 'first'].map(cls => (
                <div
                  key={cls}
                  onClick={() => {
                    FlightStore.update(s => { s.flightClass = cls })
                    setShowClass(false)
                  }}
                  className="p-3 hover:bg-accent cursor-pointer capitalize"
                >
                  {cls}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
