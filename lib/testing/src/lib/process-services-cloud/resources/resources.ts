/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
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

/* cSpell:disable */
export const ACTIVITI_CLOUD_APPS: any = {
    CANDIDATE_BASE_APP: {
        name: 'candidatebaseapp',
        file_location: 'https://github.com/Alfresco/alfresco-ng2-components/blob/develop/e2e/resources/activiti7/candidatebaseapp.zip?raw=true',
        processes: {
            candidateUserProcess: 'candidateuserprocess',
            candidateGroupProcess: 'candidategroupprocess',
            anotherCandidateGroupProcess: 'anothercandidategroup',
            uploadFileProcess: 'uploadfileprocess',
            processwithstarteventform: 'processwithstarteventform',
            processwithjsonfilemapping: 'processwithjsonfilemapping',
            assigneeProcess: 'assigneeprocess',
            errorStartEventProcess: {
                process_name: 'errorstartevent',
                error_id: 'Error_END_EVENT',
                error_code: '123'
            },
            errorBoundaryEventProcess: {
                process_name: 'errorboundaryevent',
                error_id: 'Error_END_EVENT',
                error_code: '567'
            },
            errorExclusiveGateProcess: {
                process_name: 'errorexclusivegate',
                error_id: 'Error_OK',
                error_code: '200'
            }
        },
        forms: {
            starteventform: 'starteventform',
            formtotestvalidations: 'formtotestvalidations',
            uploadfileform: 'uploadfileform',
            inputform: 'inputform',
            outputform: 'outputform'
        },
        security: [
            { 'role': 'ACTIVITI_ADMIN', 'groups': [], 'users': ['superadminuser', 'processadminuser'] },
            { 'role': 'ACTIVITI_USER', 'groups': ['hr', 'testgroup'], 'users': ['hruser', 'salesuser'] }
        ],
        tasks: {
            uploadFileTask: 'UploadFileTask',
            candidateUserTask: 'candidateUserTask'
        }
    },
    SIMPLE_APP: {
        name: 'simpleapp',
        file_location: 'https://github.com/Alfresco/alfresco-ng2-components/blob/develop/e2e/resources/activiti7/simpleapp.zip?raw=true',
        processes: {
            processwithvariables: 'processwithvariables',
            simpleProcess: 'simpleprocess',
            dropdownrestprocess: 'dropdownrestprocess',
            multilingualprocess: 'multilingualprocess',
            processWithTabVisibility: 'processwithtabvisibility',
            startmessageevent: 'start-message-event',
            intermediatemessageevent: 'intermediate-message-event',
            intboundaryevent: 'int-boundary-event',
            nonintboundaryevent: 'nonint-boundary-event',
            intboundarysubprocess: 'int-boundary-subprocess',
            intstartmessageevent: 'int-start-message-event',
            nonintstartmessageevent: 'nonint-start-message-event',
            siblingtaskprocess: 'siblingtaskprocess',
            startTaskVisibilityForm: 'start-task-visibility-form',
            startVisibilityForm: 'start-visibility-form',
            processstring: 'processstring',
            processinteger: 'processinteger',
            processboolean: 'processboolean',
            processdate: 'processdate',
            multiprocess: 'multiprocess',
            terminateexclusive: 'terminate-exclusive',
            terminatesubprocess: 'terminate-subprocess',
            multiinstancedmnparallel: 'multiinstance-dmnparallel',
            multiinstancecallactivity: 'multiinstance-callactivity',
            multiinstancecollection: 'multiinstance-collection',
            multiinstancecompletion: 'multiinstance-completion',
            multiinstancesequential: 'multiinstance-sequential',
            multiinstanceservicetask: 'multiinstance-servicetask',
            multiinstanceusertask: 'multiinstance-usertask',
            multiinstancedmnsequence: 'multiinstance-dmnsequence',
            multiinstancemanualtask: 'multiinstance-manualtask',
            multiinstancesubprocess: 'multiinstance-subprocess',
            calledprocess: 'calledprocess',
            booleanvisibilityprocess: 'booleanvisibilityprocess',
            numbervisibilityprocess: 'numbervisibilityprocess',
            processformoutcome: 'outcomebuttons',
            uploadSingleMultipleFiles: 'upload-single-multiple-pro',
            processDisplayRestJson: 'process-display-rest-json',
            poolStartEndMessageThrow: 'pool-start-end-mess-throw',
            poolStartEndMessageCatch: 'pool-start-end-mess-catch',
            poolProcessCalled: 'pool-process-called',
            poolProcessCalling: 'pool-process-calling',
            poolNonIntBoundaryThrown: 'pool-nonint-boundary-throw',
            poolNonIntBoundaryCatch: 'pool-nonint-boundary-catch',
            poolIntermediateMessageThrow: 'pool-interm-message-throw',
            poolIntermediateMessageCatch: 'pool-interm-message-catch',
            poolInterruptingBoundarySubprocessThrow: 'pool-int-bound-subpr-throw',
            poolInterruptingBoundarySubprocessCatch: 'pool-int-bound-subpr-catch',
            poolInterruptingBoundaryThrow: 'pool-int-boundary-throw',
            poolInterruptingBoundaryCatch: 'pool-int-boundary-catch',
            attachFilesProcess: 'attach-files-process',
            attachFileVisible: 'attach-file-visible',
            attachFileInvisible: 'attach-file-invisible',
            attachLocalFile: 'attach-local-file'
        },
        forms: {
            tabVisibilityFields: {
                name: 'tabvisibilitywithfields'
            },
            tabVisibilityVars: {
                name: 'tabvisibilitywithvars'
            },
            usertaskform: {
                name: 'usertaskform'
            },
            dropdownform: {
                name: 'dropdownform'
            },
            formVisibility: {
                name: 'form-visibility'
            },
            multilingualform: {
                name: 'multilingualform'
            },
            inputform: {
                name: 'inputform'
            },
            outputform: {
                name: 'outputform'
            },
            exclusiveconditionform: {
                name: 'exclusive-condition-form'
            },
            uploadlocalfileform: {
                name: 'upload-localfile-form'
            },
            booleanvisibility: {
                name: 'booleanvisibility'
            },
            requirednumbervisibility: {
                name: 'requirednumbervisibility'
            },
            mealform: {
                name: 'mealform'
            },
            resultcollectionform: {
                name: 'resultcollectionform'
            },
            uploadSingleMultiple: {
                name: 'upload-single-multiple',
                widgets: {
                    contentMultipleAttachFileId: 'UploadMultipleFileFromContentId'
                }
            },
            formWithJsonWidget: {
                name: 'form-with-json-widget'
            },
            formWithAllWidgets: {
                name: 'form-with-all-widgets'
            },
            poolForm: {
                name: 'pool-usertaskform'
            },
            attachFilesForm: {
                name: 'attach-files',
                /* cSpell:disable */
                attachFileWidget1: 'Attachfile09lgsk',
                attachFileWidget2: 'Attachfile0wopvy'
            },
            attachFileVisible: {
                name: 'attach-file-visible',
                textField: 'Text0t9anw',
                attachFileWidget1: 'Attachfile0tccnd',
                attachFileWidget2: 'Attachfile08cfo7'
            },
            attachFileInvisible: {
                name: 'attach-file-invisible',
                textField: 'Text0nmwr7',
                attachFileWidget1: 'Attachfile0l72dj',
                attachFileWidget2: 'Attachfile0lccsg'
            },
            attachLocalFile: {
                name: 'attach-local-file',
                attachFileWidget1: 'Attachfile0ku0bu',
                attachFileWidget2: 'Attachfile04mfeb'
                /* cSpell:enable */
            }
        },
        tasks: {
            processstring: 'inputtask',
            uploadSingleMultipleFiles: 'UploadSingleMultipleFiles'
        },
        security: [
            { 'role': 'ACTIVITI_ADMIN', 'groups': [], 'users': ['superadminuser', 'processadminuser'] },
            { 'role': 'ACTIVITI_USER', 'groups': ['hr', 'sales', 'testgroup'], 'users': ['hruser'] }
        ],
        infrastructure: {connectors: {restconnector: {}}, bridges: {}}
    },
    SUB_PROCESS_APP: {
        name: 'subprocessapp',
        file_location: 'https://github.com/Alfresco/alfresco-ng2-components/blob/develop/e2e/resources/activiti7/subprocessapp.zip?raw=true',
        processes: {
            processchild: 'processchild',
            processparent: 'processparent'
        },
        security: [
            { 'role': 'ACTIVITI_ADMIN', 'groups': [], 'users': ['superadminuser'] },
            { 'role': 'ACTIVITI_USER', 'groups': ['hr', 'testgroup'], 'users': ['hruser'] }
        ]
    }
};
