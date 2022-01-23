export default function ({ store, redirect }) {
  if (!store.getters['users/isLoggedIn']) {
    return redirect('/admin/login');
  }
}
