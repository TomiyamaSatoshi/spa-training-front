function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());

    const id_token = googleUser.getAuthResponse().id_token;
    console.log("ID_Token: " + id_token);

    if (id_token) {
        localStorage.setItem('access_token', id_token);
        location.reload();
    }
  }