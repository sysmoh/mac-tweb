<template>
    <div>
        <div class="n-menu" v-bind:class="{'n-menu-large': !menuCollapsed}">
            <div class="d-flex flex-column justify-content-between">
                <el-menu :collapse="menuCollapsed" :router="true">
                    <el-menu-item :route="{name: 'activity'}" index="activity" class="d-flex">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="comment-alt" />
                        </div>
                        <span slot="title">Activité</span>
                    </el-menu-item>
                    <el-menu-item :route="{name: 'search'}" index="search" class="d-flex">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="search" />
                        </div>
                        <span slot="title">Rechercher</span>
                    </el-menu-item>
                    <el-menu-item :route="{name: 'profile'}" index="profile" class="d-flex">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="user" />
                        </div>
                        <span slot="title">Profil</span>
                    </el-menu-item>
                    <el-menu-item :route="{name: 'files'}" index="files" class="d-flex">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="folder-open" />
                        </div>
                        <span slot="title">Bibliothèque</span>
                    </el-menu-item>
                </el-menu>

                <el-menu :collapse="menuCollapsed">
                    <el-menu-item index="collapse" class="d-flex" @click="toggle">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="expand" v-if="menuCollapsed" />
                            <icon icon="compress" v-else />
                        </div>
                        <span slot="title" v-if="menuCollapsed">Agrandir</span>
                        <span slot="title" v-else>Réduire</span>
                    </el-menu-item>
                    <el-menu-item index="logout" class="d-flex"
                                  @click="$store.commit('security/logout')">
                        <div class="icon" v-bind:class="{'collapsed': menuCollapsed}">
                            <icon icon="sign-out-alt" />
                        </div>
                        <span slot="title">Deconnexion</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                menuCollapsed: 'ui/menuCollapsed',
            }),
        },
        methods: {
            toggle() {
                this.$store.commit('ui/collapseMenu', !this.menuCollapsed);
            },
        },
    };
</script>

<style lang="scss">
    @import "../assets/scss/variables";

    .n-menu {
        height:calc(100% - 57px);
        position:fixed;
        border-right:1.5px solid $gray-200;
        background:white;

        &.n-menu-large {
            width:250px;
        }

        > div {
            height:100%;
        }

        ul {

            li {
                span {
                    font-size:0.9em;
                }

                .icon {
                    font-size:1.3em;
                    color:$gray-600;

                    &:not(.collapsed) {
                        color: $gray-500;
                        display:block;
                        width:2em;
                    }
                }
            }
        }
    }
</style>
