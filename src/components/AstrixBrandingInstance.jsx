import { useMemo } from "react";
import "./AstrixBrandingInstance.css";

const AstrixBrandingInstance = ({ astrixBranding, propWidth, propPadding }) => {
  const astrixBrandingInstanceStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className="astrix-branding-instance"
      style={astrixBrandingInstanceStyle}
    >
      <img
        className="astrix-branding-icon"
        loading="lazy"
        alt=""
        src={astrixBranding}
      />
      <div className="astrix-wrapper">
        <h1 className="astrix3">Astrix.</h1>
      </div>
    </div>
  );
};

export default AstrixBrandingInstance;
