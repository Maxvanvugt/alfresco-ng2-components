/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
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

import { TabsWidget } from './tabs/tabs.widget';
import { ContainerWidget } from './container/container.widget';
import { TextWidget } from './text/text.widget';
import { NumberWidget } from './number/number.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { MultilineTextWidget } from './multiline-text/multiline-text.widget';

export * from './widget.model';

export * from './tabs/tabs.widget';
export * from './container/container.widget';
export * from './text/text.widget';
export * from './number/number.widget';
export * from './checkbox/checkbox.widget';
export * from './multiline-text/multiline-text.widget';

export const WIDGET_DIRECTIVES: [any] = [
    TabsWidget,
    ContainerWidget,
    TextWidget,
    NumberWidget,
    CheckboxWidget,
    MultilineTextWidget
];
