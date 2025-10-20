import MagicBento from "../components/MagicBento/MagicBento.jsx";
import '../components/MagicBento/MagicBento.css';

export default function Work() {
  return (
    <section 
      style={{
        margin: 0,
        padding: 0,
        minHeight: 'calc(100vh - 120px)', // Reduce 120px for header/footer
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1100px', height: '100%' }}>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </section>
  );
}
