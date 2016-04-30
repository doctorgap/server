const template = (params) => `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" media="all" href="stylesheets/style.css" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://cdn.pubnub.com/pubnub-3.7.14.min.js"></script>
  <script src="https://cdn.pubnub.com/webrtc/webrtc.js"></script>

</head>
<body>

  <div class="background"></div>

  <div class="content" style="text-align: center;">
    <div class="glass"></div>

    <br>
    <h1>Doctor Gap</h1>

    <div id="vid-box" style="margin: 10px;">
      <img src="images/logo-facebook.png" />
    </div>

    <form name="loginForm" id="login" action="#" onsubmit="return login(this);">
        <input type="text" name="username" id="username" placeholder="Pick a username!" />
        <input type="submit" name="login_submit" value="Log In">
    </form>

    <form name="callForm" id="call" action="#" onsubmit="return makeCall(this);">
    	<input type="text" name="number" placeholder="Enter user to dial!" />
    	<input type="submit" value="Call"/>
    </form>
  </div>

  <script>
    var video_out = document.getElementById("vid-box");

    function login(form)
    {
    	var phone = window.phone = PHONE({
    	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
    	    publish_key   : 'pub-c-f3d45da6-20f7-4ec4-8721-4f919f94f208',
    	    subscribe_key : 'sub-c-6e7598c0-0eb3-11e6-bbd9-02ee2ddab7fe'
    	});
    	phone.ready(function() { form.username.style.background="#55ff5b"; });
    	phone.receive(function(session) {
    	    session.connected(function(session)
          {
            video_out.innerHTML='';
            video_out.appendChild(session.video);
          });
    	    session.ended(function(session)
          {
            video_out.innerHTML='<img src="images/logo-facebook.png" />';
          });
    	});
    	return false; 	// So the form does not submit.
    }

    function makeCall(form)
    {
    	if (window.phone)
      {
        phone.dial(form.number.value);
      }
    	else
      {
        alert("Login First!");
      }
    	return false;
    }
  </script>
</body>
</html>`

export default template
