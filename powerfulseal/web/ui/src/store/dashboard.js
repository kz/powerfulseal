/*
 * Copyright 2018 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue'
import constants from '../constants.js'
import axios from 'axios'

export default {
  state: {
    autonomousModeStatus: constants.AUTONOMOUS_MODE_STATUS.LOADING,
    isLogsLoaded: false,
    logs: []
  },
  mutations: {
    setAutonomousModeStatus (state, status) {
      state.autonomousModeStatus = status
    },
    setIsLogsLoaded (state, status) {
      state.isLogsLoaded = status
    },
    appendLogEntries (state, entries) {
      state.logs = state.logs.concat(entries)
    }
  },
  actions: {
    async getAutonomousModeStatus ({commit}) {
      commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.LOADING)
      try {
        const response = await axios.get(Vue.prototype.$config['baseUrl'] + '/autonomous-mode')
        if (response.data['isStarted'] === true) {
          commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.STARTED)
        } else {
          commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.STOPPED)
        }
      } catch (err) {
        console.error('Unable to retrieve autonomous mode status\n' + err)
        commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.ERROR)
      }
    },
    async startAutonomousMode ({commit}) {
      try {
        await axios.post(Vue.prototype.$config['baseUrl'] + '/autonomous-mode', {
          'action': 'start'
        })
        commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.STARTED)
      } catch (err) {
        console.error('Unable to start autonomous mode\n' + err)
        commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.ERROR)
      }
    },
    async stopAutonomousMode ({commit}) {
      try {
        await axios.post(Vue.prototype.$config['baseUrl'] + '/autonomous-mode', {
          'action': 'stop'
        })
        commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.STOPPED)
      } catch (err) {
        console.error('Unable to stop autonomous mode\n' + err)
        commit('setAutonomousModeStatus', constants.AUTONOMOUS_MODE_STATUS.ERROR)
      }
    },
    async updateLogs ({commit, state}) {
      // Update logs polls the web server taking into account the current length of
      // the logs in the store as an offset so that repeat log entries are not polled for.
      commit('setIsLogsLoaded', false)
      try {
        let response = await axios.get(Vue.prototype.$config['baseUrl'] + '/logs?offset=' + state.logs.length)
        commit('appendLogEntries', response.data['logs'])
      } catch (err) {
        console.error('Unable to retrieve logs\n' + err)
      }
      commit('setIsLogsLoaded', true)
    }
  }
}
