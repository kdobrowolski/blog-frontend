export default function ({ $axios, redirect, store }) { 
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        store.commit('users/SET_USER', null);
        redirect('/admin/login')
      }
    })
  }