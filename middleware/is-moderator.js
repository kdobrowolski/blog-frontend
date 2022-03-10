export default function ({ store, redirect }) {
    const user = store.getters['users/getUser'];
    if (!user.roles.includes('Admin')) return redirect('/admin');
  }