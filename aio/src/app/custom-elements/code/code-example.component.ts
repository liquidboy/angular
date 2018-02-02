/* tslint:disable component-selector */
import { Component, HostBinding, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { CodeComponent } from './code.component';

/**
 * An embeddable code block that displays nicely formatted code.
 * Example usage:
 *
 * ```
 * <code-example language="ts" linenums="2" class="special" title="Do Stuff">
 * // a code block
 * console.log('do stuff');
 * </code-example>
 * ```
 */
@Component({
  selector: 'code-example',
  template: `    
    <!-- Content projection is used to get the content HTML provided to this component -->
    <div #content style="display: none"><ng-content></ng-content></div>
    
    <header *ngIf="title">{{title}}</header>

    <aio-code [ngClass]="classes"  
              [language]="language" 
              [linenums]="linenums" 
              [path]="path" 
              [region]="region"  
              [hideCopy]="hideCopy" 
              [title]="title">
    </aio-code>
  `,
  styles: [ `:host { display: block }` ],
})
export class CodeExampleComponent implements AfterViewInit {
  classes: {};

  code: string;

  @Input() language: string;

  @Input() linenums: string;

  @Input() region: string;

  @Input()
  set title(title: string) {
    this._title = title;
    this.classes = {
      'headed-code': !!this.title,
      'simple-code': !this.title,
    };
  }
  get title(): string { return this._title; }
  _title: string;

  @Input()
  set path(path: string) {
    this._path = path;
    this.isAvoid = this.path.indexOf('.avoid.') !== -1;
  }
  get path(): string { return this._path; }
  _path = '';

  @Input()
  set hideCopy(hideCopy: boolean) {
    // Coerce the boolean value.
    this._hideCopy = hideCopy != null && `${hideCopy}` !== 'false';
  }
  get hideCopy(): boolean { return this._hideCopy; }
  _hideCopy: boolean;

  @Input('hide-copy')
  set hyphenatedHideCopy(hideCopy: boolean) {
    this.hideCopy = hideCopy;
  }

  @HostBinding('class.avoidFile') isAvoid = false;

  @ViewChild('content') content: ElementRef;

  @ViewChild(CodeComponent) aioCode: CodeComponent;

  ngAfterViewInit() {
    this.code = this.content.nativeElement.innerHTML;
    this.aioCode.updateCode(this.code);
  }
}
