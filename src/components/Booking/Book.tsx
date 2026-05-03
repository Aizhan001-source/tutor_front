import { Navbar } from "../Payments/ui/Navbar"
import { Session } from "../Booking/ui/Session.tsx"
import { Footer } from "../Payments/ui/Footer.tsx"
import { Time } from "../Booking/ui/Time.tsx"
import { useState } from "react"

export const Booking = () => {
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [duration, setDuration] = useState<number>(60);

    return(
        <main className="flex-1">
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
                <Navbar/>

                <Session setDate={setDate} />

                <Time 
                    date={date}
                    time={time}
                    setTime={setTime}
                    duration={duration}
                    setDuration={setDuration}
                />

                <Footer/>
            </div>
        </main>
    )
}