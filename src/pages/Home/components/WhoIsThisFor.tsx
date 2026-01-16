const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Furnishings Studio For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Furnishings Studio is ideal wherever soft furnishings and décor
          need realistic 3D visualization to improve design decisions and sales.
        </p>

        {/* Home furnishings brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Home furnishings brands and manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies producing curtains, drapes, blinds, cushions, bed
              linen, and throws that want digital prototypes instead of multiple
              physical samples.
            </li>
            <li>
              Brands needing a consistent 3D asset library to showcase
              collections across seasons, catalogues, and markets.
            </li>
          </ul>
        </div>

        {/* Retailers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Furnishing retailers and e-commerce platforms
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Online stores selling curtains, bedding, rugs, and cushions that
              benefit from 3D/room-view visualization to increase conversions
              and reduce returns.
            </li>
            <li>
              Brick-and-mortar furnishing stores using screens or kiosks to
              show how fabrics, patterns, and sets look in different room
              settings.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Interior designers and décor consultants
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Interior design firms that must present coordinated furnishing
              schemes (curtains, upholstery, cushions, rugs, bedding) for client
              approvals.
            </li>
            <li>
              Independent consultants offering styling packages and mood boards
              enhanced by immersive 3D room visuals.
            </li>
          </ul>
        </div>

        {/* Hospitality */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Hospitality and institutional buyers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Hotels, resorts, serviced apartments, and student housing projects
              that need to visualize room concepts with specific furnishings
              before bulk ordering.
            </li>
            <li>
              Hospitals, senior living, and corporate offices planning
              standardized furnishing schemes across multiple locations.
            </li>
          </ul>
        </div>

        {/* Franchises */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Furnishing franchises and dealer networks
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Franchise brands supplying standardized furnishing collections to
              dealer showrooms and needing shared 3D selling tools.
            </li>
            <li>
              Dealers who want to quickly demonstrate fabric, colour, and
              coordination options on-screen during customer interactions.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Education and training institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Design, interior, and textile programs teaching students modern
              3D visualization workflows for furnishings and home décor.
            </li>
            <li>
              Skill-development centres preparing visual merchandisers and décor
              consultants for retail and e-commerce roles in home furnishings.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
