var tagInputer=new Class({initialize:function(a,b){this.input=a;this.btns=b.addEvent("click",this.toggle.bind(this))},setBtns:function(a){this.btns=a.addEvent("click",this.toggle.bind(this))},toggle:function(a){a=$(new Event(a).target);if(a.hasClass("checked")){this.removeTag(a.getText());a.removeClass("checked")}else{this.addTag(a.getText());a.addClass("checked")}},addTag:function(b){var a=this.input.value.split(/\s+/);this.input.value=a.include(b).join(" ").trim()},removeTag:function(b){var a=this.input.value.split(/\s+/);this.input.value=a.remove(b).join(" ").trim()},set:function(a){if(!a){return}this.input.value=a.join(" ").trim();var b={};a.each(function(c){this[c]=1}.bind(b));this.btns.each(function(c){if(this[c.getText()]){c.addClass("checked")}else{c.removeClass("checked")}}.bind(b))}});