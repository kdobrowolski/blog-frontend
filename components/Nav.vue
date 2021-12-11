<template>
    <nav class="nav">
        <div class="nav-container">
            <h1 class="nav-logo">BlogApp</h1>
            <div class="nav-list">
                <ul class="nav-elements">
                    <li>Strona główna</li>
                    <li>O mnie</li>
                    <li>Posty</li>
                    <li>Kontakt</li>
                </ul>
            </div>
            <font-awesome-icon class="menu-icon" icon="bars" />
        </div>
    </nav>
</template>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 70px;
        border-bottom: 1px solid $primary-border-color;

        & > .nav-container {
            display: flex;
            width: 80%;
            margin: 0 auto;
            & > .nav-logo {
                position: relative;
                top: 20px;
                margin: 0;
                font-size: 2.2rem;
                color: $primary-color;
            }
            & > .nav-list {
                position: fixed;
                top: 0;
                left: 0;
                display: none;
                width: 100vw;
                height: 100vw;
                background-color: white;
                & > .nav-elements {
                    margin-top: 125px;
                    padding: 0;
                    list-style: none;
                    text-align: center;
                    font-size: 3rem;
                    & > li {
                        margin-top: 40px;
                    }

                    @include sm {
                        display: flex;
                        margin-top: 25px;
                        font-size: 1.6rem;
                        & > li {
                            margin-top: 0;
                            margin-right: 20px;
                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    }
                }

                @include sm {
                    position: relative;
                    display: block;
                    width: auto;
                    height: auto;
                    margin-left: auto;
                    background-color: transparent;
                }
            }
            & > .menu-icon {
                    margin-top: 15px;
                    margin-left: auto;
                    font-size: 3.5rem;

                    @include sm {
                        display: none;
                    }
                }
        }
    }
</style>