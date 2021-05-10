import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ApiService } from './../../../../domain/services/api.service';
import { CsvRecord } from '../../model/CsvRecord';
import { HttpErrorResponse } from '@modules/domain/model/HttpErrorResponse';
import { HttpRequestMethods } from '@modules/domain/model/HttpRequestMethods';

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
