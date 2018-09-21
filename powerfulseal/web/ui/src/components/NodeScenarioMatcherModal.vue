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

<!--
NodeScenarioMatcherModal is a component used for *editing* matchers. The model
is to be opened from a NodeScenarioModal.

The modal is opened and the matcher to be edited is loaded in by calling
`openModal(matcher)`.

If the user clicks "OK" (to save), the "updated" key is emitted, with the single
parameter being the modified matcher.

The component intentionally deep clones the scenario which is passed in so that
the user is able to cancel/hide the modal without saving changes.
-->
<template>
    <b-modal size="lg"
             ref="modal"
             @hidden="handleHidden"
             :hide-header-close="true"
             :noCloseOnBackdrop="true"
             :noCloseOnEsc="true">
        <div slot="modal-header">
            <h2>Matcher</h2>
        </div>

        <b-form-group horizontal
                      :label-cols="2"
                      breakpoint="md"
                      label="Name"
                      label-for="name">
            <b-form-input id="name"
                          type="text"
                          v-model="matcher.name"
                          placeholder="">
            </b-form-input>
        </b-form-group>
        <b-form-group horizontal
                      :label-cols="2"
                      breakpoint="md"
                      label="Value"
                      label-for="value">
            <b-form-input id="value"
                          type="text"
                          v-model="matcher.value"
                          placeholder="">
            </b-form-input>
        </b-form-group>
        <div slot="modal-footer">
            <button @click="handleDiscard"
                    type="button"
                    class="btn btn-secondary mr-1">
                Discard
            </button>
            <button @click="handleSave"
                    type="button"
                    class="btn btn-primary">
                Save
            </button>
        </div>
    </b-modal>
</template>

<script>
import constants from '../constants.js'
import _ from 'lodash'

const DEFAULT_MATCHER = {
  name: '',
  value: ''
}

export default {
  name: 'node-scenario-matcher-modal',
  data () {
    return {
      constants,
      matcher: DEFAULT_MATCHER
    }
  },
  methods: {
    openModal (matcher) {
      this.matcher = _.cloneDeep(matcher)
      this.$refs.modal.show()
    },
    handleSave (evt) {
      this.$emit('updated', this.matcher)
      this.$refs.modal.hide()
    },
    handleDiscard (evt) {
      this.$refs.modal.hide()
    },
    handleHidden () {
      this.$emit('hidden')
    }
  }
}
</script>
