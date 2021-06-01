import { IconTypes } from "./icon.interface";

export interface IPropertyLabel {
  property: string;
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
  click: Function;
  label: string;
  icon: string | IconTypes;
  iconType: 'svg' | 'primeng';
}

export type SizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
'gray-7';
