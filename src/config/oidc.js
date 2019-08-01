export const oidcSettings = {
  authority: 'https://' + document.location.host + '/admin/auth/realms/master',
  client_id: 'test',
  redirect_uri: 'https://' + document.location.host + '/callback/oidc-callback',
  response_type: 'id_token token',
  scope: 'openid profile',
  automaticSilentRenew: true,
  silent_redirect_uri: 'https://' + document.location.host + '/callback/silent-renew-oidc.html',
  post_logout_redirect_uri: 'https://' + document.location.host
}
