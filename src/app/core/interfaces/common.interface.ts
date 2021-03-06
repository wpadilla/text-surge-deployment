import { IconTypes } from './icon.interface';

export interface IPropertyLabel<T = {}> {
  property: keyof T | string;
  label: string;
}

export interface IPropertyValue {
  property: string;
  value: string;
}

export interface ILabelValue {
  value: any;
  label: string;

}

export interface IAction {
  action: Function;
  label: string;
  icon?: string | IconTypes;
  iconType?: 'svg' | 'primeng';
  isActive?: boolean;
}

export type SizeTypes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type StatusTypes = 'success' | 'warning' | 'danger' | 'info' | 'disabled';

export type StatusRelatedType = {
  [N in string]: StatusTypes
};

export type ColorTypes = '' | 'blue' |
'blue-2' |
'blue-3' |
'blue-4' |
'blue-5' |
'blue-6' |
'blue-7' |
'blue-8' |
'blue-9' |
'orange' |
'yellow' |
'red' |
'red-2' |
'red-3' |
'gray' |
'gray-2' |
'gray-3' |
'gray-4' |
'gray-5' |
'gray-6' |
'black' |
'gray-7';
