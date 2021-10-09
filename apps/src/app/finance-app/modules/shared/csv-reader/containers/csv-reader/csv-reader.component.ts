import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { HttpErrorResponse, HttpRequestMethods } from '@my-lib/util';

import { GlobalApiService } from '../../../services/global-api.service';
import { CsvRecord } from '../../model/CsvRecord';

export function groupBy(arr, key): any {
  const reducer = (grouped: any, item: any): any => {
    const groupValue = item[key];
    if (!grouped[groupValue]) {
      grouped[groupValue] = [];
    }
    grouped[groupValue].push(item);
    return grouped;
  };
  return arr.reduce(reducer, {});
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
  @ViewChild('csvReader', { static: true }) csvReader: any;

  constructor(private cdr: ChangeDetectorRef, private apiService: GlobalApiService) {}

  ngOnInit(): void {}

  public uploadListener($event: any): void {
    const files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = (): void => {
        const csvData = reader.result;
        const csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.records$.next(this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length));
        this.mapArrayToJson();
      };
      reader.onerror = (): void => {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }

    this.cdr.markForCheck();
  }

  public getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any): CsvRecord[] {
    const csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      const currentRecord = (<string>csvRecordsArray[i]).split(';');
      if (currentRecord.length === headerLength) {
        const csvRecord: CsvRecord = {
          date: currentRecord[0].trim(),
          accountFrom: currentRecord[1].trim(),
          accountTo: currentRecord[2].trim(),
          value: currentRecord[3].trim().replace(',', '.'),
          description: currentRecord[13].trim(),
          currency: currentRecord[14].trim(),
          exchangeRate: currentRecord[15].trim().replace(',', '.'),
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
          },
        };
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  private isValidCSVFile(file: any): string {
    return file.name.endsWith('.csv');
  }

  private getHeaderArray(csvRecordsArr: any): string[] {
    const headers = (<string>csvRecordsArr[0]).split(';');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    this.header = headerArray;
    this.tableHeader$.next(headerArray);

    return headerArray;
  }

  public fileReset(): void {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  private mapArrayToJson(): void {
    this.header;

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
  }

  public async sendToServer(): Promise<void> {
    for (let i = 0; i < this.result.length; i = i + 50) {
      await this.apiService
        .request<any[], HttpErrorResponse>('account/transfer/addMany', {
          body: this.result.slice(i, i + 50),
          method: HttpRequestMethods.POST,
        })
        .toPromise();
    }
  }
}
