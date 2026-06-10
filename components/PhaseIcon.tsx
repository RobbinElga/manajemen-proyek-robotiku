import { Phase } from "@/lib/timeline";

const ICON_PATHS: Record<Phase, React.ReactNode> = {
  "Requirements Planning": (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 3v2h6V3" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  "User Design": (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-1.5" />
      <path d="M2 21l3.5-1L15 10.5l-2-2L3.5 18 2 21z" />
    </>
  ),
  Construction: (
    <>
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l-6 6a2 2 0 1 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.1 2.1-2-2 2.1-2.1z" />
    </>
  ),
  Cutover: (
    <>
      <path d="M5 16l-2 6 6-2" />
      <path d="M14.7 6.3a4 4 0 0 1 4 4c0 4-3 7-3 7s-3-3-7-3a4 4 0 0 1 4-4c1.5 0 2-2 2-4z" />
      <circle cx="15" cy="9" r="1" />
    </>
  ),
  Buffer: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
};

export default function PhaseIcon({ phase, className }: { phase: Phase; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[phase]}
    </svg>
  );
}
