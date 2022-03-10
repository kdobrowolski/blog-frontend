
export default (ctx) => {

    setInterval(async () => {
        let path = ctx.app.router.history.current.path;
        if (!path.match(/admin.*/)) return;

        await ctx.store.dispatch('users/checkRefreshToken', ctx);
    }, 30000)
  };
  