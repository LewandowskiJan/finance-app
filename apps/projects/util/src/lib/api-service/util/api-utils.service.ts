import { HttpQueryParams } from '../model/http-query-params';

export class ApiUtilsService {
  public static convertQueryParamsToUrl(httpQueryParams: HttpQueryParams): string {
    return ApiUtilsService.correctFormatForQueryUrl(httpQueryParams);
  }

  public static correctFormatForQueryUrl(httpQueryParams: HttpQueryParams | string): string {
    if (ApiUtilsService.isNull(httpQueryParams)) {
      return '';
    }
    const queryParamAsStr = ApiUtilsService.mapQueryParamsToUrl(httpQueryParams);
    return queryParamAsStr.length === 0 ? '' : `?${queryParamAsStr.join('&')}`;
  }

  public static mapQueryParamsToUrl(httpQueryParams: HttpQueryParams | string): Array<string> {
    return Object.keys(httpQueryParams).map((key: string) => {
      return `${key}=${httpQueryParams[key]}`;
    });
  }

  public static isNull(value: any): boolean {
    return value === null || value === undefined;
  }
}
