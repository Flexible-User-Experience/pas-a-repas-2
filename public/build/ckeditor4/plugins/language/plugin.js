CKEDITOR.plugins.add("language",{requires:"menubutton",lang:"ar,az,bg,ca,cs,cy,da,de,de-ch,el,en,en-au,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,gl,he,hr,hu,id,it,ja,km,ko,ku,lt,lv,nb,nl,no,oc,pl,pt,pt-br,ro,ru,sk,sl,sq,sr,sr-latn,sv,tr,tt,ug,uk,vi,zh,zh-cn",icons:"language",hidpi:!0,init:function(e){var n,t,a,r,l=e.config.language_list||["ar:Arabic:rtl","fr:French","es:Spanish"],g=this,u=e.lang.language,i={};for(e.addCommand("language",{allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",contextSensitive:!0,exec:function(e,n){var t=i["language_"+n];t&&e[t.style.checkActive(e.elementPath(),e)?"removeStyle":"applyStyle"](t.style)},refresh:function(e){this.setState(g.getCurrentLangElement(e)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)}}),r=0;r<l.length;r++)t=(n=l[r].split(":"))[0],i[a="language_"+t]={label:n[1],langId:t,group:"language",order:r,ltr:"rtl"!=(""+n[2]).toLowerCase(),onClick:function(){e.execCommand("language",this.langId)},role:"menuitemcheckbox"},i[a].style=new CKEDITOR.style({element:"span",attributes:{lang:t,dir:i[a].ltr?"ltr":"rtl"}});i.language_remove={label:u.remove,group:"language_remove",state:CKEDITOR.TRISTATE_DISABLED,order:i.length,onClick:function(){var n=g.getCurrentLangElement(e);n&&e.execCommand("language",n.getAttribute("lang"))}},e.addMenuGroup("language",1),e.addMenuGroup("language_remove"),e.addMenuItems(i),e.ui.add("Language",CKEDITOR.UI_MENUBUTTON,{label:u.button,allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",toolbar:"bidi,30",command:"language",onMenu:function(){var n,t={},a=g.getCurrentLangElement(e);for(n in i)t[n]=CKEDITOR.TRISTATE_OFF;return t.language_remove=a?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,a&&(t["language_"+a.getAttribute("lang")]=CKEDITOR.TRISTATE_ON),t}}),e.addRemoveFormatFilter&&e.addRemoveFormatFilter((function(e){return!(e.is("span")&&e.getAttribute("dir")&&e.getAttribute("lang"))}))},getCurrentLangElement:function(e){var n,t=e.elementPath();if(e=t&&t.elements,t)for(var a=0;a<e.length;a++)t=e[a],!n&&"span"==t.getName()&&t.hasAttribute("dir")&&t.hasAttribute("lang")&&(n=t);return n}});