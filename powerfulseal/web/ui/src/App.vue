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
    <div class="app">
        <app-header/>
        <div class="app-body">
            <app-sidebar :nav-items="nav"/>
            <b-container fluid tag="main" class="main">
                <b-row>
                    <b-col cols="12" class="mt-3">
                        <router-view></router-view>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<style lang="scss">
/* Place a margin after icons in card headers */
.card-header {
    i {
        margin-right: .4rem;
    }

    .svg-inline--fa {
        margin-right: .4rem;
    }
}

/* Fix bug where checkboxes and radio buttons are not aligned to labels */
.form-check-input {
    margin-top: 0.4rem !important;
    margin-left: 0 !important;
}
</style>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'

const nav = [
  {
    name: 'Dashboard',
    url: '/dashboard'
  },
  {
    name: 'Configuration',
    url: '/configuration'
  },
  {
    name: 'Nodes & Pods',
    url: '/items'
  }
]

export default {
  name: 'app',
  components: {
    // Use a separate name for header due to collision with reserved word
    'app-header': AppHeader,
    'app-sidebar': AppSidebar
  },
  data () {
    return {
      nav: nav
    }
  }
}
</script>
