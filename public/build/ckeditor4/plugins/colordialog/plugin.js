CKEDITOR.plugins.colordialog={requires:"dialog",lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",init:function(o){var i=new CKEDITOR.dialogCommand("colordialog");i.editorFocus=!1,o.addCommand("colordialog",i),CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js"),o.getColorFromDialog=function(i,n,a){var l,e,t,r;l=function(o){t(this),o="ok"==o.name?this.getValueOf("picker","selectedColor"):null,/^[0-9a-f]{3}([0-9a-f]{3})?$/i.test(o)&&(o="#"+o),i.call(n,o)},e=function(o){a&&(o.data=a)},t=function(o){o.removeListener("ok",l),o.removeListener("cancel",l),o.removeListener("show",e)},r=function(o){o.on("ok",l),o.on("cancel",l),o.on("show",e,null,null,5)},o.execCommand("colordialog"),o._.storedDialogs&&o._.storedDialogs.colordialog?r(o._.storedDialogs.colordialog):CKEDITOR.on("dialogDefinition",(function(o){if("colordialog"==o.data.name){var i=o.data.definition;o.removeListener(),i.onLoad=CKEDITOR.tools.override(i.onLoad,(function(o){return function(){r(this),i.onLoad=o,"function"==typeof o&&o.call(this)}}))}}))}}},CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);