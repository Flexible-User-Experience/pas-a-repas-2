CKEDITOR.dialog.add("sourcedialog",(function(t){var e,i=CKEDITOR.document.getWindow().getViewPaneSize(),a=Math.min(i.width-70,800);i=i.height/1.5;return{title:t.lang.sourcedialog.title,minWidth:100,minHeight:100,onShow:function(){this.setValueOf("main","data",e=t.getData())},onOk:function(){function i(e,i){t.focus(),t.setData(i,(function(){e.hide();var i=t.createRange();i.moveToElementEditStart(t.editable()),i.select()}))}return function(){var t=this.getValueOf("main","data").replace(/\r/g,""),a=this;return t===e||(setTimeout((function(){i(a,t)})),!1)}}(),contents:[{id:"main",label:t.lang.sourcedialog.title,elements:[{type:"textarea",id:"data",dir:"ltr",inputStyle:"cursor:auto;width:"+a+"px;height:"+i+"px;tab-size:4;text-align:left;",class:"cke_source"}]}]}}));