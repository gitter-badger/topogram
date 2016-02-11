Template.edgesOptions.helpers({
    edgeWeightMethods: function() {
        return ["simple", "weight"]
    },
    edgeEndMethod: function() {
        return ["simple", "arrow", "arrows"]
    },
    edgeHasWeight: function() {
        if (!edge) return false
        else var edge = Edges.findOne();
        return (edge.data.width || edge.data.weight) ? true : false;
    },
    edgeHasProperties: function() {
        if (!edge) return false
        else var edge = Edges.findOne();
        return (edge.data.width || edge.data.weight ||  edge.data.type || edge.data.color) ? true : false;
    }

})

Template.edgesOptions.events = {

    'change #edgeWidthMethod': function(e, template) {
        var net = template.view.parentView.parentView._templateInstance.network.get().net;
        var val = $(e.currentTarget).find('option:selected').val();
        var self = this;

        if (val == 'simple') {
            net.edges().style({
                'width': 5
            })
        } else if (val == 'weight') {
            net.edges().style({
                'width': function(ele) {
                    if (ele.data().weight) {
                        return ele.data().weight
                    } else if (ele.data().width) {
                        return ele.data().width
                    }
                }
            })
        }
    },
    'change #edgeEndMethod': function(e, template) {
        var net = template.view.parentView.parentView._templateInstance.network.get().net;
        var val = $(e.currentTarget).find('option:selected').val();
        var nodes = Nodes.find().fetch(),
            edges = Edges.find().fetch();
        var self = this;

        if (val == 'simple') {
            net.edges().forEach(function(ele) {
                ele.style({
                    'target-arrow-shape': 'none',
                    'source-arrow-shape': 'none'
                })
            })
        } else if (val == 'arrow') {
            net.edges().forEach(function(ele) {
                ele.style({
                    'target-arrow-shape': 'triangle',
                    'source-arrow-shape': 'none'
                })
            })
        } else if (val == 'arrows') {
            net.edges().forEach(function(ele) {
                ele.style({
                    'target-arrow-shape': 'triangle',
                    'source-arrow-shape': 'triangle'
                })
            })
        }
    },
    'change #edgesColor': function(e, template) {
        var net = template.view.parentView.parentView._templateInstance.network.get().net;
        console.log($(e.currentTarget).val());
        var edgeColorMode = $(e.currentTarget).find('option:selected').val();
        console.log(edgeColorMode);
        var val = edgeColorMode;
        var self = this;
        if (val == 'file') {
            // console.log("I'm in edgefile")
            net.edges().forEach(function(ele) {
                if (ele.data().color.length > 2 && ele.data().color.slice(0, 1) == '#') {
                    ele.style({
                        'line-color': ele.data('starred') ? 'yellow' : ele.data().color
                    })
                } else if (ele.data().color.length > 2 && ele.data().color.slice(0, 1) != '#') {
                    ele.style({
                        'line-color': ele.data('starred') ? 'yellow' : "#" + ele.data().color
                    })
                }
            })
        } else if (val == 'alphabet') {
            // console.log("I'm in edge alphabet")
            net.edges().forEach(function(ele) {
                ele.style({

                    'line-color': ele.data('starred') ? 'yellow' : colorsNode(ele.data().name.slice(0, 1))
                })
            })
        } else if (val == 'group') {
            console.log("I'm in!3")
            net.edges().forEach(function(ele) {
                if (ele.data().group == 0) {
                    FlashMessages.sendError("no data available, creating");
                    //WE SET THIS BECAUSE WE WANT TO BE ABLE TO DISTINGUISH BETWEEN SELF AND ADDED COLORS, SO WE DON4T RETUR ele.data.color
                    ele.data("group", colorsEdge(ele.data().id))
                }

                if (ele.data().color == 0) {
                    FlashMessages.sendError("no color available, creating");
                    //WE SET THIS BECAUSE WE WANT TO BE ABLE TO DISTINGUISH BETWEEN SELF AND ADDED COLORS, SO WE DON4T RETUR ele.data.color
                    ele.data("color", colorsEdge(ele.data().group))
                }
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : colorsEdge(ele.data().group)
                })
            })
        } else if (val == 'nodesMeanGroup') {
            var nodes = Nodes.find().fetch();
            net.edges().forEach(function(ele) {
                var sourceNode = "";
                var targetNode = "";
                srcFound = false;
                tarFound = false;
                for (var i = 0, l = nodes.length; i < l; i++) {
                    if (!srcFound && nodes[i].data.id == ele.data().source) {
                        sourceNode = nodes[i];
                        srcFound = true;
                    } else if (!tarFound && nodes[i].data.id == ele.data().target) {
                        targetNode = nodes[i];
                        tarFound = true;
                    } else if (srcFound && tarFound) break; //stop for-loop since we found our nodes
                }
                console.log("sourceNode", sourceNode.data.id);
                console.log("targetNode", targetNode.data.id);
                console.log("sourceNode color", sourceNode.data.color);
                console.log("sourceNode group", sourceNode.data.group);
                console.log("targetNode color", targetNode.data.color);
                console.log("targetNode group", targetNode.data.color);
                var color = colorMean(colorsNode(sourceNode.data.group), colorsNode(targetNode.data.group));
                console.log("color", color);
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : color,
                    'line-style': "solid"
                })
            })
        } else if (val == 'nodesMeanColor') {
            console.log("I'm in nodes mean color")
            var nodes = Nodes.find().fetch();
            net.edges().forEach(function(ele) {
                var sourceNode = "";
                var targetNode = "";
                srcFound = false;
                tarFound = false;
                for (var i = 0, l = nodes.length; i < l; i++) {
                    if (!srcFound && nodes[i].data.id == ele.data().source) {
                        sourceNode = nodes[i];
                        srcFound = true;
                    } else if (!tarFound && nodes[i].data.id == ele.data().target) {
                        targetNode = nodes[i];
                        tarFound = true;
                    } else if (srcFound && tarFound) break; //stop for-loop since we found our nodes
                }
                console.log("sourceNode", sourceNode.data.id);
                console.log("targetNode", targetNode.data.id);
                console.log("sourceNode color", sourceNode.data.color);
                console.log("sourceNode group", sourceNode.data.group);
                console.log("targetNode color", targetNode.data.color);
                console.log("targetNode group", targetNode.data.color);
                var color = colorMean(sourceNode.data.color, targetNode.data.color);
                console.log("color", color);
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : color,
                    'line-style': "solid"
                })
            })
        } else if (val == 'nodesDash') {
            net.edges().forEach(function(ele) {
                var sourceNode, targetNode,
                    srcFound = false,
                    tarFound = false;
                for (var i = 0, l = nodes.length; i < l; i++) {
                    if (!srcFound && nodes[i].data.id == ele.data().source) {
                        sourceNode = nodes[i];
                        srcFound = true;
                    } else if (!tarFound && nodes[i].data.id == ele.data().target) {
                        targetNode = nodes[i];
                        tarFound = true;
                    } else if (srcFound && tarFound) break; //stop for-loop since we found our nodes
                }
                // console.log("sourceNode", sourceNode);
                // console.log("targetNode", targetNode);
                // console.log("sourceNode color", sourceNode.data.color);
                // console.log("targetNode color", targetNode.data.color);

                if (sourceNode.data.group != targetNode.data.group) {
                    ele.style({
                        'line-color': ele.data('starred') ? 'yellow' : '#ff0000',
                        'line-style': "dashed"
                    })
                } else {
                    ele.style({
                        'line-color': ele.data('starred') ? 'yellow' : colorsNode(sourceNode.data.group),
                        'line-style': "solid"
                    })
                }
                //MESSAGE///TAUX ETC
            })
        } else if (val == 'fix') {
            net.edges().forEach(function(ele) {
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : '#000000'
                })
            })
        } else if (val == 'count') {
            net.edges().forEach(function(ele) {
                //FIXME:
                ele.data().count = ele.data().width
                var width = ele.data().count;
                var val = parseInt(countEdgeViewParam1.value);
                var val2 = parseInt(countEdgeViewParam2.value);
                var val3 = parseInt(countEdgeViewParam3.value);
                //TODO: D3 SCALE
                // console.log("widthedge", width)
                if (width <= val) {
                    color = '#EEEEEE'
                } else if (width > val && width <= val2) {
                    color = '#2BBBAD'
                } else if (width > val2 && width <= val3) {
                    color = '#42A5F5'
                } else if (width > val3) {
                    color = '#EF5350'
                } else {
                    color = '#000000'
                }
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : color
                })
            })
        } else if (val == 'compNodEdg') {
            var data1 = []
            net.nodes().forEach(function(ele) {

                data1.push(ele.degree())
            })

            var nodesMeanDeg = average(data1)

            net.edges().forEach(function(ele) {
                //FIXME:
                ele.data().count = ele.data().width
                var width = ele.data().count;
                var val = parseInt(countEdgeViewParam1.value);
                var val2 = parseInt(countEdgeViewParam2.value);
                var val3 = parseInt(countEdgeViewParam3.value);
                var nodesMeanDeg = 0;
                var nodesMeanDegtmp = 0;
                var sourceNode, targetNode,
                    srcFound = false,
                    tarFound = false;

                for (var i = 0, l = nodes.length; i < l; i++) {
                    if (!srcFound && nodes[i].data.id == ele.data().source) {
                        sourceNode = nodes[i];
                        srcFound = true;
                    } else if (!tarFound && nodes[i].data.id == ele.data().target) {
                        targetNode = nodes[i];
                        tarFound = true;
                    } else if (srcFound && tarFound) break; //stop for-loop since we found our nodes
                }
                var sourceDeg = sourceNode.degree();
                var targetDeg = targetNode.degree();

                //TODO: D3 SCALE
                // console.log("widthedge", width)
                if (width <= val && (sourceDeg < nodesMeanDeg || targetDeg < nodesMeanDeg)) {
                    color = '#BCBCBC'
                } else if (width > val && width <= val3 && (sourceDeg < nodesMeanDeg || targetDeg < nodesMeanDeg)) {
                    color = '#2BBBAD'
                } else if (width < val2 && (sourceDeg > nodesMeanDeg || targetDeg > nodesMeanDeg)) {
                    color = '#42A5F5'
                } else if (width > val3 && (sourceDeg < nodesMeanDeg || targetDeg < nodesMeanDeg)) {
                    color = '#EF5350'
                } else {
                    console.log(souc)
                    color = '#EEEEEE'
                }
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : color
                })
            })
        } else if (val == 'sigma') {
            var data1 = []
            console.log("data1", data1);

            net.edges().forEach(function(ele) {
                //FIXME
                ele.data().count = ele.data().width
                data1.push(parseFloat(ele.data().count));
                console.log("ele.data().width, ele.data().count", ele.data().width, ele.data().count);
            })

            console.log("I'm in sigma");
            console.log("data1", data1);
            var average1 = average(data1);
            var standardDeviation1 = standardDeviation(data1);
            console.log("average1", average1);
            console.log("standardDeviation1", standardDeviation1);
            var val = parseInt(countEdgeViewParam1.value);
            // NOT SURE IT IS NEEDED
            if (val > 6) {
                val = 1;
                console.log("sigma value set too high, so taking 1 instead")
            }
            console.log("val", val);
            net.edges().forEach(function(ele) {
                //FIXME:
                ele.data().count = ele.data().width
                var width = ele.data().count;
                //TODO: D3 SCALE

                if (width <= (average1 - ((val + 4) * standardDeviation1)) || width >= (average1 + ((val + 4) * standardDeviation1))) {
                    color = '#FF1010'
                    zIndex = 10
                } else if (width <= (average1 - ((val + 3) * standardDeviation1)) || width >= (average1 + ((val + 3) * standardDeviation1))) {
                    color = '#EC5350'
                    zIndex = 9
                } else if (width <= (average1 - ((val + 2) * standardDeviation1)) || width >= (average1 + (val + 2) * standardDeviation1)) {
                    color = '#42A5F5'
                    zIndex = 8
                } else if (width <= (average1 - ((val + 1) * standardDeviation1)) || width >= (average1 + (val + 1) * standardDeviation1)) {
                    color = '#2BBBAD'
                    zIndex = 7
                } else if (width <= (average1 - ((val) * standardDeviation1)) || width >= (average1 + (val) * standardDeviation1)) {
                    color = '#20B0A0'
                    zIndex = 5
                } else if (width <= (average1 + (val * standardDeviation1)) && width >= (average1 - (val * standardDeviation1))) {
                    color = '#EEEEEE'
                    zIndex = 4
                } else {
                    console.log("FOR UNCLASSIFIEDS")
                    console.log(width);
                    console.log("average1", average1);
                    console.log("standardDeviation1", standardDeviation1);
                    color = '#000000'
                }
                ele.style({
                    'line-color': ele.data('starred') ? 'yellow' : color,
                    'z-index': ele.data('starred') ? 10 : zIndex
                })
            })
        }
    }


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
//Play with color
// //color mean
function colorMean(color1, color2) {
    console.log(color1, color2);
    rgb = hexToRgb(color1)
    shc = hexToRgb(color2)
    console.log("rgb", rgb)
    console.log("shc", shc)
    var r = rgb[Object.keys(rgb)[0]];
    var g = rgb[Object.keys(rgb)[1]];
    var b = rgb[Object.keys(rgb)[2]];
    var s = shc[Object.keys(shc)[0]];
    var h = shc[Object.keys(shc)[1]];
    var c = shc[Object.keys(shc)[2]];

    t = Math.round((r + s) / 2)
    i = Math.round((g + h) / 2)
    d = Math.round((b + c) / 2)
    console.log("t", t, "i", i, "d", d)
    console.log("rgbToHex(t, i, d)", rgbToHex(t, i, d))
    return rgbToHex(t, i, d)
}


//http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    console.log("hex", hex)
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
