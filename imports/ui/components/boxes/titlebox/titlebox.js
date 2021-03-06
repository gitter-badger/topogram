import './titlebox.html'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { $ } from 'meteor/jquery'

Template.titlebox.created = function() {
    this.editMode = this.data.editMode
}

Template.titlebox.rendered = function() {
    $(".collapsible").collapsible()
}

Template.titlebox.helpers({
    isEditable : function() {
      return Template.instance().data.editMode
    },
    topogramName: function() {
      return Template.instance().data.topogramName
    },
    topogramId: function() {
      return FlowRouter.getParam('topogramId')
    },
    networkInstance : function(){
      return Template.instance().data.network
    }
})

Template.titlebox.events =  {
  'click #toggle-toolbox' : function() {
    $('#toolbox').toggle()
  },
  'click #share-icon' : function() {
    $('#sharebox').toggle()
  },
  'click #toggle-searchbox' : function() {
    $('#searchbox').toggle()
  },
  'click #toggle-algobox' : function() {
    $('#algobox').toggle()
  },
  'click #toggle-filterbox' : function() {
    $('#filterbox').toggle()
  },
  'click #toggle-commentbox' : function() {
    $('#commentBox').toggle()
  },
  'click #download-png' : function(event, template) {
    console.log(template)
    var network = template.data.network.get()
    var png =  network.png({
      // 'full' : true
    })
    var a = document.createElement("a")
    a.download = "network.png"
    a.href = png
    a.click()

  }
}
