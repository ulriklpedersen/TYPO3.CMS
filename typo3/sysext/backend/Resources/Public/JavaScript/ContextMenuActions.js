/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","./Enum/Severity","jquery","./InfoWindow","./Modal","./ModuleMenu","./Viewport","TYPO3/CMS/Backend/Notification"],function(e,t,n,r,a,o,i,s,l){"use strict";return function(){function e(){}return e.getReturnUrl=function(){return encodeURIComponent(top.list_frame.document.location.pathname+top.list_frame.document.location.search)},e.editRecord=function(t,n){var a="",o=r(this).data("pages-language-uid");o&&(a="&overrideVals[pages][sys_language_uid]="+o),s.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit["+t+"]["+n+"]=edit"+a+"&returnUrl="+e.getReturnUrl())},e.viewRecord=function(e,t){var n=r(this).data("preview-url");n&&window.open(n,"newTYPO3frontendWindow").focus()},e.openInfoPopUp=function(e,t){a.showItem(e,t)},e.mountAsTreeRoot=function(e,t){"pages"===e&&s.NavigationContainer.PageTree.setTemporaryMountPoint(t)},e.newPageWizard=function(t,n){s.ContentContainer.setUrl(top.TYPO3.settings.NewRecord.moduleUrl+"&id="+n+"&pagesOnly=1&returnUrl="+e.getReturnUrl())},e.newContentWizard=function(t,a){var i=r(this),s=i.data("new-wizard-url");s&&(s+="&returnUrl="+e.getReturnUrl(),o.advanced({title:i.data("title"),type:o.types.ajax,size:o.sizes.medium,content:s,severity:n.SeverityEnum.notice}))},e.newRecord=function(t,n){s.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit["+t+"][-"+n+"]=new&returnUrl="+e.getReturnUrl())},e.openHistoryPopUp=function(t,n){s.ContentContainer.setUrl(top.TYPO3.settings.RecordHistory.moduleUrl+"&element="+t+":"+n+"&returnUrl="+e.getReturnUrl())},e.openListModule=function(e,t){var n="pages"===e?t:r(this).data("page-uid");i.App.showModule("web_list","id="+n)},e.pagesSort=function(e,t){var n=r(this).data("pages-sort-url");n&&s.ContentContainer.setUrl(n)},e.pagesNewMultiple=function(e,t){var n=r(this).data("pages-new-multiple-url");n&&s.ContentContainer.setUrl(n)},e.disableRecord=function(t,n){s.ContentContainer.setUrl(top.TYPO3.settings.RecordCommit.moduleUrl+"&data["+t+"]["+n+"][hidden]=1&redirect="+e.getReturnUrl()).done(function(){s.NavigationContainer.PageTree.refreshTree()})},e.enableRecord=function(t,n){s.ContentContainer.setUrl(top.TYPO3.settings.RecordCommit.moduleUrl+"&data["+t+"]["+n+"][hidden]=0&redirect="+e.getReturnUrl()).done(function(){s.NavigationContainer.PageTree.refreshTree()})},e.deleteRecord=function(e,t){var a=r(this);o.confirm(a.data("title"),a.data("message"),n.SeverityEnum.warning,[{text:r(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:r(this).data("button-ok-text")||TYPO3.lang["button.delete"]||"Delete",btnClass:"btn-warning",name:"delete"}]).on("button.clicked",function(n){if("delete"===n.target.getAttribute("name")){var a=top.TYPO3.settings.RecordCommit.moduleUrl+"&cmd["+e+"]["+t+"][delete]=1";r.ajax({url:a,success:function(){if("pages"===e&&s.NavigationContainer.PageTree){if(t===top.fsMod.recentIds.web){var n=s.NavigationContainer.PageTree.instance.nodes[0];s.NavigationContainer.PageTree.selectNode(n)}s.NavigationContainer.PageTree.refreshTree()}}})}o.dismiss()})},e.copy=function(t,n){var a=TYPO3.settings.ajaxUrls.contextmenu_clipboard+"&CB[el]["+t+"%7C"+n+"]=1&CB[setCopyMode]=1";r.ajax(a).always(function(){e.triggerRefresh(s.ContentContainer.get().location.href)})},e.clipboardRelease=function(t,n){var a=TYPO3.settings.ajaxUrls.contextmenu_clipboard+"&CB[el]["+t+"%7C"+n+"]=0";r.ajax(a).always(function(){e.triggerRefresh(s.ContentContainer.get().location.href)})},e.cut=function(t,n){var a=TYPO3.settings.ajaxUrls.contextmenu_clipboard+"&CB[el]["+t+"%7C"+n+"]=1&CB[setCopyMode]=0";r.ajax(a).always(function(){e.triggerRefresh(s.ContentContainer.get().location.href)})},e.triggerRefresh=function(e){-1===e.indexOf("record%2Fedit")&&s.ContentContainer.refresh(!0)},e.clearCache=function(e,t){r.ajax({url:TYPO3.settings.ajaxUrls.web_list_clearpagecache+"&id="+t,cache:!1,dataType:"json",success:function(e){!0===e.success?l.success(e.title,e.message,1):l.error(e.title,e.message,1)},error:function(){l.error("Clearing page caches went wrong on the server side.")}})},e.pasteAfter=function(t,n){e.pasteInto.bind(r(this))(t,-n)},e.pasteInto=function(t,a){var i=r(this),l=function(){var n="&CB[paste]="+t+"%7C"+a+"&CB[pad]=normal&redirect="+e.getReturnUrl();s.ContentContainer.setUrl(top.TYPO3.settings.RecordCommit.moduleUrl+n).done(function(){"pages"===t&&s.NavigationContainer.PageTree&&s.NavigationContainer.PageTree.refreshTree()})};i.data("title")?o.confirm(i.data("title"),i.data("message"),n.SeverityEnum.warning,[{text:r(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:r(this).data("button-ok-text")||TYPO3.lang["button.ok"]||"OK",btnClass:"btn-warning",name:"ok"}]).on("button.clicked",function(e){"ok"===e.target.getAttribute("name")&&l(),o.dismiss()}):l()},e}()});