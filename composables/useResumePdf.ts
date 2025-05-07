import { toCanvas } from "html-to-image"

type PDFMargin =
    | {
          top?: number
          right?: number
          bottom?: number
          left?: number
      }
    | number // 可以是單一數字或分別指定四邊

type ScreenshotOptions = {
    element: Ref<Parameters<typeof toCanvas>[0] | null>
    fileName?: string
    margin?: PDFMargin // 新增邊距選項
}

const A4_WIDTH_PT = 595.28
const A4_HEIGHT_PT = 841.89
const A4_RATIO = A4_HEIGHT_PT / A4_WIDTH_PT

export default function useResumePdf() {
    // 將不同格式的 margin 轉為標準格式
    const normalizeMargins = (
        margin: PDFMargin = 0,
    ): { top: number; right: number; bottom: number; left: number } => {
        if (typeof margin === "number") {
            return {
                top: margin,
                right: margin,
                bottom: margin,
                left: margin,
            }
        } else {
            return {
                top: margin.top ?? 0,
                right: margin.right ?? 0,
                bottom: margin.bottom ?? 0,
                left: margin.left ?? 0,
            }
        }
    }

    // 處理 PDF 分頁
    const generatePdfPages = (
        pdf: any,
        imgData: string,
        contentHeight: number,
        pageHeight: number,
        imgWidth: number,
        imgHeight: number,
        margins: {
            top: number
            right: number
            bottom: number
            left: number
        } = { top: 0, right: 0, bottom: 0, left: 0 },
    ) => {
        let remainingHeight = contentHeight
        let yPosition = margins.top // 初始 y 位置加上頂部邊距

        if (remainingHeight < pageHeight) {
            // 內容不足一頁，直接加入，考慮邊距
            pdf.addImage(
                imgData,
                "JPEG",
                margins.left,
                margins.top,
                imgWidth,
                imgHeight,
            )
        } else {
            // 內容超過一頁，分頁處理
            while (remainingHeight > 0) {
                // 考慮左邊距進行定位
                pdf.addImage(
                    imgData,
                    "JPEG",
                    margins.left,
                    yPosition,
                    imgWidth,
                    imgHeight,
                )
                remainingHeight -= pageHeight - margins.top - margins.bottom // 考慮上下邊距
                yPosition -= A4_HEIGHT_PT

                if (remainingHeight > 0) {
                    pdf.addPage()
                    // 新頁面重置 y 位置，加上頂部邊距
                    yPosition = margins.top
                }
            }
        }
    }

    const canvasToPdf = async (
        canvas: HTMLCanvasElement,
        fileName: string = "resume.pdf",
        margin: PDFMargin = 0, // 新增邊距參數
    ) => {
        const { jsPDF } = await import("jspdf")
        const pdf = new jsPDF("portrait", "pt", "a4")

        // 處理邊距
        const margins = normalizeMargins(margin)

        const contentWidth = canvas.width
        const contentHeight = canvas.height
        const pageHeight = (contentWidth / A4_WIDTH_PT) * A4_HEIGHT_PT
        const imgWidth = A4_WIDTH_PT - margins.left - margins.right // 考慮左右邊距
        const imgHeight = (imgWidth / contentWidth) * contentHeight

        const resumeImg = canvas.toDataURL("image/jpeg", 1.0)

        // 處理多頁情況
        generatePdfPages(
            pdf,
            resumeImg,
            contentHeight,
            pageHeight,
            imgWidth,
            imgHeight,
            margins, // 傳入邊距設定
        )

        pdf.save(fileName)
        return pdf
    }

    async function screenShot(screenshotOptions: ScreenshotOptions) {
        try {
            const {
                element,
                fileName = "resume.pdf",
                margin = 0,
            } = screenshotOptions
            const _element = toRef(element)

            if (!_element.value) {
                throw new Error("元素未定義")
            }
            const canvas = await toCanvas(_element.value, {
                canvasWidth: 1440,
                canvasHeight: 1440 * A4_RATIO,
                pixelRatio: 2,
                backgroundColor: "#fff",
            })

            return canvasToPdf(canvas, fileName, margin)
        } catch (error) {
            console.error("產生 PDF 時發生錯誤:", error)
            throw error
        }
    }

    return { screenShot }
}
