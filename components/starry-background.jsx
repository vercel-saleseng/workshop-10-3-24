'use client'

export default function StarryBackground() {
  return (
    <>
      <div className="starry-background fixed inset-0 z-0"></div>
      <style jsx global>{`
        .starry-background {
          background: linear-gradient(to bottom, #0a1a1f, #182d34, #214450);
          overflow: hidden;
        }

        .starry-background::before,
        .starry-background::after {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(5px 5px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(4px 4px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0;
          animation: twinkle 5s infinite;
        }

        .starry-background::after {
          background-size: 300px 300px;
          animation-delay: 1.5s;
        }

        @keyframes twinkle {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}