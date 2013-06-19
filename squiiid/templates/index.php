<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta name="description" content="Description goes here">
<meta name="keywords" content="">
<meta name="author" content="Squiiid">
<head>
	<title>Squiiid</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<!-- CSS -->
	<link href='//fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	<link href='squiiid.css' rel='stylesheet' type='text/css'>
	<!-- Icons -->
	<link rel="icon" href="favicon.ico" />
	<link rel="apple-touch-icon-precomposed" media="(resolution: 326dpi)" href="assets/images/apple-touch-icon-114.png">
	<link rel="apple-touch-icon-precomposed" media="(resolution: 163dpi)" href="assets/images/apple-touch-icon-57.png">
	<link rel="apple-touch-icon-precomposed" media="(resolution: 132dpi)" href="assets/images/apple-touch-icon-72.png">
</head>
<body id="body">
	<!-- Fixed UI Elements -->
	<div class="button-login" id="button-login"></div>
	<div class="squiiid">
		<!-- Layers -->
		<div class="layer" id="inviteconfirm">
			<div class="layer-slide" id="slide-invite-confirm">
				<p>Next step will be to sync your photos. Confirmation email sent.</p>
			</div>
		</div>
		<div class="layer" id="requestinvite">
			<div class="layer-slide" id="slide-invite">
				<p>Request Invite</p>
				<form method="post" target="invitehidden" name="requestinvite">
					<input type="text" name="email" value="email" />
					<input type="text" name="link" value="blog/site link" />
					<button id="requestinvitebutton">Request Invite</button>
				</form>
			</div>
		</div>
		<div class="layer" id="login">
			<div class="layer-slide" id="slide-login">
				<p>Login</p>
				<form method="post" target="views/dashboard.php">
					<input type="text" name="email" value="email" />
					<input type="password" name="password" value="" />
					<input type="submit" name="submitlogin" value="login"/>
				</form>
			</div>
		</div>
		<div class="layer" id="intro">
			<div class="layer-slide" id="slide-1">
				<p>Turn any photo into a storefront</p>
				<div class="squid-button" id="squid-button">squiiid icon</div>
			</div>
			<div class="layer-slide" id="slide-2">
				<p>Info 1</p>
			</div>
			<div class="layer-slide" id="slide-3">
				<p>Info 2</p>
			</div>
			<div class="layer-slide" id="slide-4">
				<p>Info 3</p>
			</div>
			<div class="layer-slide" id="slide-5">
				<p>Info 4</p>
			</div>
			<div class="layer-slide" id="slide-6">
				<p><a href="#" id="requestinvite2">Request Invite</a><br/><a href="#">Say hiii</a></p>
			</div>
		</div>
	</div>
	<iframe class="invitehidden" name="invitehidden"></iframe>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
	<script src="js/core.js"></script>
</body>
</html>
