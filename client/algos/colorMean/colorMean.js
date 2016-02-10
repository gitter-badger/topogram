// //color mean
// function colorMean(color1, color2) {
//     console.log(color1, color2);
//     rgb = hexToRgb(color1)
//     shc = hexToRgb(color2)
//     console.log("rgb", rgb)
//     console.log("shc", shc)
//     var r = rgb[Object.keys(rgb)[0]];
//     var g = rgb[Object.keys(rgb)[1]];
//     var b = rgb[Object.keys(rgb)[2]];
//     var s = shc[Object.keys(shc)[0]];
//     var h = shc[Object.keys(shc)[1]];
//     var c = shc[Object.keys(shc)[2]];

//     t = Math.round((r + s) / 2)
//     i = Math.round((g + h) / 2)
//     d = Math.round((b + c) / 2)
//     console.log("t", t, "i", i, "d", d)
//     console.log("rgbToHex(t, i, d)", rgbToHex(t, i, d))
//     return rgbToHex(t, i, d)
// }


// //Play with color
// //http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

// function hexToRgb(hex) {
//     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//     var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     console.log("hex", hex)
//     hex = hex.replace(shorthandRegex, function(m, r, g, b) {
//         return r + r + g + g + b + b;
//     });
// 