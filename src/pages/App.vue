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
            <f7-view main navbar-through >
                <!-- For iOS theme we use navbar-through layout so the navbar should be a child of the View -->
                <f7-navbar v-if="$theme.ios" title="Awesome App"></f7-navbar>
                <f7-pages navbar-fixed >
                    <f7-page infinite-scroll @infinite="onInfiniteScroll"  pull-to-refresh @ptr:refresh="onRefresh"  >
                        <!-- For Material theme we use navbar-fixed layout so the navbar should be a child of the Page -->
                        <f7-navbar v-if="$theme.material" title="Awesome App"></f7-navbar>
                        <!-- Page content -->
                        <f7-progressbar infinite color="blue"></f7-progressbar>
                        <f7-block>
                            <h1>Apache Cordova</h1>
                            <div id="deviceready" class="blink">
                                <p class="event listening">Connecting to Device</p>
                                <p class="event received">Device is Ready</p>
                            </div>
                            <f7-preloader color="red"></f7-preloader>

                            <p class="title">{{ d }}</p>
                            <ul class="custom-ul">
                                <li><f7-link href="contact.html" external>contact</f7-link></li>
                                <li><f7-link href="home.html" external>home</f7-link></li>
                            </ul>
                        </f7-block>
                        <f7-timeline>
                            <f7-timeline-item day="21" month="DEC" inner content="Some text goes here"></f7-timeline-item>
                            <f7-timeline-item day="22" month="DEC" inner content="Another text goes here"></f7-timeline-item>
                        </f7-timeline>
                        <!-- calendar -->
                        <form class="list-block">
                            <ul>
                                <!-- Text Input -->
                                <li>
                                    <div class="item-content">
                                        <div class="item-inner">
                                            <div class="item-title label">Name</div>
                                            <div class="item-input">
                                                <input type="text" placeholder="Name" readonly  id="calendar-default"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </form>
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

                        <f7-searchbar cancel-link="Cancel" search-list="#search-list"></f7-searchbar>

                        <!-- This block will become visible when there is nothing found -->
                        <f7-list class="searchbar-not-found">
                            <f7-list-item title="Nothing found"></f7-list-item>
                        </f7-list>

                        <!-- Search through this list -->
                        <f7-list
                            id="search-list"
                            class="searchbar-found"
                            media-list
                            virtual
                            :virtual-items="items"
                            :virtual-height="63"
                            :virtual-search-all="searchAll"
                        >
                            <!-- Templte 7 Virtual List Item Template -->
                            <t7-template>
                                <f7-list-item media-item link="#" :title="'{{title}}'" :subtitle="'{{subtitle}}' "></f7-list-item>
                            </t7-template>
                        </f7-list>
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
    ul.custom-ul {
        list-style-type: none;
        li { margin: 14px 10px; }
    }
    .list-block { margin-bottom: 0; }
</style>
<script>
    export default {
        name: 'app',
        data () {
            var items = []
            for (var i = 1; i <= 10; i++) {
                items.push({
                    title: 'Item ' + i,
                    subtitle: 'Subtitle ' + i
                })
            }
            return {
                d: 'This is test index page...',
                page: 2,
                finish: false,
                items: items
            }
        },

        methods: {
            // damn method no in doc
            onF7Init () {
                this.$f7.calendar({
                    input: '#calendar-default',
                    closeOnSelect: true
                })
            },
            async onInfiniteScroll () {
                try {
                    if (this.finish) {
                        return false
                    }
                    this.finish = true
                    let po = (this.page - 1) * 10

                    let items = await this.$http.get('/items.json')
                    this.page++
                    for (let [index, item] of items.data.entries()) {
                        item.title = item.title + (po + index).toString()
                        item.subtitle = item.subtitle + (po + index).toString()
                    }
                    this.items = this.items.concat(items.data)
                    this.finish = false
                    if (items.data.length < 10) {
                        this.finish = true
                        this.$f7.detachInfiniteScroll(this.$$('.infinite-scroll')) // detach
//                        this.$$('.infinite-scroll-preloader').hide()
                    }
                } catch (e) {
                    console.error(e)
                }
            },
            searchAll (query) {
                var self = this
                var found = []
                for (var i = 0; i < self.items.length; i++) {
                    if (self.items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i)
                }
                return found
            },
            async onRefresh () {
                try {
                    this.finish = true
                    let po = 0

                    let items = await this.$http.get('/items.json')
                    this.page++
                    for (let [index, item] of items.data.entries()) {
                        item.title = item.title + (po + index).toString()
                        item.subtitle = item.subtitle + (po + index).toString()
                    }
                    this.items = items.data
                    this.finish = false
                    if (items.data.length < 10) {
                        this.finish = true
                        this.$$('.infinite-scroll-preloader').hide()
                    }
                    this.$f7.pullToRefreshDone()
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }
</script>

