import { HttpErrorResponse } from './../../../../domain/model/HttpErrorResponse';
import { ApiService } from './../../../../domain/services/api.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { CsvRecord } from '../../model/CsvRecord';
import { HttpRequestMethods } from '@modules/domain/model/HttpRequestMethods';

export interface Record {
  date: string;
  accountFrom: string;
  accountTo: string;
  value: string;
  description: string;
  currency: string;
  exchangeRate: string;
  valueInPln?: string;

  transferLines: {
    categoryId: string;
    expensesGroupId: string;
    productId: string;
    targetId: string;
    eventId: string;
    projectId: string;
    currency: string;
    exchangeRate: string;
    importance: string;
    value: string;
    typeId: string;
    valueInPln?: string;
  };
}

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CsvReaderComponent implements OnInit {
  public records$: BehaviorSubject<any> = new BehaviorSubject([]);
  public tableHeader$: BehaviorSubject<any> = new BehaviorSubject([]);
  public resultJson$: BehaviorSubject<any> = new BehaviorSubject([]);
  public records: any[] = [];
  public header: any[] = [];
  public result: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  constructor(private cdr: ChangeDetectorRef, private apiService: ApiService) {}

  ngOnInit(): void {}

  public uploadListener($event: any): void {
    const text = [];
    const files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.records$.next(this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length));
        this.mapArrayToJson();
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }

    this.cdr.markForCheck();
  }

  public getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    // console.log(csvRecordsArray);

    const csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      const currentRecord = (<string>csvRecordsArray[i]).split(';');
      if (currentRecord.length === headerLength) {
        const icsvRecord: Record = {
          date: currentRecord[0].trim(),
          accountFrom: currentRecord[1].trim(),
          accountTo: currentRecord[2].trim(),
          value: currentRecord[3].trim().replace(',', '.'),
          description: currentRecord[13].trim(),
          currency: currentRecord[14].trim(),
          exchangeRate: currentRecord[15].trim().replace(',', '.'),
          // valueInPln: currentRecord[18].trim(),
          transferLines: {
            categoryId: currentRecord[4].trim(),
            expensesGroupId: currentRecord[5].trim(),
            productId: currentRecord[6].trim(),
            targetId: currentRecord[7].trim(),
            eventId: currentRecord[8].trim(),
            projectId: currentRecord[9].trim(),
            currency: currentRecord[14].trim(),
            exchangeRate: currentRecord[15].trim().replace(',', '.'),
            importance: currentRecord[12].trim(),
            value: currentRecord[16].trim().replace(',', '.'),
            typeId: currentRecord[18].trim(),
            valueInPln: currentRecord[17].trim(),
            // valueInPln: currentRecord[17].trim(),
          },
        };

        // const csvRecord: CsvRecord = new CsvRecord();
        // csvRecord._id = currentRecord[0].trim();
        // csvRecord.currency = currentRecord[1].trim();
        // csvRecord.exchangeRate = currentRecord[2].trim();
        // csvRecord.transferLineIds = currentRecord[3].trim();
        // csvRecord.accountFrom = currentRecord[4].trim();
        // csvRecord.accountTo = currentRecord[5].trim();
        // csvRecord.date = currentRecord[5].trim();
        // csvRecord.valueInPln = currentRecord[5].trim();
        // csvRecord.__v = currentRecord[5].trim();

        // csvArr.push(csvRecord);
        csvArr.push(icsvRecord);
      }
    }
    // console.log(csvArr);
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (<string>csvRecordsArr[0]).split(';');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    this.header = headerArray;
    this.tableHeader$.next(headerArray);

    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  mapArrayToJson(): void {
    this.header;
    // this.records.map((record) => {
    //   return record;
    // });

    // _.groupBy
    function groupBy(arr, key) {
      const reducer = (grouped, item) => {
        const groupValue = item[key];
        if (!grouped[groupValue]) {
          grouped[groupValue] = [];
        }
        grouped[groupValue].push(item);
        return grouped;
      };
      return arr.reduce(reducer, {});
    }

    const results = groupBy(this.records, 'date');
    const groupByAccountTo: any[] = [];
    const groupByAccountFrom: any[] = [];
    const result: any[] = [];

    for (const x in results) {
      if (results.hasOwnProperty(x)) {
        groupByAccountFrom.push(groupBy(results[x], 'accountFrom'));
      }
    }

    groupByAccountFrom.forEach((gr) => {
      for (const y in gr) {
        if (gr.hasOwnProperty(y)) {
          groupByAccountTo.push(groupBy(gr[y], 'accountTo'));
        }
      }
    });

    groupByAccountTo.map((res) => {
      for (const y in res) {
        if (res.hasOwnProperty(y)) {
          result.push(res[y]);
        }
      }
    });

    const result2 = result.map((arr: any[]) => {
      if (arr.length === 1) {
        return { ...arr[0], transferLines: [arr[0].transferLines] };
      } else {
        return arr.map((elem, index, array) => {
          return {
            ...elem,
            transferLines: [...array.map((element) => element.transferLines)],
          };
        })[0];
      }
    });

    this.result = result2;
    console.log(result2);
    // this.resultJson$.next(JSON.stringify(result2));
    // const result1 = groupBy(result, 'accountFrom');
    // const result2 = groupBy(result1, 'accountTo');

    // console.log(results);
  }

  public async sendToServer(): Promise<void> {
    for (let i = 0; i < this.result.length; i = i + 50) {
      console.log(this.result.slice(i, i + 50));
      await this.apiService
        .request<any[], HttpErrorResponse>('account/transfer/addMany', {
          body: this.result.slice(i, i + 50),
          method: HttpRequestMethods.POST,
        })
        .toPromise();
    }
  }
}
