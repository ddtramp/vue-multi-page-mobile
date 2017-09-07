<template>
    <div id="app" v-cloak>

        <f7-statusbar></f7-statusbar>
        <!-- Left Panel with "cover" effect -->
        <f7-panel left cover>
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar title="Left Panel"></f7-navbar>
                        <f7-block>
                            <p>Here comes the left panel text</p>
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
        <!-- Right Panel with "reveal" effect -->
        <f7-panel right reveal>
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar title="Right Panel"></f7-navbar>
                        <f7-block>
                            <p>Here comes the right panel text</p>
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
        <!-- Views -->
        <f7-views>
            <!-- Main view-->
            <f7-view main navbar-through toolbar-fixed>


                <!-- For iOS theme we use navbar-through layout so the navbar should be a child of the View -->
                <f7-navbar v-if="$theme.ios" title="Awesome App"></f7-navbar>
                <f7-pages navbar-fixed toolbar-fixed>
                    <f7-page>
                        <!-- For Material theme we use navbar-fixed layout so the navbar should be a child of the Page -->
                        <f7-navbar v-if="$theme.material" title="Awesome App"></f7-navbar>
                        <!-- Page content -->
                        <f7-block>
                            <h1>Apache Cordova</h1>
                            <div id="deviceready" class="blink">
                                <p class="event listening">Connecting to Device</p>
                                <p class="event received">Device is Ready</p>
                            </div>

                            <p class="title">{{ d }}</p>
                            <ul>
                                <li><f7-link href="contact.html" external>contact</f7-link></li>
                                <li><f7-link href="home.html" external>home</f7-link></li>
                            </ul>
                        </f7-block>
                        <!-- Buttons to open panels -->
                        <f7-grid>
                            <f7-col>
                                <f7-button open-panel="left">Left Panel</f7-button>
                            </f7-col>
                            <f7-col>
                                <f7-button open-panel="right">Right Panel</f7-button>
                            </f7-col>
                        </f7-grid>
                        <!-- Button to open popup -->
                        <f7-button open-popup="#my-popup">Open Popup</f7-button>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
        <!-- Popup. All modals should be outside of Views -->
        <f7-popup id="my-popup">
            <f7-view>
                <f7-pages navbar-fixed>
                    <f7-page>
                        <f7-navbar title="Popup">
                            <!-- Link to close popup -->
                            <f7-nav-right>
                                <f7-link close-popup>Close</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-block>
                            <p>Here comes popup text</p>
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
    </div>
</template>
<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    [v-cloak] { display: none; }

    .title { text-align: center; }
    ul {
        list-style-type: none;
        li { margin: 14px 10px; }
    }

</style>
<script>
    export default {
        name: 'app',
        data () {
            return {
                d: 'This is test index page...'
            }
        }

    }
</script>

