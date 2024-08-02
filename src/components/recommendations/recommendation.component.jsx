import React from "react";

import PdfViewer from "../../common/PdfViewer";

import pdf from "../../Assets/Aviwe-DevDream-Recommendation.pdf";

function Recommendations() {
  return <PdfViewer pdf={pdf} name="DevDream R.." />;
}

export default Recommendations;
