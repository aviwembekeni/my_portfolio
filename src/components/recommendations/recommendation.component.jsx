import React, { Fragment } from "react";

import PdfViewer from "../../common/PdfViewer";

import devDFreamPdf from "../../Assets/Aviwe-DevDream-Recommendation.pdf";
import LettuceDigitalPdf from "../../Assets/Recommendations _ Aviwe_Ngqukumba _ LinkedIn.pdf";

function Recommendations() {
  return (
    <Fragment>
      <PdfViewer pdf={devDFreamPdf} name="DevDream Digital Recommendation" />;
      <PdfViewer
        pdf={LettuceDigitalPdf}
        name="Lettuce Digital Recommendation"
      />
      ;
    </Fragment>
  );
}

export default Recommendations;
