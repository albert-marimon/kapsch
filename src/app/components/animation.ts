import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeLateral = 
	trigger('fadeLateral', [
		transition(':enter', [
			style({
				opacity: 0,
				transform: 'translateX(60%)'
			}),
			animate('300ms ease-in',
			style({
				opacity: 1,
				transform: 'translateX(0)'
			}))
		])
	]);

export const fadeToBottom = 
	trigger('fadeToBottom', [
		transition(':enter', [
			style({
				opacity: 0,
				transform: 'translateY(-2%)'
			}),
			animate('400ms ease-in',
			style({
				opacity: 1,
				transform: 'translateY(0)'
			}))
		])
	]);