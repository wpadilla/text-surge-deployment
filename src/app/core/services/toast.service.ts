import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class ToastService extends MessageService {
  constructor() {
    super();
  }

  showSuccess(): void {
    this.add({severity: 'success', summary: 'Success', detail: 'Message Content'});
  }

  showInfo(): void {
    this.add({severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showWarn(): void {
    this.add({severity: 'warn', summary: 'Warn', detail: 'Message Content'});
  }

  showError(): void {
    this.add({severity: 'error', summary: 'Error', detail: 'Message Content'});
  }

  showCustom(): void {
    this.add({severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file'});
  }

  showTopLeft(): void {
    this.add({key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showTopCenter(): void {
    this.add({key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content'});
  }

  showBottomCenter(): void {
    this.add({key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content'});
  }

  showConfirm(): void {
    this.clear();
    this.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Are you sure?',
      detail: 'Confirm to proceed'
    });
  }
  showMultiple(): void {
    this.addAll([
      {severity: 'success', summary: 'Message 1', detail: 'Message Content'},
      {severity: 'info', summary: 'Message 2', detail: 'Message Content'},
      {severity: 'warn', summary: 'Message 3', detail: 'Message Content'}
    ]);
  }

  showSticky(): void {
    this.add({severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true});
  }

  onConfirm(): void {
    this.clear('c');
  }

  onReject(): void {
    this.clear('c');
  }

  clear(): void {
    this.clear();
  }
}
