import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePdf = () => {

    if ((process as unknown as any).browser) {
        const element = document.getElementById('resume-container');
        // const html2pdf = require("html2pdf.js");
        // html2pdf().from(element).set({
        //     margin: 0,
        //     filename: 'resume.pdf',
        //     image: { type: "jpeg", quality: 1 },
        //     jsPDF: { orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: false },
        //     html2canvas: { backgroundColor: "#ffffff", scale: 1 },
        //     pagebreak: { mode: ['avoid-all'] }
        // }).save().then(function () {
        //     console.log("finish!");
        // });

        if (element) {
            var printDoc = new jsPDF({
                unit: "px",
                orientation: "p",
                compress: false

            });
            printDoc.html(element, {
                callback: function (doc) {
                    doc.save("resume.pdf");

                },
                x: 0,
                y: 0,
                html2canvas: {
                    scale: 0.5,
                    svgRendering: true,
                    backgroundColor: 'rgba(0, 0, 0, 0)', 
                    removeContainer: true,
                    allowTaint: true
       }
            });
            // printDoc.autoPrint();
            // printDoc.output("dataurlnewwindow");
        }



    }

}
