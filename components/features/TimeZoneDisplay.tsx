'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimeZone {
  city: string;
  timezone: string;
}

const timeZones: TimeZone[] = [
  { city: 'New York', timezone: 'America/New_York' },
  { city: 'London', timezone: 'Europe/London' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo' },
  { city: 'Sydney', timezone: 'Australia/Sydney' },
];

export function TimeZoneDisplay() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timeZones.forEach(({ city, timezone }) => {
        newTimes[city] = new Date().toLocaleTimeString('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 bg-card p-4 rounded-lg shadow-lg border">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5" />
        Global Time
      </h3>
      <div className="space-y-2">
        {timeZones.map(({ city }) => (
          <div key={city} className="flex justify-between gap-4">
            <span className="text-muted-foreground">{city}</span>
            <span className="font-mono">{times[city]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}