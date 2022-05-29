export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {

        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'

        //Draw rectangles and text (uncomment below to get text and bb on canvas for demo)
        // ctx.beginPath()
        // ctx.fillText(text,x,y)
        // ctx.rect(x,y,width,height)
        // ctx.stroke()

    });
}