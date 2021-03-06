import './filterbox.html'
import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

import './filterByCategory/filterByCategory.js'
import './filterByDegree/filterByDegree.js'
import '../../networkTools/nodesOptions/nodesOptions.js'

import { resetFilters } from '../../network/networkMethods.js'

Template.filterbox.events({
  'click .clear-filters' : function(event, instance) {
    var net = instance.data.network.get()
    resetFilters(net)
  },
  "click .close-filters" : function() {
    console.log("close")
    $("#filterbox").hide()
  }
})
