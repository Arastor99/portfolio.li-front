import { PDFViewer } from "@react-pdf/renderer";
//import MyCV from "./t1/cv";
import ModernCV from "./t1/cv2";

export const ViewCv = () => (
  <PDFViewer width="100%" height="1500">
    <ModernCV />
  </PDFViewer>
);