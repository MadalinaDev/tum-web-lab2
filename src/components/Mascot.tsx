export default function Mascot({ message }: { message: string }) {
  return (
    <div className="mascot" aria-live="polite">
      <span className="mascot-bubble">{message}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/mascot.png" alt="Mascota prietenoasa pentru lectii" />
    </div>
  );
}
