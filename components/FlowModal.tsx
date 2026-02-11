import { useEffect } from "react";
import { dashboards, extraScreens, flow } from "./data";

const fullFlow = [...dashboards, ...flow, ...extraScreens];

export default function FlowModal({
  open,
  index,
  onClose,
  onPrev,
  onNext,
  onSelect
}: {
  open: boolean;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (idx: number) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-900/70 p-4">
      <div className="relative w-full max-w-5xl rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8">
        <button
          className="absolute right-6 top-6 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="phone-rotate phone-glow orange mx-auto w-full max-w-sm md:max-w-none">
            <div className="phone-frame orange bg-white">
              <div className="overflow-hidden rounded-[32px] bg-white">
                <img
                  src={fullFlow[index].image}
                  alt={fullFlow[index].title}
                  className="h-[620px] w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
                Full Flow
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-brand-900">
                {fullFlow[index].title}
              </h3>
              <p className="mt-3 text-sm text-brand-700">{fullFlow[index].caption}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button
                className="rounded-full border border-brand-300 px-5 py-2 text-sm font-semibold text-brand-800"
                onClick={onPrev}
              >
                Prev
              </button>
              <div className="text-xs font-semibold text-brand-500">
                {index + 1} / {fullFlow.length}
              </div>
              <button
                className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-glow"
                onClick={onNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {fullFlow.map((item, idx) => (
            <button
              key={item.title}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                idx === index ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700"
              }`}
              onClick={() => onSelect(idx)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function useFullFlowCount() {
  return fullFlow.length;
}
