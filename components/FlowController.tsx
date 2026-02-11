"use client";

import { useEffect, useState } from "react";
import FlowModal, { useFullFlowCount } from "./FlowModal";
import FlowSection from "./FlowSection";

export default function FlowController() {
  const fullFlowLength = useFullFlowCount();
  const [flowOpen, setFlowOpen] = useState(false);
  const [flowIndex, setFlowIndex] = useState(0);

  useEffect(() => {
    if (!flowOpen) return;
    const id = window.setInterval(() => {
      setFlowIndex((prev) => (prev + 1) % fullFlowLength);
    }, 3000);
    return () => window.clearInterval(id);
  }, [flowOpen, fullFlowLength]);

  const openFlow = () => {
    setFlowIndex(0);
    setFlowOpen(true);
  };

  const prev = () => {
    setFlowIndex((prevIndex) => (prevIndex - 1 + fullFlowLength) % fullFlowLength);
  };

  const next = () => {
    setFlowIndex((prevIndex) => (prevIndex + 1) % fullFlowLength);
  };

  return (
    <>
      <FlowSection onOpenFlow={openFlow} />
      <FlowModal
        open={flowOpen}
        index={flowIndex}
        onClose={() => setFlowOpen(false)}
        onPrev={prev}
        onNext={next}
        onSelect={setFlowIndex}
      />
    </>
  );
}
