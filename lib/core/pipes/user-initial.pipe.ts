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

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UserProcessModel } from '../models/user-process.model';
import { EcmUserModel } from '../models/ecm-user.model';
import { IdentityUserModel } from '../models/identity-user.model';

export type User = (EcmUserModel | UserProcessModel  | IdentityUserModel) & { displayName?: string, username?: string };

@Pipe({
    name: 'usernameInitials'
})
export class InitialUsernamePipe implements PipeTransform {

    constructor(private sanitized: DomSanitizer) {
    }

    transform(user: User, className: string = '', delimiter: string = ''): SafeHtml {
        let safeHtml: SafeHtml = '';
        if (user) {
            const initialResult = this.getInitialUserName(
                user.firstName ?? user.displayName,
                user.lastName,
                delimiter,
                user.username
            );
            safeHtml = this.sanitized.bypassSecurityTrustHtml(`<div id="user-initials-image" class="${className}">${initialResult}</div>`);
        }
        return safeHtml;
    }

    getInitialUserName(firstName: string, lastName: string, delimiter: string, username?: string): string {
        firstName = (firstName ? firstName[0] : '');
        lastName = (lastName ? lastName[0] : '');

        if (firstName && lastName) {
            return firstName + delimiter + lastName;
        }

        return username ? username[0] : '';
    }
}
