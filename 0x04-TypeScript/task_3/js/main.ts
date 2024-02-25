/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud'

var row: RowElement = {
	firstName : 'Guillaume',
	lastName : 'Salva'
};

const newRowElement: RowElement = {
	firstName : 'Guillaume',
	lastName : 'Salva',
	age: 23
}

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
	firstName : 'Guillaume',
	lastName : 'Salva',
	age: 23
};

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
