<!--
Copyright 2018 Bloomberg Finance L.P.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <div slot="header"></div>
            <ul class="nav">
                <li class="nav-item" v-for="(item, index) in navItems" :key="index">
                    <div v-if="item.title">
                        <app-sidebar-nav-title :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
                    </div>
                    <div v-else-if="item.divider">
                <li class="divider"></li>
    </div>
    <div v-else>
        <div v-if="item.children">
            <app-sidebar-nav-dropdown :name="item.name" :url="item.url" :icon="item.icon">
                <div v-for="(child, index) in item.children" :key="index">
                    <div v-if="child.children">
                        <app-sidebar-nav-dropdown :name="child.name" :url="child.url" :icon="child.icon">
                            <li class="nav-item" v-for="(child, index) in item.children" :key="index">
                                <app-sidebar-nav-link :name="child.name" :url="child.url" :icon="child.icon" :badge="child.badge"/>
                            </li>
                        </app-sidebar-nav-dropdown>
                    </div>
                    <div v-else>
                        <li class="nav-item">
                            <app-sidebar-nav-link :name="child.name" :url="child.url" :icon="child.icon" :badge="child.badge"/>
                        </li>
                    </div>
                </div>
            </app-sidebar-nav-dropdown>
        </div>
        <div v-else>
            <app-sidebar-nav-link :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge"/>
        </div>
    </div>
    </li>
    </ul>
    <slot></slot>
    <div slot="footer"></div>
    </nav>
    </div>
</template>

<style lang="css">
.nav-link {
    cursor: pointer;
}
</style>

<script>
import AppSidebarNavDropdown from './AppSidebarNavDropdown.vue'
import AppSidebarNavLink from './AppSidebarNavLink.vue'
import AppSidebarNavTitle from './AppSidebarNavTitle.vue'

export default {
  name: 'app-sidebar',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    'app-sidebar-nav-dropdown': AppSidebarNavDropdown,
    'app-sidebar-nav-link': AppSidebarNavLink,
    'app-sidebar-nav-title': AppSidebarNavTitle
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>
