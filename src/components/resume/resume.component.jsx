import React from "react";

import PdfViewer from "../../common/PdfViewer";

import pdf from "../../Assets/Aviwe_Ngqukumba_CV.pdf";

function ResumeNew() {
  return <PdfViewer pdf={pdf} name="CV" />;
}

export default ResumeNew;
