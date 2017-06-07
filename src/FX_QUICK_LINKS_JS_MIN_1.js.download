







var QuickLinksPersistance = $.klass({

 
 initialize: function(cookieDomain) 
 {
 this.domain = cookieDomain; this.jar = new $.cookieJar('quicklinks',{ 
 expires:630720000, 
 domain: this.domain,
 path: '/' 
 });  this.quickLinkData = null;  },

 
 getQuickLinkData: function()
 {
 if (!this.quickLinkData){ this.quickLinkData = this.jar.get('quickLinkData');}
 if (!this.quickLinkData){ this.quickLinkData = {links:[]};}
 this.sortAlpha(this.quickLinkData.links)

 return this.quickLinkData
 },

 
 saveQuickLinkData: function()
 {

 
 oldQuickLinks = this.quickLinkData.links; result = this.jar.set('quickLinkData', this.quickLinkData); if (result == false)
 {
 this.quickLinkData.links = oldQuickLinks; alert("Maximum number of links exceeded."); }
 return result; },

 sortAlpha: function (anArray)
 {
 return anArray.sort( function(a,b) { return (a.name.toLowerCase() < b.name.toLowerCase() ) ? -1 : 1; }); },

 bindFunction: function(event, selector, functionRef, instance)
 {
 $(selector).bind(event, function() { functionRef.apply(instance);}); }

});var QuickLinksRenderer = $.klass(QuickLinksPersistance,{

 
 initialize: function($super, linksSelectId, linksDividerId, customizationURL, cookieDomain) 
 {
 $super(cookieDomain); this.selectElement = $(linksSelectId)[0]; this.listDividerElement = $(linksDividerId); this.customizeURL = customizationURL; this.addLinkDelegate = null; this.bindFunction('change', linksSelectId, this.quickLinksChanged, this); if(cookieDomain.charAt(0) == ".") {
 this.crossDomain = cookieDomain.substr(1); } else {
 this.crossDomain = cookieDomain; }
 },

 
 setAddLinkDeligate: function(delegate)
 {
 this.addLinkDelegate = delegate
 },

 
 quickLinksChanged: function()
 {
 var linkURL = this.selectElement.options[this.selectElement.selectedIndex].value; if (linkURL ==">") { 
 _gaq.push(['_trackPageview','QUICKLINKS' + linkURL]);  window.open(this.customizeURL); return; }
 if (linkURL == "+") { 
 _gaq.push(['_trackPageview','QUICKLINKS' + linkURL]); this.addCurrentPage(); return; }
 if (linkURL != ""){ 
 _gaq.push(['_trackPageview','QUICKLINKS' + linkURL]);  window.open(linkURL); } else { 
 this.selectElement.selectedIndex=0; }
 },
 
 
 addCurrentPage: function()
 {
 document.domain = this.crossDomain; userTitle = prompt ("Save this page (" + top.window.location.href + ") as:",top.document.title); if (userTitle != null && userTitle != "")
 {
 newTitle = userTitle; this.quickLinkData.links.push({url: top.document.URL, name: newTitle}); this.quickLinkData.links = this.sortAlpha(this.quickLinkData.links); this.saveQuickLinkData(); this.populateQuicklinks();  if (this.addLinkDelegate)
 {
 this.addLinkDelegate.quickLinkData.links = jQuery.makeArray(this.quickLinkData.links); this.addLinkDelegate.initUI(); }

 }

 
 this.selectElement.selectedIndex=0; return false; },

 
 populateQuicklinks: function()
 {
 qlinkData = this.getQuickLinkData();  this.listDividerElement.nextAll().remove(); selElement = this.selectElement; if (qlinkData.links.length > 0 )
 {
 
 jQuery.each(qlinkData.links, function(i,link){
 $(selElement).append('<option value="'+link.url+'">'+link.name+'</option>'); });  $(selElement).append('<option value="+">- - - - - - - - - -</option>'); }

 $(selElement).append('<option value="+">+ Add This Page</option>'); $(selElement).append('<option value="+">- - - - - - - - - -</option>'); $(selElement).append('<option value=">">&gt; Customize This List</option>'); } 

});var quickLinks = null;function initQuickLinks()
{

 $.each($(".UCFHeaderSearchText"), function(index, aInput) {
 aInput.value=aInput.title; aInput.style.color="#999";  }); quickLinks = new QuickLinksRenderer("#UCFHeaderLinks", "#UCFHeaderLinksStaticDivider", "http://www.ucf.edu/quicklinks/customizer.html","ucf.edu"); quickLinks.populateQuicklinks(); return false;}