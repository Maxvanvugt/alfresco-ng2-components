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

import { ApiService } from '../../core/actions/api.service';
import { ApiUtil } from '../../core/actions/api.util';
import { ProcessDefinitionsService } from './process-definitions.service';
import { ProcessInstancesService } from './process-instances.service';
import { QueryService } from '../../core/actions/identity/query.service';
import { TasksService } from './tasks.service';
import { StringUtil } from '../../core/utils/string.util';
import { Logger } from '../../core/utils/logger';

export class ProcessServices {

    private api: ApiService;
    public processInstancesService: ProcessInstancesService;
    public processDefinitionsService: ProcessDefinitionsService;
    public tasksService: TasksService;
    public queryService: QueryService;

    constructor(api: ApiService) {
        this.api = api;
        this.processInstancesService = new ProcessInstancesService(this.api);
        this.processDefinitionsService = new ProcessDefinitionsService(this.api);
        this.tasksService = new TasksService(this.api);
        this.queryService = new QueryService(this.api);
    }

    async createProcessInstanceAndClaimFirstTask(processDefName, appName, taskIndex: number = 0, processInstanceName?: string) {
        const processInstance = await this.createProcessInstance(processDefName, appName, processInstanceName);
        const task = await this.queryService.getProcessInstanceTasks(processInstance.entry.id, appName);
        await this.tasksService.claimTask(task.list.entries[taskIndex].entry.id, appName);

        return processInstance;
    }

    async createProcessInstance(processDefName, appName, processInstanceName?: string) {
        const processDefinition = await this.processDefinitionsService.getProcessDefinitionByName(processDefName, appName);
        const processInstance = await this.processInstancesService.createProcessInstance(processDefinition.entry.key, appName, {
            name: processInstanceName ? processInstanceName : StringUtil.generateRandomString(),
            businessKey: StringUtil.generateRandomString()
        });

        return processInstance;
    }

    async createProcessInstanceWithVariables(processDefName, appName, variables: any, processInstanceName?: string) {
        const processDefinition = await this.processDefinitionsService.getProcessDefinitionByName(processDefName, appName);
        const processInstance = await this.processInstancesService.createProcessInstance(processDefinition.entry.key, appName, {
            name: processInstanceName ? processInstanceName : StringUtil.generateRandomString(),
            businessKey: StringUtil.generateRandomString(),
            variables: variables
        });

        return processInstance;
    }

    async waitForStatus(processInstanceId: string, appName: string, expectedStatus: string): Promise<any> {
        const predicate = (result: any) => {
            Logger.info(`Process instance ${processInstanceId} status found: ${result.entry.status}`);
            return result.entry.status === expectedStatus;
        };

        const apiCall = async () => this.queryService.getProcessInstance(processInstanceId, appName);
        return ApiUtil.waitForApi(apiCall, predicate, 3, 500);
    }
}
