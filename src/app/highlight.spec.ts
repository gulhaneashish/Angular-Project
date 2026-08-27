import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {

  it('should create an instance', () => {

    const element = {
      nativeElement: {
        style: {}
      }
    } as ElementRef;

    const directive = new Highlight(element);

    expect(directive).toBeTruthy();

  });

});