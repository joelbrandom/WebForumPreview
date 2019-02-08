function what() {
	//alert('cool!!!!');
}
function ModerateUser(user_id)
{
	window.open('/bbs/moderate.php?id='+user_id, '', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left=100,top=100');
}
function UserHistory(user_id)
{
	window.open('/bbs/user_history/'+user_id, '', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left=100,top=100');
}
function goLogin() {
	var username = document.getElementById('username').value;
	var pass = document.getElementById('pass').value;
	xmlhttp.open("GET", "/beta/a/ab.php?un=" + username + "&pw=" + pass);
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(username==''||pass==''){
				alert('You didn\'t fill out both fields!');
				exit;
			}
			if(xmlhttp.responseText.split("__")[0] == 'js_error') {
				alert(xmlhttp.responseText.split("__")[1]);
				exit;
			}
			document.getElementById('loginform').action = '/beta/a/login.php?logged';
			document.getElementById('loginform').submit();
		}
	}
	xmlhttp.send(null);
}
function getPMS() {
	xmlhttp.open("GET", "/beta/getpms.php?un="+uncookie+"&pw="+pwcookie);
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('newPM').value = xmlhttp.responseText.split(";")[0];
			document.getElementById('totalPM').value = xmlhttp.responseText.split(";")[1];
		}
	}
}

/*global alert, backgroundColor, checkLogin, cookie, display, document, getElementById, pwcookie, split,
style, uncookie, userlink, userpro, visibility, window*/
var cookie = document.cookie;
var glin, glout, userlink, userpro, uncookie, pwcookie;
if(document.cookie.indexOf("username=") > -1) {
//if(document.cookie.split("username=")[1].split(";")[0]) {
	var cool = 'yes';
	//alert('this FAR');
	uncookie = cookie.split("username=")[1].split(";")[0];
	pwcookie = cookie.split("password=")[1].split(";")[0];
}
if(document.cookie.indexOf("username=") > -1) {
//if(cookie.split("username=")[1].split(";")[0]) {
	//document.getElementById('username').value = 'asdf';
				//alert('yes yes yes yes yes');
	//document.getElementById('pass').value = 'it\'s a secret!!!!!';
} else {
	//alert('TESTESTTEST!!!!');
	//document.getElementById('loggedi').style.top="999px";
}
function checkLogin(loggin, loggout) {
	//document.getElementById('loggedin').style.display = "none";
	lin = document.getElementById(loggin);
	lout = document.getElementById(loggout);
	if (uncookie) {
		document.getElementById('loggedin').style.backgroundImage="url(/layout/08/loggedins.gif)";
		document.getElementById('account').style.visibility='hidden';
		document.getElementById('forgot_pass').style.visibility='hidden';
		userlink = '/user/profile/_/' + uncookie;
		userpro = '<a href="' + userlink + '">' + uncookie + '</a>';
			//glin.style.display = "none";
		//document.getElementById('lfholder').style.display = 'none';
	} else {
				//alert('hey');
			//glout.style.display = "none";
		//document.getElementById('loggedin').style.zIndex = "-1";
		document.getElementById("loggedi").style.display = "none";
		////window.alert('not logged in');
		////document.getElementById('account').style.display = "none";
		////document.getElementById('usrnm').style.display = "none";
	}
}
//window.onload=checkLogin('lfholder', 'loggedin');


function gotoPage(what)
{
  var page = document.getElementById('page_drop_down').value;
  window.location = "/bbs/thread/" + page + "";
}

function goPage(what)
{
  var page = document.pageselect.page.value;
  window.location = "/bbs/thread/" + page + "";
}

function gotoForum(what)
{
  var forum = document.forum_select.forum.value;
  if(forum != 0) 
  {
    window.location='/bbs/forum/' + forum + '';
  }
}

function goForum(what)
{
  var forum = document.forumselect.forum.value;
  if(forum != 0) 
  {
    window.location='/bbs/forum/' + forum + '';
  }
}
/*
function ModerateUser(user_id)
{
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open('/bbs/moderate.php?id='+user_id, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left=100,top=100');");
}
function UserHistory(user_id)
{
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open('/bbs/user_history.php?id='+user_id, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=400,height=300,left=100,top=100');");
}
*/


function Lock(tid)
{
  var x=window.confirm('Are you sure you want to lock/unlock this topic?');
  if(x)
  {
    window.location='/bbs/lock.php?tid=' + tid + '';
  }
}

function DeleteThread(tid)
{
  var d=window.confirm('Are you sure you want to delete this topic?');
  if(d)
  {
  window.location='/bbs/delete.php?what=topic&tid=' + tid + '';
  }
}

function DeletePost(pid, tid)
{
  var post=window.confirm('Are you sure you want to delete this post?');
  if(post)
  {
  window.location='/bbs/delete.php?what=post&pid=' + pid + '&tid=' + tid;
  }
}

function RemoveImage(img, pid, tid)
{
  var imgc=window.confirm('Are you sure you want to remove this image? There is no going back!');
  if(imgc)
  {
  window.location='/bbs/remove.php?img=' + img + '&pid=' + pid + '&tid=' + tid + '';
  }
}

function showauras(lvl) {
	var auram = "/layout/level/lvl"+lvl+"m.jpg";
	var auraa = "/layout/level/lvl"+lvl+"a.jpg";
	var auraid = "lvl_"+lvl;
	function gomod(){document.getElementById(auraid).src=auram;}
	function goadmin(){document.getElementById(auraid).src=auraa;}
}

function AddAward(user_id) {
	window.open('/user/add_award/'+user_id, '', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300,left=100,top=100');
}

function AddAnnouncement() {
	var new_announcement = '<form action="/add_announcement" id="announce_form" method="post">Latest Announcement: <input type="text" name="announcement" style="width:460px;" /> [<a href="javascript:document.getElementById(\'announce_form\').submit();">SUBMIT</a>]</form>';
	document.getElementById('latest_announcement').innerHTML = new_announcement;
}

function trophyinfo(e, asdf_text, trophy) {

	var tipbox = document.getElementById('trophy_info');
	var mouseX, mouseY;


	if(!e) {
		e = event;
	}
	
	/*if(window.event.clientX || window.event.clientY) {
		mouseX = window.event.clientX+document.documentElement.scrollLeft;
		mouseY = window.event.clientY+document.documentElement.scrollTop;
	} else if(window.event.pageX || window.event.pageY) {*/
		mouseX = e.pageX;
		mouseY = e.pageY;
	//}
	
	//var tipbox = document.getElementById('trophy_info');
	
	
	tipbox.style.display = "block";
	tipbox.style.top = (mouseY-170) + 'px';
	tipbox.style.left = (mouseX-240) + 'px';
	tipbox.innerHTML = asdf_text;
}

var mouseX, mouseY, tipbox;

function trophyinfo2(e, asdf_text, trophy) {

	tipbox = document.getElementById('trophy_info');


	if(document.documentElement.scrollLeft) {
		e = event;
			mouseX = window.event.clientX+document.documentElement.scrollLeft;
			mouseY = window.event.clientY+document.documentElement.scrollTop;
		} else {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}
	
	//var tipbox = document.getElementById('trophy_info');
	
	
	tipbox.style.display = "block";
	tipbox.innerHTML = asdf_text;
	tipbox.style.top = (mouseY-170) + 'px';
	tipbox.style.left = (mouseX-240) + 'px';
}

function trophyhide() {
	document.getElementById('trophy_info').style.display = 'none';
}

function dothistest() {
	document.getElementById('trophy_info').style.display = 'inline';
}

function movehover() {

	if(document.documentElement.scrollLeft) {
		e = event;
			mouseX = window.event.clientX+document.documentElement.scrollLeft;
			mouseY = window.event.clientY+document.documentElement.scrollTop;
		} else {
			mouseX = e.pageX;
			mouseY = e.pageY;
		}
	
	tipbox = document.getElementById('trophy_info');
	
	
	tipbox.style.display = "block";
	tipbox.innerHTML = asdf_text;
	tipbox.style.top = (mouseY-170) + 'px';
	tipbox.style.left = (mouseX-240) + 'px';
}

function startInfo2() {
	tipbox = document.getElementById('trophy_info');
	tipbox.style.visibility = 'visible';
	tipbox.style.display = '';
}


function sshowvideo(vid_id)
	{
		document.getElementById('video').style.display = 'block';
		document.getElementById('inner-video').innerHTML = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/' + vid_id + '?fs=1&amp;hl=fr_FR"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/' + vid_id + '?fs=1&amp;hl=fr_FR" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
	}
function hidevideo()
	{
		document.getElementById('video').style.display = 'none';
		document.getElementById('inner-video').style.display = 'none';
	}
function showvideo(put_me_here)
	{
		var the_video = put_me_here.split("___");
		the_video = the_video[1];
		document.getElementById(put_me_here).style.display = 'block';
		document.getElementById(put_me_here).innerHTML = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/' + the_video + '?fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/' + the_video + '?fs=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
	}
