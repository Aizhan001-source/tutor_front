import { Navbar } from "../Main/ui/Navbar";
import { Session } from "../Booking/ui/Session.tsx";
import { Footer } from "../Main/ui/Footer.tsx";
import { Time } from "../Booking/ui/Time.tsx";
import { useBookingDraftStore } from "../../store/bookingDraftStore";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBookingStore } from "../../store/bookingStore";

export const Booking = () => {
  const {
    date,
    setDate,
    time,
    setTime,
    duration,
    setDuration,
  } = useBookingDraftStore();

  const { getMyBookings, createBooking } = useBookingStore();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMyBookings();
  }, []);

  const handleProceed = async () => {
    if (!date || !time) {
      alert("Выбери дату и время");
      return;
    }

    const start_time = new Date(`${date}T${time}:00`).toISOString();

    const payload = {
      tutor_id: id!,
      start_time,
      duration_minutes: duration,
    };

    await createBooking(payload);

    // 🔥 ВОТ СЮДА
    await getMyBookings();

    navigate("/payment");
  };

  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">

        <Navbar />

        <Session setDate={setDate} />

        <Time
          date={date}
          time={time}
          setTime={setTime}
          duration={duration}
          setDuration={setDuration}
          onProceed={handleProceed}
        />

        <Footer />

      </div>
    </main>
  );
};