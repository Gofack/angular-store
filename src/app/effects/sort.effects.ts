import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { setSorting, initSorting } from "../reducers/sort";
import { DataService } from "../services/data.service";
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class SortEffects {


	constructor(
		private actions$: Actions,
		private dataService: DataService
	) { }

}