import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, CheckCircle2, MessageCircle, Minus, Plus, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { restaurant } from "../../data/restaurant";
import { Button } from "../ui/Button";

const reservationSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a WhatsApp number or phone number."),
  date: z.string().min(1, "Choose a date."),
  time: z.string().min(1, "Choose a time."),
  guests: z.number().min(1).max(12),
  notes: z.string().max(180, "Keep notes under 180 characters.").optional()
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const timeSlots = [
  { value: "17:30", note: "quiet" },
  { value: "18:00", note: "easy" },
  { value: "18:30", note: "easy" },
  { value: "19:00", note: "prime" },
  { value: "20:00", note: "prime" },
  { value: "20:30", note: "late" }
];

const toDateValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

const formatReservationDate = (value?: string) => {
  if (!value) return "Choose a date";
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  }).format(new Date(year, month - 1, day));
};

export function ReservationForm() {
  const [confirmed, setConfirmed] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2,
      time: "18:30"
    }
  });

  const guests = watch("guests");
  const selectedTime = watch("time");
  const name = watch("name");
  const phone = watch("phone");
  const date = watch("date");
  const notes = watch("notes");

  const completedSteps = [name, phone, date, selectedTime, guests].filter(Boolean).length;
  const progress = Math.round((completedSteps / 5) * 100);

  const dateOptions = useMemo(() => {
    const today = new Date();
    const saturdayOffset = (6 - today.getDay() + 7) % 7 || 7;
    return [
      { label: "Today", value: toDateValue(today) },
      { label: "Tomorrow", value: toDateValue(addDays(today, 1)) },
      { label: "Weekend", value: toDateValue(addDays(today, saturdayOffset)) }
    ];
  }, []);

  const minDate = dateOptions[0].value;

  const onSubmit = (values: ReservationFormValues) => {
    const message = encodeURIComponent(
      `Hello Ember House, I would like to reserve a table.%0AName: ${values.name}%0APhone: ${values.phone}%0ADate: ${values.date}%0ATime: ${values.time}%0AGuests: ${values.guests}%0ANotes: ${values.notes || "-"}`
    );
    setConfirmed(true);
    window.open(`https://wa.me/${restaurant.whatsapp.replace(/\D/g, "")}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="reservation-card">
      <div className="reservation-card-head">
        <div>
          <p className="reservation-eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            Table request
          </p>
          <h3>Send the team a clean reservation draft.</h3>
        </div>
        <div className="reservation-progress" aria-label={`${progress}% complete`}>
          <span>{progress}%</span>
          <div>
            <i style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
        </div>
      </div>

      <div className="reservation-summary" aria-live="polite">
        <span>{formatReservationDate(date)}</span>
        <span>{selectedTime || "Choose time"}</span>
        <span>{guests} guests</span>
      </div>

      <div className="reservation-fields-grid reservation-fields-stacked">
        <label className="field sm:col-span-2">
          <span>Name</span>
          <input placeholder="Your name" {...register("name")} />
          {errors.name ? <small>{errors.name.message}</small> : null}
        </label>

        <label className="field">
          <span>Contact</span>
          <input placeholder="+62..." {...register("phone")} />
          {errors.phone ? <small>{errors.phone.message}</small> : null}
        </label>

        <label className="field">
          <span>Date</span>
          <div className="field-icon">
            <CalendarDays aria-hidden="true" size={18} />
            <input type="date" min={minDate} {...register("date")} />
          </div>
          <div className="date-shortcuts" aria-label="Quick date options">
            {dateOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                className={date === option.value ? "date-shortcut date-shortcut-selected" : "date-shortcut"}
                onClick={() => setValue("date", option.value, { shouldDirty: true, shouldValidate: true })}
              >
                <strong>{option.label}</strong>
                <small>{formatReservationDate(option.value)}</small>
              </button>
            ))}
          </div>
          {errors.date ? <small>{errors.date.message}</small> : null}
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-3 text-sm font-bold text-cream">Time</legend>
        <div className="reservation-time-grid">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot.value}
              onClick={() => setValue("time", slot.value, { shouldValidate: true })}
              className={`time-chip ${selectedTime === slot.value ? "time-chip-selected" : ""}`}
            >
              <strong>{slot.value}</strong>
              <small>{slot.note}</small>
            </button>
          ))}
        </div>
        {errors.time ? <small className="mt-2 block text-sm text-ember">{errors.time.message}</small> : null}
      </fieldset>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row">
        <div className="guest-stepper">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-cream">
            <Users aria-hidden="true" size={18} />
            Guests
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease guest count"
              onClick={() => setValue("guests", Math.max(1, guests - 1), { shouldValidate: true })}
              className="icon-button"
            >
              <Minus size={16} />
            </button>
            <output className="guest-output">{guests}</output>
            <button
              type="button"
              aria-label="Increase guest count"
              onClick={() => setValue("guests", Math.min(12, guests + 1), { shouldValidate: true })}
              className="icon-button"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        <input type="hidden" {...register("guests", { valueAsNumber: true })} />
      </div>

      <label className="field mt-5">
        <span>Notes</span>
        <textarea placeholder="Dietary needs, seating request, or occasion" rows={3} {...register("notes")} />
        <em className="note-count">{notes?.length || 0}/180</em>
        {errors.notes ? <small>{errors.notes.message}</small> : null}
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <MessageCircle aria-hidden="true" size={18} />
          Reserve Now
        </Button>
        <p className="text-sm leading-6 text-taupe">
          Dinner usually fills up after 7 PM. Earlier slots are easier to book.
        </p>
      </div>

      {confirmed ? (
        <p className="reservation-confirmation">
          <CheckCircle2 aria-hidden="true" size={18} />
          Reservation draft opened in WhatsApp. Send it there to confirm with the team.
        </p>
      ) : null}
    </form>
  );
}
