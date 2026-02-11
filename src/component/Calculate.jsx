import React, { useState, useEffect } from 'react'

const Calculate = () => {
  const statistics = [
     {
      number: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-blue-500"
    },
    {
      number: 99,
      suffix: "%",
      label: "Visa Ratio",
      color: "text-blue-800"
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction", 
      color: "text-green-600"
    },
    
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      color: "text-blue-800"
    }
  ]

  const [counts, setCounts] = useState(statistics.map(() => 0))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    const intervals = statistics.map((stat, index) => {
      const increment = stat.number / steps
      let currentCount = 0

      return setInterval(() => {
        currentCount += increment
        if (currentCount >= stat.number) {
          currentCount = stat.number
          clearInterval(intervals[index])
        }
        
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(currentCount)
          return newCounts
        })
      }, stepDuration)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-5xl sm:text-6xl font-bold mb-3 ${stat.color}`}>
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-700 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calculate