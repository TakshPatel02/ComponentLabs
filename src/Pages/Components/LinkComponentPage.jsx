import React from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import ClipPathLinks from "../../components/linkcomponent/ClipPathLinks";
import TakeoverLinks from "../../components/linkcomponent/TakeoverLinks";
import { NeuralHoverLinks } from "../../components/linkcomponent/NeuralHoverLinks";

const LinkComponentPage = () => {
  return (
    <>
      {/* Clip Path Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Clip Path Icon Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A directional hover reveal grid where each tile animates from the
              nearest cursor edge using clip-path transitions.
            </p>
          </div>
        </div>

        <DocumentationPanel
          componentName="ClipPathLinks"
          importPath="../src/components/Linkcomponent/ClipPathLinks"
          defaultUsage="<ClipPathLinks />"
          props={[
            {
              name: "groups",
              type: "Array",
              description:
                "Array of rows where each row is an array of link items shaped like { Icon, href, label }.",
              default: "built-in icon groups",
            },
            {
              name: "className",
              type: "string",
              description: "Optional classes appended to the outer wrapper.",
              default: '""',
            },
          ]}
          examples={[
            {
              title: "Custom icon groups",
              code: `import { Globe, Mail, Github } from "lucide-react";

const groups = [
  [
    { Icon: Globe, href: "https://example.com", label: "Website" },
    { Icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ],
  [{ Icon: Github, href: "https://github.com/example", label: "GitHub" }],
];

<ClipPathLinks groups={groups} />;`,
            },
          ]}
          notes={[
            "The clip-path hover animation stays active for every tile.",
            "Grid columns are derived from each row in groups.",
            "Every item should include a stable label and a valid Icon component.",
          ]}
        >
          <ClipPathLinks />
        </DocumentationPanel>
      </div>

      {/* Takeover Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Takeover Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A stacked navigation effect with per-letter upward flip and a
              full-height bottom-to-top color takeover on hover.
            </p>
          </div>
        </div>

        <DocumentationPanel
          componentName="TakeoverLinks"
          importPath="../src/components/Linkcomponent/TakeoverLinks"
          defaultUsage="<TakeoverLinks />"
          props={[
            {
              name: "links",
              type: "Array",
              description:
                "Array of link objects shaped like { label, href, color }.",
              default: "built-in ART / DESIGN / PHOTOS / CONTACT set",
            },
            {
              name: "className",
              type: "string",
              description: "Optional classes appended to the outer section.",
              default: '""',
            },
          ]}
          examples={[
            {
              title: "Custom takeover links",
              code: `const links = [
  { label: "WORK", href: "/work", color: "#2f4858" },
  { label: "ABOUT", href: "/about", color: "#8f5e3b" },
  { label: "CONTACT", href: "/contact", color: "#5f6f52" },
];

<TakeoverLinks links={links} />;`,
            },
          ]}
          notes={[
            "The first link color becomes the initial background color.",
            "Hovering a row triggers the split-text and takeover animation.",
            "Keep labels short and uppercase for the strongest effect.",
          ]}
        >
          <TakeoverLinks />
        </DocumentationPanel>
      </div>

      {/* Neural Hover Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Navigation
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Neural Hover Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              AI-infused navigation links with mouse-tracking image previews,
              neural scan lines, cryptographic text scramble, and floating
              particle effects.
            </p>
          </div>
        </div>

        <DocumentationPanel
          componentName="NeuralHoverLinks"
          importPath="../src/components/Linkcomponent/NeuralHoverLinks"
          defaultUsage="<NeuralHoverLinks />"
          props={[]}
          examples={[
            {
              title: "Basic usage (uses internal LINKS_DATA)",
              code: `<NeuralHoverLinks />`,
            },
            {
              title: "Suggested customization with links prop",
              code: `const links = [
  { 
    heading: "About", 
    subheading: "Learn more about us", 
    imgSrc: "image-url.jpg", 
    href: "/about" 
  }
];
<NeuralHoverLinks links={links} />`,
            },
          ]}
          notes={[
            "Currently uses an internal LINKS_DATA array in the component.",
            "To customize, modify the LINKS_DATA array or refactor to accept a links prop.",
            "Each link item expects { heading, subheading, imgSrc, href }.",
            "The component creates parallax and scramble effects on mouse movement.",
            "Each item needs a valid image URL for imgSrc.",
            "Perfect for portfolio or service showcase navigation.",
          ]}
        >
          <div className="w-full max-w-5xl">
            <NeuralHoverLinks />
          </div>
        </DocumentationPanel>
      </div>
    </>
  );
};

export default LinkComponentPage;
