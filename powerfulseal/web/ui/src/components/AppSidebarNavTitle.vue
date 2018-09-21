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
    <li class="nav-title" v-bind:class="classes">
        <template v-if="wrapper && wrapper.element">
            <component v-bind:is="wrapper.element" v-bind="wrapper.attributes">
                {{name}}
            </component>
        </template>
        <template v-else>
            {{name}}
        </template>
    </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    wrapper: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>
