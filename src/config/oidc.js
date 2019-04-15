export const oidcSettings = {
  authority: 'https://demo.gerdi.org/admin/auth/realms/master',
  client_id: 'test',
  redirect_uri: 'https://demo.gerdi.org/callback/oidc-callback',
  response_type: 'id_token token',
  scope: 'openid email roles',
  automaticSilentRenew: true,
  silent_redirect_uri: 'https://demo.gerdi.org/callback/silent-renew-oidc.html',
  post_logout_redirect_uri: 'https://demo.gerdi.org'
}
