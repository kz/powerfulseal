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
    <b-link v-if="isRealLink" :href="url" class="nav-link">
        {{ name }}
    </b-link>
    <router-link v-else :to="url" class="nav-link">
        {{name}}
        <b-badge :variant="badge.variant">{{badge.text}}</b-badge>
    </router-link>
</template>

<script>
export default {
  name: 'app-sidebar-nav-link',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    badge: {
      default: ''
    }

  },

  computed: {
    isRealLink: function () {
      return (this.url || '').startsWith('http')
    }
  }
}
</script>
