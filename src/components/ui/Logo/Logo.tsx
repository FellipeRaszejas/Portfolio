function Logo({ className = "logo-svg" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 160"
      width="100%"
      height="100%"
      className={className}
    >
      <style>{`
        .purple { fill: #3A0953; }
        .blue { fill: #0A2246; }
        .text-font { font-family: 'Arial Black', 'Impact', sans-serif; font-weight: 900; }
      `}</style>

      <text x="10" y="125" className="purple text-font" fontSize="140" letterSpacing="-5">
        F.O.
      </text>

      <text x="260" y="125" className="blue text-font" fontSize="140" letterSpacing="-8">
        4R
      </text>
    </svg>
  );
}

export default Logo;