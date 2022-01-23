export default function ({ store, redirect }) {
    const user = store.getters['users/getUser'];
    if (user.isAdmin !== 1) return redirect('/admin');
  }