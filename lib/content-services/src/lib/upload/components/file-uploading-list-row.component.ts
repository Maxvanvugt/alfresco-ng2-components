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

import { FileModel, FileUploadStatus } from '@alfresco/adf-core';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'adf-file-uploading-list-row',
    templateUrl: './file-uploading-list-row.component.html',
    styleUrls: ['./file-uploading-list-row.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FileUploadingListRowComponent {
    @Input()
    file: FileModel;

    @Output()
    cancel: EventEmitter<FileModel> = new EventEmitter<FileModel>();

    @Output()
    remove: EventEmitter<FileModel> = new EventEmitter<FileModel>();

    FileUploadStatus = FileUploadStatus;

    onCancel(file: FileModel): void {
        this.cancel.emit(file);
    }

    onRemove(file: FileModel): void {
        this.remove.emit(file);
    }

    showCancelledStatus(): boolean {
        return this.file.status === FileUploadStatus.Cancelled ||
            this.file.status === FileUploadStatus.Aborted ||
            this.file.status === FileUploadStatus.Deleted;
    }

    get versionNumber(): string {
        return this.file.data.entry.properties['cm:versionLabel'];
    }

    get mimeType(): string {
        if (this.file && this.file.file && this.file.file.type) {
            return this.file.file.type;
        }

        return 'default';
    }

    isUploadVersion(): boolean {
        return (
            !!this.file.data &&
            this.file.options &&
            this.file.options.newVersion &&
            this.file.data.entry.properties &&
            this.file.data.entry.properties['cm:versionLabel']
        );
    }
}
