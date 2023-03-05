# Textutils | [live link](https://textutils-soni.netlify.app/)

It is one page based react-tailwind project or website in which we can Analyze text different ways.

static site without router and different theme is live on Gh-page






## Features

- Router to move bw pages
- toggle theme
- responsive
- Cross platform
- save text as pdf
- Alert on doing a task


## function to download as pdf



```javascript
 const handlePdfClick = () => {
    const input = document.querySelector("#myBox");
    html2canvas(input, { scale: 2, quality: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
```
    
    
## light theme

![App Screenshot](https://i.ibb.co/QnJhxMc/Screenshot-91.png )

## night mode
using useEffect and dark class of tailwind

![App Screenshot](https://i.ibb.co/K6VcMyn/Screenshot-92.png  )

## button theme change
using useState hook

![App Screenshot](https://i.ibb.co/DGtqjHx/Screenshot-90.png  )
