
export default function ({ $axios, redirect, store, app }) { 
  $axios.onRequest(config => {
    const accessToken = app.$cookiz.get('access_token');
    $axios.setToken(accessToken, 'Bearer');
  })

  $axios.onError(error => {
    const code = axiosError?.response?.status || null;
    if (code === 401) {
      store.commit('users/SET_USER', null);
      redirect('/admin/login')
    }
  })
}