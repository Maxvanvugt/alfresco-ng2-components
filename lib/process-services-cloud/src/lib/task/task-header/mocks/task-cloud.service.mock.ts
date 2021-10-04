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

import { AppConfigService } from '@alfresco/adf-core';
import { DEFAULT_TASK_PRIORITIES, TaskDetailsCloudModel, TaskPriorityOption } from '@alfresco/adf-process-services-cloud';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { taskAssignedDetails } from './fake-task-response.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskCloudServiceMock {
  dataChangesDetected$ = new Subject();
  TASK_ASSIGNED_STATE = 'ASSIGNED';

  getTaskById(appName?: string, _taskId?: string): Observable<TaskDetailsCloudModel> {
    console.log(appName)
    return of(taskAssignedDetails);
  }

  getCandidateUsers(_appName: string, _taskId: string): Observable<string[]> {
    return of(['user1', 'user2']);
  }

  getCandidateGroups(_appName: string, _taskId: string): Observable<string[]> {
    return of(['group1', 'group2']);
  }

  getPriorityLabel(priority: number): string {
    const priorityItem = this.priorities.find((item) => item.value === priority.toString()) || this.priorities[0];
    // return this.translateService.instant(priorityItem.label);
    return priorityItem.label;
  }

  get priorities(): TaskPriorityOption[] {
    return this.appConfigService.get('adf-cloud-priority-values') || DEFAULT_TASK_PRIORITIES;
  }

  isTaskEditable(taskDetails: TaskDetailsCloudModel) {
    return taskDetails.status === this.TASK_ASSIGNED_STATE;
  }

  isAssigneePropertyClickable = () => false;

  constructor(private appConfigService: AppConfigService) {}

  updateTask(appName?: string, _taskId?: string, _payload?: any): Observable<TaskDetailsCloudModel> {
    console.log(appName)
    return of(taskAssignedDetails);
  }
}
