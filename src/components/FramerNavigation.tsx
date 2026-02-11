// Placeholder component that Cloudflare Worker will populate with Framer's navigation HTML
export default function FramerNavigation() {
  return (
    <div id="framer-nav-placeholder" data-source="framer">
      {/* Cloudflare Worker injects Framer nav HTML here */}
    </div>
  );
}
