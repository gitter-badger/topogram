# Topogram (client)

**Topogram (client)** is a web interface to create and publish visualizations and maps of networks.

## Features 

* interactive editing of networks
* time/geo based data 
* collaborative work
* CSV import

## Run

    git clone https://github.com/topogram/topogram-client.git
    cd topogram-client
    meteor 

#### Dependencies

Topogram-client is based on [Meteor JS](https://www.meteor.com/). You can install it following the official [Install procedure](https://www.meteor.com/install) for Mac, Windows and Linux.
.
├── client
│   ├── 404.html
│   ├── algos
│   │   ├── Chi2
│   │   │   ├── Chi2.html
│   │   │   ├── Chi2.js
│   │   │   └── chi2testvalues.csv
│   │   ├── colorMean
│   │   │   ├── colorMean.html
│   │   │   └── colorMean.js
│   │   ├── compNodeEdge
│   │   │   ├── compNodeEdge.html
│   │   │   └── compNodeEdge.js
│   │   └── sigma
│   │       ├── sigma.html
│   │       └── sigma.js
│   ├── boxes
│   │   ├── algobox
│   │   │   └── algobox.html
│   │   ├── filterbox
│   │   │   └── filterbox.html
│   │   ├── infobox
│   │   │   ├── infobox.html
│   │   │   └── infobox.js
│   │   ├── nodeMerge
│   │   │   ├── nodeMerge.html
│   │   │   └── nodeMerge.js
│   │   ├── optionsBox
│   │   │   └── optionsBox.html
│   │   ├── titlebox
│   │   │   ├── titlebox.html
│   │   │   └── titlebox.js
│   │   └── toolbox
│   │       ├── toolbox.html
│   │       └── toolbox.js
│   ├── comments
│   │   ├── comment
│   │   │   ├── comment.html
│   │   │   └── comment.js
│   │   ├── commentForm
│   │   │   ├── commentForm.html
│   │   │   └── commentForm.js
│   │   └── comments
│   │       ├── comments.html
│   │       └── comments.js
│   ├── datalab
│   │   ├── datalabLayout.html
│   │   ├── edges
│   │   │   ├── _edges.html
│   │   │   └── _edges.js
│   │   ├── importFieldSelector
│   │   │   ├── importFieldSelector.html
│   │   │   └── importFieldSelector.js
│   │   ├── importNetwork
│   │   │   ├── importEdges.html
│   │   │   ├── importNetwork.html
│   │   │   ├── importNetwork.js
│   │   │   └── importNodes.html
│   │   ├── importOptionalFields
│   │   │   └── importOptionalFields.html
│   │   └── nodes
│   │       ├── _nodes.html
│   │       └── _nodes.js
│   ├── datasets
│   │   └── create
│   │       ├── create.html
│   │       └── create.js
│   ├── helpers.js
│   ├── home
│   │   ├── home.html
│   │   └── home.js
│   ├── lab
│   │   ├── lab.html
│   │   └── lab.js
│   ├── layout.html
│   ├── lib
│   │   ├── app.browserify.js
│   │   ├── app.browserify.js.cached
│   │   ├── cytoscape-cxtmenu.js
│   │   ├── cytoscape.js-edgehandles
│   │   │   └── cytoscape-edgehandles.js
│   │   ├── cytoscape.js-qtip.js
│   │   ├── cytoscape-layouts
│   │   │   ├── cytoscape-cose-bilkent-layout.js
│   │   │   ├── cytoscape-dagre.js
│   │   │   ├── dagre.min.js
│   │   │   └── springy.js
│   │   ├── jquery
│   │   │   └── jquery-2.1.1.min.js
│   │   ├── materialize
│   │   │   └── materialize.noUislider.css
│   │   ├── materialize.min.js
│   │   ├── materialize.noUislider.js
│   │   ├── qtip
│   │   │   ├── jquery.qtip.css
│   │   │   └── jquery.qtip.js
│   │   └── saveSvg.js
│   ├── loading.html
│   ├── map
│   │   ├── libs_map.js
│   │   ├── libs_map.WTF
│   │   ├── map.html
│   │   └── map.js
│   ├── network
│   │   ├── NetworkGraph.js
│   │   ├── network.html
│   │   └── network.js
│   ├── networkFilters
│   │   ├── filterByCategory
│   │   │   ├── filterByCategory.html
│   │   │   └── filterByCategory.js
│   │   ├── filterByWeight
│   │   │   ├── filterByWeight.html
│   │   │   └── filterByWeight.js
│   │   ├── filters.html
│   │   └── searchFilter
│   │       ├── searchFilter.html
│   │       └── searchFilter.js
│   ├── networkLayout.html
│   ├── networkTools
│   │   ├── edgesOptions
│   │   │   ├── edgesOptions.bckp
│   │   │   ├── edgesOptions.html
│   │   │   └── edgesOptions.js
│   │   ├── editMode
│   │   │   ├── editMode.html
│   │   │   └── editMode.js
│   │   ├── labels
│   │   │   ├── labels.html
│   │   │   └── labels.js
│   │   ├── nodesOptions
│   │   │   ├── nodesOptions.html
│   │   │   └── nodesOptions.js
│   │   ├── selectLayout
│   │   │   ├── selectLayout.html
│   │   │   └── selectLayout.js
│   │   └── undo
│   │       └── undo.html
│   ├── partials
│   │   ├── _footer.html
│   │   ├── _header.html
│   │   ├── header.js
│   │   └── _slider.html
│   ├── share
│   │   ├── share.html
│   │   └── share.js
│   ├── subscriptions.js
│   ├── timeline
│   │   ├── bargraph-timeline.html
│   │   ├── bargraph-timeline.js
│   │   ├── slider-timeline.html
│   │   ├── slider-timeline.js
│   │   ├── TimeBarGraph.js
│   │   └── timeline.html
│   ├── top
│   │   ├── top.html
│   │   └── top.js
│   └── topograms
│       ├── index
│       │   ├── topograms.html
│       │   └── topograms.js
│       ├── single
│       │   ├── single.html
│       │   └── single.js
│       └── view
│           ├── view.html
│           └── view.js
├── conf.json
├── lib
│   ├── collections.js
│   ├── config
│   │   └── loginConfig.js
│   ├── dataTables.js
│   ├── delete.html
│   ├── helpers.js
│   └── routes
│       ├── config.js
│       ├── datasets.js
│       ├── routes.js
│       └── topograms.js
├── LICENSE
├── packages
│   └── npm-container
│       ├── index.js
│       └── package.js
├── packages.json
├── public
│   ├── css
│   │   ├── materialize.css
│   │   ├── materialize.min.css
│   │   └── topogram.css
│   └── font
│       ├── material-design-icons
│       │   ├── LICENSE.txt
│       │   ├── Material-Design-Icons.eot
│       │   ├── Material-Design-Icons.svg
│       │   ├── Material-Design-Icons.ttf
│       │   ├── Material-Design-Icons.woff
│       │   └── Material-Design-Icons.woff2
│       └── roboto
│           ├── Roboto-Bold.eot
│           ├── Roboto-Bold.ttf
│           ├── Roboto-Bold.woff
│           ├── Roboto-Bold.woff2
│           ├── Roboto-Light.eot
│           ├── Roboto-Light.ttf
│           ├── Roboto-Light.woff
│           ├── Roboto-Light.woff2
│           ├── Roboto-Medium.eot
│           ├── Roboto-Medium.ttf
│           ├── Roboto-Medium.woff
│           ├── Roboto-Medium.woff2
│           ├── Roboto-Regular.eot
│           ├── Roboto-Regular.ttf
│           ├── Roboto-Regular.woff
│           ├── Roboto-Regular.woff2
│           ├── Roboto-Thin.eot
│           ├── Roboto-Thin.ttf
│           ├── Roboto-Thin.woff
│           └── Roboto-Thin.woff2
├── README.md
├── server
│   ├── api.js
│   ├── methods
│   │   ├── Comments.js
│   │   ├── Edges.js
│   │   ├── Nodes.js
│   │   ├── Topograms.js
│   │   └── Users.js
│   └── publications.js
├── topogram.html
└── topogram.js

67 directories, 165 files
