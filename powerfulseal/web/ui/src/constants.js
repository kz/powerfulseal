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

export default {
  AUTONOMOUS_MODE_STATUS: {
    STARTED: 0,
    STOPPED: 1,
    STARTING: 3,
    STOPPING: 4,
    LOADING: 5,
    ERROR: 6
  },
  INVENTORY_GROUP_TYPES: {
    ALL_NODES: 0,
    INVENTORY_FILE: 1
  },
  INVENTORY_GROUP_TYPE_LABELS: {
    0: 'All Nodes',
    1: 'Inventory File'
  },
  CLOUD_DRIVERS: {
    OPENSTACK: 0,
    AWS: 1,
    NONE: 2
  },
  CLOUD_DRIVER_LABELS: {
    0: 'OpenStack',
    1: 'AWS',
    2: 'None'
  },
  METRIC_COLLECTORS: {
    NONE: 0,
    PROMETHEUS: 1
  },
  METRIC_COLLECTOR_LABELS: {
    0: 'None',
    1: 'Prometheus'
  },
  RANDOM_SAMPLE: {
    DISABLED: 0,
    SIZE: 1,
    RATIO: 2
  },
  NODE_ACTION_TYPES: {
    STOP: 0,
    START: 1,
    WAIT: 2,
    EXECUTE: 3
  },
  NODE_ACTION_TYPE_LABELS: {
    0: 'Stop',
    1: 'Start',
    2: 'Wait',
    3: 'Execute'
  },
  POD_ACTION_TYPES: {
    KILL: 0,
    WAIT: 1
  },
  POD_ACTION_TYPE_LABELS: {
    0: 'Kill',
    1: 'Wait'
  },
  POD_MATCHER_TYPES: {
    NAMESPACE: 0,
    DEPLOYMENT: 1,
    LABELS: 2
  },
  POD_MATCHER_LABELS: {
    0: 'Namespace',
    1: 'Deployment',
    2: 'Labels'
  },
  NODE_STATES: {
    UNKNOWN: 1,
    UP: 2,
    DOWN: 3
  },
  NODE_STATE_LABELS: {
    1: 'Unknown',
    2: 'Up',
    3: 'Down'
  }
}
